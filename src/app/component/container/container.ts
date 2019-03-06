import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
  <div class="template" >
    <ng-content></ng-content>
  </div>`,
  styles: [``]
})

export class ContainerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
