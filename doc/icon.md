
Icon 采用font-face的方法,通过material-icon:https://material.io/resources/icons

基础使用:
1. 首先引入 font css.
```html
 <link
    href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Sharp|Material+Icons+Round|Material+Icons+Two+Tone"
    rel="stylesheet">
```
2.使用icon
```html
<i-icon name="accessibility"></i-icon>
```

## type
一共有 default,outline,round,two,sharp 5种类型
<i-icon name="favorite" ></i-icon>
<i-icon name="favorite" type="outline" color="#f5222d"></i-icon>
<i-icon name="favorite" type="round"  color="#fa8c16"></i-icon>
<i-icon name="favorite" type="two" color="#eb2f96"></i-icon>
<i-icon name="favorite" type="sharp" color="#722ed1"></i-icon>
```html
<i-icon name="favorite" ></i-icon>
<i-icon name="favorite" type="outline" color="#f5222d"></i-icon>
<i-icon name="favorite" type="round"  color="#fa8c16"></i-icon>
<i-icon name="favorite" type="two" color="#eb2f96"></i-icon>
<i-icon name="favorite" type="sharp" color="#722ed1"></i-icon>
```

## spin
<i-icon name="loop" color="#fa8c16" spin></i-icon>
```html
<i-icon name="loop" color="#fa8c16" spin></i-icon>
```