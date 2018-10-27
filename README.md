# 需要使用Angular代理跨域 
```javascript
    npm run starts
```
### console
> 在组件内引用 tools/console 的 Log类
> const console = new Log('能代表当前组件的信息，类名即可');
> 然后通过console对象的方法打印信息
- 蓝色内容为测试打印内容 log
- 绿色为日志打印内容 info
- 红色是错误信息 err

# 用到的一些内容

- ngx-bootstrap
- boostrap4

# component

### Table
- selector `app-table`
- data `[标题数组string[],字段数组string[],列表数据(json数组)]`

### Toast

#### default-toast
- selector `app-default-toast`
- data `text = 要插入模板的字符串`

### Pagination

#### default-pagination
- selector `app-default-pagination`
- data ``

### DatePick

#### default-datepick
- selector app-default-datepick
- data 

### Timepick

#### default-timepick
- selector app-default-timepick

### Menu
- selector app-menu
- data none
