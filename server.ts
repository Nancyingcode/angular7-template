// These are important and needed before anything else
// tslint:disable-next-line:no-import-side-effect
import 'reflect-metadata';
// tslint:disable-next-line:no-import-side-effect
import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';

import * as express from 'express';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

const FROENT_FOLDER = 'client';
const SERVER_FOLDER = 'server';

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, FROENT_FOLDER, 'index.html')).toString();

const domino = require('domino');
const win = domino.createWindow(template);

// tslint:disable-next-line:no-string-literal
global['window'] = win;
Object.defineProperty(win.document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});

// tslint:disable-next-line:no-string-literal
global['document'] = win.document;
// tslint:disable-next-line:no-string-literal
global['CSS'] = null;

// global.navigator.userAgent = global.navigator.userAgent || 'all';

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`./dist/${SERVER_FOLDER}/main`);

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

app.engine('html', (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    // Our index.html
    document: template,
    url: options.req.url,
    // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }).then(html => {
    callback(null, html);
  });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, FROENT_FOLDER));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, FROENT_FOLDER)));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, FROENT_FOLDER, 'index.html'), { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});