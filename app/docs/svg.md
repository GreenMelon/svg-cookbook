# 基本形状

# 文档结构
## 在SVG中使用样式
- 内联样式
- 内部样式表
- 外部样式表

```
<circle cx="0" cy="0" r="5" style="fill: red;" />
<circle cx="0" cy="0" r="5" fill="red" />
```

> 第一种为内联样式，第二种为表现属性。
> 表现属性位于优先级列表的最底端。
> 但是表现属性会覆盖继承的样式。

## 分组和引用
- 分组

```
<g id=""></g>
```

- 引用

```
<use xlink:href="#id" x="" y="" />
<use xlink:href="xx.svg#id" x="" y="" /> 外部引用，跨域
```

- 定义不显示

```
<defs>
    <g id="">
    </g>
</defs>
```