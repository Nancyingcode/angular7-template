import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';

import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { LoginService } from '../../service';
import { NotNamedButton } from '../nav';
import MyUploadAdapter from './my-upload-adapter';

function MyCustomUploadAdapterPlugin(editor: any): any {
  // editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
  //     return new MyUploadAdapter( loader );
  // };
}

DecoupledEditor
  .create(document.querySelector('#editor'), {
    extraPlugins: [MyCustomUploadAdapterPlugin]
  })
  .then(res => { })
  .catch(err => console.log(err));

@Component({
  selector: 'app-document-editer',
  templateUrl: './wysiwyg.html',
  styleUrls: ['./wysiwyg.less']
})

export class WysiwygComponent implements OnInit {
  @Input() button: NotNamedButton;
  public Editor = DecoupledEditor;
  public model = {
    editorData: '<p>在这里编辑内容</p>'
  };

  constructor(private ls: LoginService, @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void { }

  public onReady(editor: any): any {
    if (isPlatformBrowser(this.platformId)) {
      editor.ui.view.editable.element.parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.view.editable.element
      );

      editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {

        // Configure the URL to the upload script in your back-end here!
        return new MyUploadAdapter(loader, this.ls);
      };
    }
  }

  public onChange({ editor }: ChangeEvent): void {
    let data = {};
    if (isPlatformBrowser(this.platformId)) {
      if (editor.getData()) {
        data = editor.getData();
        this.button.callback(data);
      }
    }
  }

}
