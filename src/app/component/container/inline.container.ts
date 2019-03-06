import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
  <div [ngSwitch]="type">
    <div class="tbg" *ngSwitchDefault>
      <ng-content *ngTemplateOutlet="slot"></ng-content>
    </div>
    <div class="start" *ngSwitchCase="'start'">
      <ng-content *ngTemplateOutlet="slot"></ng-content>
    </div>
    <ng-template #slot><ng-content></ng-content></ng-template>
  </div>`,
  styles: [`
    .start {
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
    }
  `]
})

export class InlineContainerComponent {
  @Input() type: string;

  constructor() {
    this.type = '';
  }
}
