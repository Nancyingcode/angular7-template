import { Component, HostBinding, Input } from '@angular/core';
@Component({
  selector: 'app-href',
  template: `<a class="href" href={{prop.link}} download={{prop.file}}>{{prop.name}}</a>`,
  styles: [`
    .href {
      display: inline-block;
      font-size: @default-fontz;
      padding: 1px 15px;
      height: 32px;
      line-height: 32px;
      border-radius: 4px;
      box-shadow: 0 2px 0 rgba(0, 0, 0, .035);
      color: #fff;
      background: #20BDFF  !important;
    }

    .href:hover {
      outline: none;
      background: rgb(17, 140, 192)  !important;
    }
  `]
})

export class HrefComponent {
  @Input() prop;
  // @HostBinding('class.href') href = true;
}
