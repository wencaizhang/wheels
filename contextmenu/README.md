# 自定义鼠标右键菜单

## Usage

1. 引入 js 文件

```js
<script src="./contextmenu.js"></script>
```

2. 创建实例

```js
new Contextmenu(data);
```

`data` 是一个数组，数组中元素为菜单的选项，`Object` 类型，拥有一下几项属性：

参数|含义|类型|默认值
---|---|---|---
`text`| 菜单显示的文本 | String | 无
`divider`| 是否在此选项下显示分割线 | Boolean | `false`
`callback`| 点击菜单选项时调用的方法 | Function | 无
`disabled`| 是否禁用 | Boolean | `false`

## demo

+ [示例1](https://wencaizhang.github.io/wheels/contextmenu/contextmenu.html)
+ [示例2](https://wencaizhang.github.io/wheels/contextmenu/contextmenu-oo.html)

两个例子在写法上有所不同，[示例1](https://wencaizhang.github.io/wheels/contextmenu/contextmenu.html)为面向过程写法，[示例2](https://wencaizhang.github.io/wheels/contextmenu/contextmenu-oo.html)为改进版，使用面向对象写法思想改进。