# 单选复选按钮

## 技巧说明

### 选择器

+ 属性选择器（兼容性：IE7+）

```css
input[type="radio"]
```

选择 `type` 属性值为 `radio` 的 `input` 元素
+ 相邻兄弟选择器（兼容性：IE7+）

```css
input[type="radio"]+label
```

选择紧接在 `type` 属性值为 `radio` 的 `input` 元素之后的 `label` 元素
+ `:checked` 伪类选择器（兼容性：IE9+）

```css
input[type="radio"]:checked
```

选择被选中的 `type` 属性值为 `radio` 的 `input` 元素
+ `::before` 伪元素（兼容性：IE9+）

```css
label::before
```

创建一个伪元素，其将成为匹配选中的元素（`label` 元素）的第一个子元素

+ 相关链接

	- [属性选择器](http://www.w3school.com.cn/css/css_syntax_attribute_selector.asp)
	- [相邻兄弟选择器](http://www.w3school.com.cn/css/css_selector_adjacent_sibling.asp)
	- [:checked 伪类选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:checked)

## 使用示例

### radio

html:

```html
<input id="skill-HTML" type="checkbox" name="skill" value="HTML">
<label for="skill-HTML">HTML</label>
```

css:

```css
input[type="radio"]+label::before {
    content: "\a0"; /*不换行空格*/
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    width: 1em;
    height: 1em;
    margin-right: .4em;
    border-radius: 50%;
    border: 1px solid #01cd78;
    text-indent: .15em;
    line-height: 1;
    padding: .3em;
}

input[type="radio"]:checked+label::before {
    background-color: #01cd78;
    background-clip: content-box;
}

input[type="radio"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
}
```
