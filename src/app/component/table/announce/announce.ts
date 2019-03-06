import {
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NzDrawerService } from 'ng-zorro-antd';
import { AnnounceDetailComponent } from './detail/announce';
import { showAnimations, NormalButton } from './index';

@Component({
  selector: 'app-announce-table',
  templateUrl: './announce.html',
  styleUrls: ['./announce.less'],
  animations: [ showAnimations ]
})

export class AnnounceTableComponent implements OnInit {
  @ViewChild('drawerTemplate') drawerTemplate;
  @Input() props: any[];
  @Input() buttonProps: NormalButton[];
  @Input() isPagination = false;
  @Input() pagination;
  @Input() contentType: string;

  public isShow = false;
  public visible: boolean;

  public data: any;
  public title: string;
  public content: string;
  public createTime: string;
  public url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private drawerService: NzDrawerService) {
    this.visible = false;
    this.contentType = 'default';
  }

  ngOnInit(): void { }

  select(item: any, button: NormalButton): void {
    button.callback(item);
  }

  onClick(item: any): void {
    this.isShow = true;
    this.visible = true;
    this.title = item.title;
    this.content = item.content;
    this.createTime = item.createTime;

    this.data = item;
  }

  updatePayment = (item: any): void => {
    const drawerRef = this.drawerService.create<AnnounceDetailComponent, { data: any }, boolean>({
      nzTitle: '详情',
      nzWidth: '600px',
      nzContent: AnnounceDetailComponent,
      nzContentParams: {
        data: item
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      if (data) {
        // this.setData(page);
      }
    });
  }

  close(): void {
    this.drawerTemplate.close();
  }

}
