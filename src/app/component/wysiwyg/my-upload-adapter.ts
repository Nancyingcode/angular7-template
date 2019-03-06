import { LoginService } from '../../service';
import { Config, Log } from '../index';

const { host } = Config;
const { articalFile } = Config.apis;

const console = new Log('UploadAdapter');

interface UploadRespone {
  code: number;
  msg: string;
  data: {
    savePath: string;
    nginxPath: string;
  };
}

export default class MyUploadAdapter {
  xhr: XMLHttpRequest;
  url: string;
  constructor(private loader: any, private ls: LoginService) {
      // CKEditor 5's FileLoader instance.
      this.loader = loader;
      this.ls = ls;
      // URL where to send files.
      this.url = `${host}${articalFile}`;
  }

  // Starts the upload process.
  upload(): Promise<any> {
      return new Promise( ( resolve, reject ) => {
          this._initRequest();
          this._initListeners( resolve, reject );
          this._sendRequest();
      } );
  }

  // Aborts the upload process.
  abort(): void {
      if ( this.xhr ) {
          this.xhr.abort();
      }
  }

  // Example implementation using XMLHttpRequest.
  _initRequest(): void {
      const xhr = this.xhr = new XMLHttpRequest();

      xhr.open( 'POST', this.url, true );
      xhr.responseType = 'json';
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners( resolve: any, reject: any ): void {
      const xhr = this.xhr;
      const loader = this.loader;
      const genericErrorText = 'Couldn\'t upload file:' + ` ${ loader.file.name }.`;

      xhr.addEventListener( 'error', () => reject( genericErrorText ) );
      xhr.addEventListener( 'abort', () => reject() );
      xhr.addEventListener( 'load', () => {
          const response = xhr.response;

          if ( !response || response.error ) {
              return reject( response && response.error ? response.error.message : genericErrorText );
          }

          console.logger(response);
          // If the upload is successful, resolve the upload promise with an object containing
          // at least the "default" URL, pointing to the image on the server.
          resolve( {
              default: response.data.nginxPath
          } );
      } );

      if ( xhr.upload ) {
          xhr.upload.addEventListener( 'progress', evt => {
              if ( evt.lengthComputable ) {
                  loader.uploadTotal = evt.total;
                  loader.uploaded = evt.loaded;
              }

              console.log(evt);
          } );
      }
  }

  // Prepares the data and sends the request.
  _sendRequest(): void {
      const data = new FormData();
      const adminId = this.ls.getAdminId();
      data.append( 'adminId', adminId.toString());
      data.append( 'file', this.loader.file );

      const token = this.ls.getToken();
      this.xhr.setRequestHeader('token', token);
      this.xhr.send( data );
  }
}
