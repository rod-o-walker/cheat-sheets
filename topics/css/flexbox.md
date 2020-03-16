---
layout: topic-page
topic: css
permalink: /css/flexbox
title: FlexBox
summary: CSS3 web layout model
---


## Flex container

Define flex container, the item that will wrap around all the other items, by setting the css display to "flex" or "inline-flex". 
* _flex: inline-flex_ will make the container item an inline item rather than a block item, which is case with just "flex"
* the children of the flex container are called the flex items

## Flex direction

Set the flex direction on the container to define the "main" axis. Main axis is the axis that items will stack along.
* _flex-direction: row_ is the default, and means that items will stack horizontally from left-to-right (main-axis is horizontal from left-to-right)
* _flex-direction: row-reverse_ means items will stack horizontally from right-to-left (main-axis is horizonal from right-to-left)
* _flex-direction: column_ means that item will stack vertically from top-to-bottom (main-axis is vertical from top-to-bottom)
* _flex-direction: column-reverse_ means that item will stack vertically from bottom-to-top (main-axis is vertical from bottom-to-top)

## Flex wrap

If flex items don't all fit inside the flex container along the main-axis then the browser will wrap items on the another row/column, depending on the flex-wrap property
* _flex-wrap: nowrap_ is the default and means no wrapping occurs
* _flex-wrap: wrap_ means items will wrap along the cross-axis (i.e. if main-axis is horizontal then items will wrap vertically on to a new row, and if main-axis is vertical then items will wrap horizontally on to a new column)
* remember that wrapping only occurs if the container is not big enough to have all the items along the main axis (i.e. if main axis is vertical, then the browser can just scroll vertically forever unless the container has some bounding height)

## Re-ordering flex items

The _order_ property on the flex item can be used to modify its order position along the main-axis. It works alot like z-index, in that all items have default value of 0, and items are ordered by relative value.
* higher order values move to the end of the main-axis
* can use negative values
* be careful using this with text that is to be likely to be copied

## Justify content

Set property on the flex container to specify how flex items should be justified along the main-axis
* _justify-content: flex-start_ is the default value, and will push items to the start of the main-axis
* _justify-content: flex-end_ will push items to the end of the main-axis
* _justify-content: center_ will center items along the main-axis
* _justify_content: space-between_ will push first item to the start, last item to the end, and all the rest get evenly spaced in between
* _justify_content: space-around_ all the available space gets applied evenly around the flex items
