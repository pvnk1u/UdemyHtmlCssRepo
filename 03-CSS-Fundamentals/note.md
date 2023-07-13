1. 自 HTML5 开始，用于加粗的 b 标签和用于表示斜体的 i 标签因为标签没有语义化表示，应该使用最新的 strong 元素和 em 元素分别替代。语义化标签有助于搜索引擎实现更好的信息检索。
2. 有序列表使用 ol 和 li 元素实现，无序列表使用 ul 和 li 实现
3. img 标签的 alt 属性可以帮助搜索引擎了解图片内容，也可以实现无障碍阅读
4. html 标签中通过 lang 属性可以指定网页的内容对应的语言
5. head 中 meta 标签可以指定字符集
6. nav 标签下用来统一存放导航类链接
7. list-style: none 可用于 ul 列表中去除列表中每项前面的点
8. 传统 RGB 颜色表示法中，所有颜色都可以通过红色（RED）、绿色（GREEN）和蓝色（BLUE）的任意组合来表示，为了表示某种颜色，需要给出三种基本颜色中的每一种（都是介于 0-255 之间的任何值）。在 CSS 中也可以使用这种方式表示颜色，如 rgb(0,255,255)。使用 rgba 还可以指定 rgb 颜色的透明度，如 rgba(0,255,255,0.3)。除了 RGB 表示法，还可以使用十六进制表示法来表示颜色。这种表示法不适用 0-255 的数值来指定颜色，而是使用 0-FF 的值。比如用 rgb(0,255,255)表示的颜色用十六进制表示法就是#00ffff。当十六进制表示法中的表示红绿蓝的两个字符一样时，可以简写表示，比如可以简写为#0ff。
9. 伪类:first-child 可以用于指定标签列表中的第一个元素，例如 li:first-child 可以指定列表中的第一个列表项。同样的，也有表示最后一个元素的 last-child。以及可以指定第 n 个，比如 li:nth-child(3)用于指定第三个列表项，也可以使用 odd 指定奇数列表项或使用 even 指定偶数项。但是要注意的是，对于 article p:first-child 并不一定会选中 article 下的第一个 p 段落元素，只有当 article 内的第一个段落元素是 p 元素时才能达到这个选中的效果，如果 article 下的第一个元素不是 p 而是其他元素，这个选择器便不会生效。同理，对于:last-child 也是同样的。
10. a:link 伪类选择器只会选中具有 href 属性的 a 标签链接元素。text-decoration: none;去除链接下划线。a:visited 用于选择访问过的链接。a:hover 用于选择鼠标悬停链接。a:active 用于选中点击状态时的链接。重要的是这四种状态总是以这个顺序定义。
11. 开发者工具中的用户代理样式表(user agent stylesheet)是对应元素的默认样式设置,如 strong 标签标记的元素默认拥有 font-weight: bold 的样式规则。
12. 当有多条相同规则应用于同一元素时，按照如下优先级应用规则：!important 标记的声明(会改变原有的优先级顺序使得被标记的选择器具有最高优先级，不应该使用) > 内联样式(HTML 元素的 style 样式) > ID 选择器>类选择器（或伪类选择器）>元素选择器（p,div,li,etc）> 通用选择器(\*),需要注意的是，如果 CSS 中有多个同级选择器声明代码，将应用最后一个选择器声明中的相同规则。在 VS Code 中将鼠标放在 CSS 样式中的选择器上时可以通过提示项的 Selector Specificty 查看优先级。当在开发者工具中可以看到未生效的样式代码。
13. 伪类选择器比元素选择器(p,div,etc)的优先级更高，比如,a:link{}的优先级高于 a{}。
14. 元素会从其父元素继承样式，比如<p>A <strong>Strong</strong> Paragraph</p>中 strong 标签标记的元素的值会获得 strong 本身的样式，同时也会从其父元素 p 中继承相应的样式。但是继承来的规则实际应用时优先级非常低，如果在子元素的样式中重新指定了同样的样式，则父元素继承来的样式即会失效。可以灵活使用这个特性，将共同的样式放在父元素中，在子元素中指定特殊的样式。需要注意的是并不是所有父元素中的样式都会被继承应用。\*{}通用选择器设置的样式会应用于页面上的所有元素，但是其设置的样式不会被继承，其优先级也是最低的(会被所有其他选择器设置的样式覆盖掉)。此外，可以被继承的属性很少，只有和文本相关的属性，比如颜色，文字，字体间距行高对齐方式，和列表的样式可以继承。
15. line-height 对列表项 li 同样有效。
16. 给 button 元素设置 cursor: pointer;样式可以实现鼠标悬浮时特殊手形显示效果。