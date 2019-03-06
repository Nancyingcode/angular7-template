# What about this project

- 商城管理
- 用户管理

# How to use

```terminal
    npm install
```
在根目录的`proxy.config`
 `proxy.json`
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
将 `target` 修改为你的服务器地址
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
- `ng-zorro-antd`

# Component

## 表格　app-table

### 属性 

| 字段         | 名称     | 类型           |
| ------------ | -------- | -------------- |
| props        | 数据源   | Object         |
| buttonProps  | 按钮组   | NormalButton[] |
| isPagination | 是否分页 | boolean        |
| pagination   | 分页按钮 | NotNamedButton |

### props 

| 字段   | 名称     | 类型     |
| ------ | -------- | -------- |
| title  | 标题     | string[] |
| column | 显示字段 | string[] |
| list   | 数据     | any[]    |
| count  | 数据量   | number   |

代码示例
```typescript
import { Component } from '@angular/core';

interface NormalButton {
                    name: string;
                    type: string;
                    style?: string;   // primary, default, delete
           callback(item: {}): void;     // 当你需要改变点击后的样式
                    choose?: string;
                    hidden?: boolean;
                    right?: string;   // 权限
}

interface TableProps {
  title: string[];
  column: string[];
  list: any[];
  count: number;
}

@Component({
  selector   : 'app-root',
  template: `<app-table [props]="data" [buttonProps]="buttonProps" [isPagination]="isPagination" [pagination]="paginationButton"></app-table>`,
  styles  : ['']
})

export class AppComponent {
  public isPagination: boolean;
  public data: TableProps;
  public buttonProps: NormalButton[];

  constructor() {
	  this.isPagination = true;
      this.data = {
          title: ['手机号', '真实姓名', '身份证号码', '实名状态', '创建时间'],
          column: ['phone', 'realname', 'idCard', 'isRealStr', 'createTime', 'amount', 'inviteCode'],
          list,
          count
    }; 
    
      this.buttonProps = [
          {
            name: '详情',
            type: 'button',
            style: 'info',
            callback: (item) => { // do something }
          }
    	];
    
    	this.paginationButton = {
            callback: (index: number) => { // do pagination here }
  		};
    }
}
```

## 搜索框 app-search-input

### 属性

| 字段  | 名称     | 类型           |
| ----- | -------- | -------------- |
| props | 搜索按钮 | NotNamedButton |

代码示例
```typescript
import { Component } from '@angular/core';

interface NotNamedButton {
                    placeholder?: string;
           callback(item: {}): void;
}

@Component({
  selector   : 'app-root',
  template: `<app-search-input class="tbg" [props]="searchButton"></app-search-input>`,
  styles  : [``]
})

export class AppComponent {
	public searchButton: NotNamedButton;
  	constructor() {
        this.searchButton = {
            placeholder: '请输入手机号',
            callback: (text: string) => { // do search here }
  		};
  	}
}
```

## 按钮 app-small-button

### 属性

| 字段      | 名称         | 类型         |
| --------- | ------------ | ------------ |
| isLoading | 是否显示加载 | boolean      |
| props     | 按钮对象     | NormalButton |

要改变按钮样式

修改`props`的style属性

style

| 值      | 介绍       | 颜色 |
| ------- | ---------- | ---- |
| primary | 基础按钮   | 蓝色 |
| default | 修改类按钮 | 白色 |
| delete  | 删除类按钮 | 红色 |
| disable | 不可用按钮 | 灰色 |
| success | 通过类按钮 | 绿色 |
| info    | 详情类按钮 | 青色 |
| purple  | 紫色按钮   | 紫色 |
| text    | 文字类按钮 | 透明 |

### 按钮类型 
`props`的　choose属性选择按钮类型

| 值                        | 介绍           |
| ------------------------- | -------------- |
| default(不添加choose属性) | 普通按钮       |
| loading                   | 加载按钮       |
| img                       | 图片按钮       |
| inner                     | 可插入HTML按钮 |

`props`的 `type`属性可以决定是否是表单按钮

| 值     | 介绍     |
| ------ | -------- |
| submit | 表单按钮 |
| button | 普通按钮 |

示例代码

```typescript
import { Component } from '@angular/core';

interface NormalButton {
                    name: string;
                    type: string;
                    style?: string;   
           callback(item: {}): void;     // 当你需要改变点击后的样式
                    choose?: string;
                    hidden?: boolean;
                    right?: string;   // 权限
}

@Component({
  selector   : 'app-root',
  template: `<app-small-button [props]="button" [isLoading]="isLoading"></app-samll-button>`,
  styles  : ['']
})

export class AppComponent {
	public button: NormalButton;
  	public isLoading: boolean;
  	
  	constructor() {
  		this.isLoading = false;
        this.button = {
            name: '',
            type: 'button',
            choose: 'loading',
            callback: () => { // 按钮事件　}
        }
  	}
}
```

