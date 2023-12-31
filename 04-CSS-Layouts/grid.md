CSS Grid 是 Web 开发人员可以用来构建二维布局的一组 CSS 属性。
CSS Grid 使用方式：
通过设置容器 display: grid 来实现 grid

对于 CSS Grid 容器有如下重要属性：

1. 容器内部的多个元素将按照指定的列数来挨个排列，比如总共有 8 个元素，通过 grid-template-columns: 200px 200px 100px 100px;设置了 grid 具有四列元素，且前两列的宽度是 200 像素，后两列的宽度是 100 像素。那么这 8 个元素将通过第一行 4 个，第二行 4 个的排列方式展现在页面上。
2. 除了可以通过在 CSS Grid 容器上 grid-template-columns 设置列的宽度，也可以通过 grid-template-rows 以同样的方式设置行的高度。如果设置的高度过高，那么实际高度没有达到这个高度的元素将会以其实际高度展示而不是被拉长。
3. 可以通过 gap 属性设置 grid 容器中的间距，gap 属性设置的间距不仅适用于列之间，也适用于行之间，如果想单独设置列间距和行间距，可以通过 column-gap 和 row-gap 来分别设置。
4. 与 flexbox 像素，CSS Grid 容器 也具有 justify-items 和 align-items 属性，分别代表行排列方式和列排列方式。
   justify-items: stretch | start | center | end
   align-items: stretch | start | center | end
   这两个属性和在 flexbox 中的用法及作用一致，是用来指定实际内容在其对应的单元格内的排列方式的
5. 在 CSS Grid 容器 上还有两个属性是 justify-content 和 align-content
   justify-content: stretch | start | center | end
   align-content: stretch | start | center | end
   需要与 justify-items 和 align-items 注意区分的是，这两个内容对齐属性指定的是网格的行、列两个轨道在其父 Grid 容器中的排列方式（因为网格容器的大小肯定大于等于网格的大小）。

对于这两组属性的区分，只需要记住 justify-items 和 align-items 指定的是实际内容在其所在的 grid 内的单元格中的排列方式，而 justify-content 和 align-content 指定的则是 grid 中的单元格在 grid 容器中的排列方式。

对于 CSS Grid 容器中的网格项目，有如下属性：

1. 网格列、网格行
   grid-column: <start line> / <end line> | span <number>
   grid-row: <start line> / <end line> | span <number>
   网格列和网格行对于放置网格项目进入特定的单元格（而不是按照默认的顺序放入对应的单元格）非常重要。
2. justify-self: stretch | start | center | end
   align-self: stretch | start | center | end
   用于覆盖对齐项，当其所在的 grid 容器被指定了 justify-items 和 align-items 属性，但是又想让特殊项使用个性化项目对齐样式替代 grid 容器的元素对齐样式时，就可以使用 justify-self 和 align-self 来代替父 grid 容器中的 justify-items 和 align-items 设置的样式。

在 CSS grid 中，可以在 grid-template-columns 和 grid-template-rows 中使用 fr(比如 1fr) 单位替代 px 单位指定大小。这样可以使对应的列或行填满 CSS Grid 容器中在指定方向上的所有剩余空间。如果对所有网格都使用了 fr 单位来指定大小，则这些网格将根据 fr 单位的大小按照 fr 单位的比例瓜分占满容器在这个方向上的空间。如果各网格的值都相同（1fr），则将均分容器在这个方向上的空间。

如果在 grid-template-colums 和 grid-template-rows 中的某一列或某一行上使用了 auto，则这一列（行）将只占据其实际需要占据的空间，除去这个 auto 大小元素之后的空间再被其他的设置了相应 px 像素或者 fr 单位的列（行）瓜分。

如果想快速均匀设置四列元素的 grid 布局，只需要简写为 grid-template-columns: repeat(4,1fr)，而不用写上四遍 1fr。

如果没有手动设置容器的高度，则每一行网格的实际高度由这一行中高度最高的一个网格的高度确定。如果通过 grid-template-rows 设置了每一行的高度相同，则所有行的高度都由其中高度最高的一个网格确定。
