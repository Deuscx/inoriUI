## 初始值`value`

设置或返回输入框的默认值。

<i-input value="Deuscx"></i-input>

```html
<i-input value="Deuscx"></i-input>
```



`label`属性提供了类似于`Metiral Design`的输入体验。

<i-input label="user"></i-input>


```html
<i-input label="user"></i-input>
```



## 禁用`disabled`

通过`disabled`可以禁用输入框，禁用后该按钮上的事件失效。

<i-input label="user" disabled></i-input>
<i-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></i-switch>

```html
<i-input label="user" disabled></i-input>
```