

<my-element></my-element>

## 按钮类型type
<i-button> default</i-button>
<i-button type="primary">primary</i-button>
<i-button type="dashed">dashed</i-button>
<i-button type="link"> link</i-button>
<i-button type="text"> text</i-button>
```html
<i-button> default</i-button>
<i-button type="primary">primary</i-button>
<i-button type="dashed">dashed</i-button>
<i-button type="link"> link</i-button>
<i-button type="text"> text</i-button>
```
## 不可用状态 disabled
<i-button  disabled> default</i-button>
<i-button type="primary" disabled>primary</i-button>
<i-button type="dashed" disabled>dashed</i-button>
<i-button type="link" disabled> link</i-button>
<i-button type="text" disabled> text</i-button>

```html
<i-button  disabled> default</i-button>
<i-button type="primary" disabled>primary</i-button>
<i-button type="dashed" disabled>dashed</i-button>
<i-button type="link" disabled> link</i-button>
<i-button type="text" disabled> text</i-button>
```

## 尺寸 size
<i-button type="primary">primary</i-button>
<i-button type="primary" size="large">primary</i-button>
<i-button type="primary" size="small">primary</i-button>

## 图标 icon
<i-button type="primary" icon="favorite">like</i-button>
<i-button type="dashed" icon="search">search</i-button>
<i-button type="text" icon="backspace">back</i-button>
<i-button icon="link">link</i-button>
```html
<i-button type="primary" icon="favorite">like</i-button>
<i-button type="dashed" icon="search">search</i-button>
<i-button type="text" icon="backspace">back</i-button>
<i-button icon="link">link</i-button>
```

## 形状 shape

<i-button type="primary" icon="favorite" shape="circle"></i-button>
<i-button type="dashed" icon="favorite" shape="circle"></i-button>
<i-button type="flat" icon="favorite" shape="circle"></i-button>
<i-button icon="favorite" shape="circle"></i-button>

```html

<i-button type="primary" icon="favorite" shape="circle"></i-button>
<i-button type="dashed" icon="favorite" shape="circle"></i-button>
<i-button type="flat" icon="favorite" shape="circle"></i-button>
<i-button icon="favorite" shape="circle"></i-button>
```

## 加载`loading`


<i-button type="primary" loading>loading</i-button>
<button onclick="this.previousElementSibling.toggleAttribute('loading');">toggle</button>
```html
<i-button type="primary" loading>loading</i-button>
```

## 链接`href`

当设置`href`属性时，`xy-button`内部会渲染成`a`标签。

<i-button type="primary" href="https://github.com/Deuscx">visit inori-ui</i-button>
<i-button type="dashed" href="https://github.com/Deuscx">visit inori-ui</i-button>
<i-button type="flat" href="https://github.com/Deuscx">visit inori-ui</i-button>
<i-button href="https://github.com/Deuscx">visit inori-ui</i-button>
```html
<i-button type="primary" href="https://github.com/Deuscx">visit inori-ui</i-button>
<i-button type="dashed" href="https://github.com/Deuscx">visit inori-ui</i-button>
<i-button type="flat" href="https://github.com/Deuscx">visit inori-ui</i-button>
<i-button href="https://github.com/Deuscx">visit inori-ui</i-button>
```
> download + href 配合用于简单下载


!> # HTML5 download 执行条件
 1. 同一个域名下的资源
 2. http only
 3. 绝对路径/相对路径 都可以


<i-button href="/asset/1.jpg" download="/img/girl">download</i-button>
## 块状 block
<i-button  block> default</i-button>
<i-button type="primary" block>primary</i-button>
<i-button type="dashed" block>dashed</i-button>
<i-button type="link" block> link</i-button>
<i-button type="text" block> text</i-button>
