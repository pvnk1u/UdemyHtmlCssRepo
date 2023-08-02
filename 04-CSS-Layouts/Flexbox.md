Flexbox 是一种用于按行或按列布局元素的一维布局方法。元素可以膨胀以填充额外的空间，收缩以适应更小的空间。

长久以来，CSS 布局中唯一可靠且跨浏览器兼容的创建工具只有 float 和 position。这两个工具大部分情况下都很好使，但是在某些方面它们具有一定的局限性，让人难以完成任务。以下简单的布局需求是难以或不可能用这样的工具（float 和 position）方便且灵活的实现的：

1. 在父内容里面垂直居中一个块内容。
2. 使容器的所有子项占用等量的可用宽度/高度，而不管有多少宽度/高度可用。
3. 使多列布局中的所有列采用相同的高度，即使它们包含的内容量不同。

Flexbox 使得这些布局任务变得更加容易。

要使用 flexbox，首先要创建弹性容器，可以通过在容器上添加 display: flex;实现。这样弹性容器的所有直接子元素都将变为弹性元素。这些弹性元素的布局方向称为主轴。另外一个轴称为辅轴。主轴和辅轴可以通过设置属性调换。

对于弹性容器，有以下几个需要记住的属性：

1. gap
   可以在不使用 margin 外边距的情况下在各元素之间创建间隔。
2. justify-content
   沿主轴对齐项目（默认情况下水平对齐）的方式
   可选值有：flex-start | flex-end | center | space-between | space-around | space-evenly
3. align-items
   沿辅轴对齐项目（默认情况下垂直对齐）的方式
   stretch | flex-start | flex-end | center | baseline
4. flex-direction
   定义哪个是主轴
   row | row-reverse | column | column-reverse
5. flex-wrap
   设置在项目太大的时候是否可以换行
   nowrap | wrap | wrap-reverse
6. align-content
   在元素有多行时适用
   stretch | flex-start | flex-end | center | space-between | space-around

对于弹性容器内部的容器元素，也有几个需要记住的属性：

1. align-self
   重新设置单个弹性容器元素的对齐属性（而不是适用弹性容器设置的的默认对齐方式）
   可选值有: auto | stretch | flex-start | flex-end | center | baseline
2. flex-grow
   允许弹性元素自动扩大以占据多余的空白空间，如果对一个弹性容器内的所有弹性元素均设置一个相同的 flex-grow 值，则所有弹性元素将均分剩余空白空间，如果只对其中的指定某几项弹性元素设置，则将由这几项分别具有响应的空间，具体分得的空间将由每一项的 flex-grow 值占总值的比例计算得出。
3. flex-shrink
   设置当空间不够时弹性元素的伸缩方式，默认值为 1（即允许伸缩），如果将其设置为 0，则将不允许收缩（如果此时设置了 flex-basis 的值，则将以 flex-basis 的值作为统一大小，但是此时因为不允许收缩，所以可能会出现元素显示范围超出容器的情况）。
4. flex-basis
   作用与 width 相同，用于设置一个弹性元素的基本宽度，但是并不代表设置了这个值后，所有元素的大小都是这个值，弹性容器允许弹性元素根据其需要的空间自动调整大小（即 flex-shrink 默认为 1），因此，flex-basis 更像是一个基准值。在弹性容器中，应该使用 flex-basis 替代 width 设置元素宽度。
5. flex: 0 1 auto
   简写法，共有三个值，分别表示 flex-grow，-shrink、basis
6. order
   不需要改变弹性元素在代码中的顺序即可定义真正显示时的先后顺序

使用 flexbox 的一个很明显的好处在于，对弹性容器素中的多个弹性元素，只需要设置好其中的部分元素，并且设置好其他元素的 flex 值后（比如 flex: 1 代表这个弹性元素将尽可能地占据剩余的空间），浏览器会自动计算出所有元素应该占据地空间。
