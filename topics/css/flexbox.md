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

```css
    .container1 {
        display: flex;
    }
    .container1 {
        display: inline-flex;
    }
```


## Flex direction

Set the flex direction on the container to define the "main" axis. Main axis is the axis that items will stack along.
* _flex-direction: row_ is the default, and means that items will stack horizontally from left-to-right (main-axis is horizontal from left-to-right)
* _flex-direction: reverse-row_ means items will stack horizontally from right-to-left (main-axis is horizonal from right-to-left)
* _flex-direction: column_ means that item will stack vertically from top-to-bottom (main-axis is vertical from top-to-bottom)
* _flex-direction: reverse-column_ means that item will stack vertically from bottom-to-top (main-axis is vertical from bottom-to-top)
