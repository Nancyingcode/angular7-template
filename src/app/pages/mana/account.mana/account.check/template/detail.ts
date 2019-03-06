import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-detail',
  template: `
  <div>
    <img [src]="img" alt="...">
  </div>`,
  styles: [`
  img {
    width: 500px;
    height: auto;
  }
  `]
})

export class AccountCheckDetailComponent implements OnInit {
  @Input() img: any;
  constructor() { }

  ngOnInit(): void { }
}
