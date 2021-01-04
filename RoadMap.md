# RoadMap

CSS变量：

- [x] [CSS变量对JS交互组件开发带来的提升与变革](https://www.zhangxinxu.com/wordpress/2020/07/css-var-improve-components/)

## 色彩

- [x] [Ant Design 色板生成算法演进之路](https://zhuanlan.zhihu.com/p/32422584)
- [x] [色生心中：人性化的HSL模型](https://cdc.tencent.com/2011/05/09/%e8%89%b2%e7%94%9f%e5%bf%83%e4%b8%ad%ef%bc%9a%e4%ba%ba%e6%80%a7%e5%8c%96%e7%9a%84hsl%e6%a8%a1%e5%9e%8b/)
- [x] [The Best Color Functions in CSS?](https://css-tricks.com/the-best-color-functions-in-css/)
- [x] [Pleasing Color Palettes](https://css-tricks.com/re-pleasing-color-palettes/)
- [x] [Building Your Color Palette](https://refactoringui.com/previews/building-your-color-palette/)

推荐工具：

https://www.colorbox.io/

HSL(a) is Hue（色相）, Saturation（饱和度）, Lightness（亮度）, and alpha（透明度）

- [色相](https://zh.wikipedia.org/wiki/色相)（H）是色彩的基本属性，就是平常所说的[颜色](https://zh.wikipedia.org/wiki/颜色)名称，如[红色](https://zh.wikipedia.org/wiki/红色)、[黄色](https://zh.wikipedia.org/wiki/黄色)等。
  - 色相环上的六大主色，用作基本参照：360°/0°红、60°黄、120°绿、180°青、240°蓝、300°洋红
- [饱和度](https://zh.wikipedia.org/wiki/色度_(色彩学))（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取0-100%的数值。
- [明度](https://zh.wikipedia.org/wiki/明度)（V），亮度（L），取0-100%。



![image-20201208152706671](https://gitee.com/deuscx/tuci/raw/master/img/image-20201208152706671.png)

[Building Your Color Palette](https://refactoringui.com/previews/building-your-color-palette/)：

### 灰色

文本、背景、面板、表单控件——界面中的几乎所有东西都是灰色的

![](https://gitee.com/deuscx/tuci/raw/master/img/image-20201206113346019.png)



### 主色

**饱和度建议不低于70**

大多数网站需要一种，或者两种颜色用于主要操作，强调导航元素等等。这些颜色决定了一个网站的整体外观。

就像灰色一样，你需要有5-10种浅色和深色可供选择。

![image-20201206113619911](https://gitee.com/deuscx/tuci/raw/master/img/image-20201206113619911.png)



### 功能色

功能色代表了明确的信息以及状态，比如成功、出错、失败、提醒、链接等。功能色的选取需要遵守用户对色彩的基本认知。

- 红色 --- 错误（Error）
- 黄色 --- 警告 （Warning）
- 绿色 --- 成功 （Success）





## 组件

### 通用

#### icon
https://material.io/resources/icons



#### loading



#### 按钮 button

- [x] [我的按钮究竟该放哪儿！？| Ant Design 4.0 系列分享](https://zhuanlan.zhihu.com/p/109644406)
- [x] [A Complete Guide to Links and Buttons](https://css-tricks.com/a-complete-guide-to-links-and-buttons/)
- [x] [Designing Button States](https://cloudfour.com/thinks/designing-button-states/)



首先重写默认样式：https://css-tricks.com/overriding-default-button-styles/

> 1. 根据type 设置不同的样式
> 2. 针对download + href [了解HTML/HTML5中的download属性](https://www.zhangxinxu.com/wordpress/2016/04/know-about-html-download-attribute/)





#### Grid

- [x] [CSS minmax()函数简介:tada:](https://www.zhangxinxu.com/wordpress/2019/11/css-grid-minmax/)
- [x] [CSS repeat()函数详细介绍:tada:](https://www.zhangxinxu.com/wordpress/2019/12/css-repeat/)
- [x] [写给自己看的display: grid布局教程](https://www.zhangxinxu.com/wordpress/2018/11/display-grid-css-css3/#justify-content)



> Antd中grid是通过 flex实现的grid
>
> flex: 0 0 $span/$columns



#### input

- [x] [Custom Styling Form Inputs With Modern CSS Features](https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/)
- [ ] [Stop Using ‘Drop-down’](https://adrianroselli.com/2020/03/stop-using-drop-down.html)

[input mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)



1. `appearance: none;` 删除默认样式
2. 交互状态
   - `:checked`
   - `:hover`
   - `:focus`
   - `:disabled`





### 数据输入

#### Switch

> 使用 :checked 以及 label中的::before,::after 伪元素来模拟





### 展示

#### tooltip

https://codepen.io/jasesmith/pen/RoVmNZ



> 通过before,after伪元素 + 绝对定位 + transform + margin