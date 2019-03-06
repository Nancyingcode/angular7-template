import { Component, HostBinding } from '@angular/core';
@Component({
  selector: 'app-icon-star',
  template: `*`,
  styles: [`
    .color {
      color: #f5222d;
    }
  `]
})

export class IconStarComponent {
  @HostBinding('class.color') color = true;
}
