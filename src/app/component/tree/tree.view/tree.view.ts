import {
  Component,
  Injectable,
  Input,
  OnInit,
  OnChanges
} from '@angular/core';
import { Log } from './index';
const console = new Log('TableComponent');


@Component({
  selector: 'app-tree-view',
  templateUrl: './tree.view.html',
  styleUrls: ['./tree.view.less']
})

@Injectable()
export class TreeViewComponent implements OnInit, OnChanges {

  constructor() {

  }

  ngOnInit() { }

  ngOnChanges() { }

}
