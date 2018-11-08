# 需要使用Angular代理跨域 
```javascript
    npm run starts
```
- 配置文件与src同级 `proxy.json`
```json
{
    "/api":{
        "target":"http://127.0.0.1:80",
        "secure": false,
        "changeOrigin": true,
        "pathRewrite":{
            "^/api":""
        }
    }
}
```
# console
> 在组件内引用 tools/console 的 Log类
> const console = new Log('能代表当前组件的信息，类名即可');
> 然后通过console对象的方法打印信息
- 蓝色内容为测试打印内容 log
- 绿色为日志打印内容 info
- 红色是错误信息 err

# 用到的一些内容

- `ngx-bootstrap`
- `boostrap4`

# Component

# Table
- selector `app-table`
- data `[标题数组string[],字段数组string[],列表数据(json数组)]`

# Toast

#### default-toast
- selector `app-default-toast`
- data `text = 要插入模板的字符串`

- 代码示例
```javascript
import { Component, ViewChild } from '@angular/core';

import { DefaultToastComponent } from './component/toast/defaultToast/default.toast';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'app';

  @ViewChild(DefaultToastComponent) // 引用 DefaultToastComponent
  private toast: DefaultToastComponent;

  showToast() {
    this.toast.showModal(); // 显示modal的方法
  }
}

```
#### 在模板中引用它
```html
    <app-default-toast></app-default-toast>
```

#### text-toast

在要使用的地方这样定义 constructor
```javascript
    constructor(private loginS: LoginService, injector: Injector, public toasts: ToastService) {
        const ToastElement = createCustomElement(TextToastComponent, { injector });
        customElements.define('popup-element', ToastElement);
    }
```
然后调用`ToastService`中的`showToast`方法


# Pagination

#### default-pagination
- selector `app-default-pagination`
- data ``

# DatePick

#### default-datepick
- selector `app-default-datepick`
- data 

# Timepick

#### default-timepick
- selector `app-default-timepick`

# Menu

- selector `app-menu`
- data none
