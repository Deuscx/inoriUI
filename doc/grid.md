## 简介
- 通过 row 在水平方向建立一组 column（简写 col）。
- 你的内容应当放置于 col 内，并且，只有 col 可以作为 row 的直接元素。
- 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 <Col span={8} /> 来创建。

<i-col gutter="[10,20]" class="grid">
    <i-row span="8"> 8 </i-row>
    <i-row span="8"> 8 </i-row>
    <i-row span="8"> 8 </i-row>
    <i-row span="1"> 1 </i-row>
    <i-row span="5"> 5 </i-row>
    <i-row span="18"> 18 </i-row>
</i-col>

### justify
<i-col gutter="10" justify="space-around" class="grid">
    <i-row span="1"> 1 </i-row>
    <i-row span="5"> 5 </i-row>
</i-col>