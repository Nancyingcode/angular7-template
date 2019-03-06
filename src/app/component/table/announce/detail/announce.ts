import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-announce-detail',
  templateUrl: './announce.html',
  styleUrls: ['./announce.less']
})

export class AnnounceDetailComponent implements OnInit {
  @Input() type: string;
  @Input() data: any;
  constructor() {
  }
  ngOnInit(): void { }
}
