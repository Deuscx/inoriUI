## 禁用`disabled`

通过`disabled`可以禁用开关。

<i-switch disabled></i-switch>
<i-button type="primary" onclick="this.previousElementSibling.disabled=!this.previousElementSibling.disabled">禁用切换</i-button>

```html
<i-switch disabled ></i-switch>
```


JavaScript操作

```js
switch.checked;//获取
switch.checked = false;
switch.checked = true;
//原生属性操作
switch.setAttribute('checked','');
switch.removeAttribute('checked');
```


## 事件`event`

### onchange

在切换完成时触发。

<i-switch onchange="console.log('当前状态checked:'+this.checked)"></i-switch>

```html
<i-switch onchange="console.log('当前状态checked:'+this.checked)"></i-switch>
```

```js
switch.onchange = function(ev){
    console.log(this.checked);
    console.log(ev.target.checked);
    console.log(ev.detail.checked);
}

switch.addEventListener('change',function(ev){
    console.log(this.checked);
    console.log(ev.target.checked);
    console.log(ev.detail.checked);
})
```

