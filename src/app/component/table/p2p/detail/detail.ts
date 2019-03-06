import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2p-table-detail',
  templateUrl: './detail.html',
  styleUrls: ['./detail.less']
})

export class P2PTableDetailComponent implements OnInit {
  @Input() props;

  constructor() { }

  ngOnInit(): void { }
}
