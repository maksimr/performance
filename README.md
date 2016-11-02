## Repaint

![Repaint Timeline Example](img/repaint.png)


## Reflow
![Repaint Timeline Example](img/reflow.png)


## Reflow and Repaint
![Repaint Timeline Example](img/reflow-repaint.png)


## Resources
[Rendering: repaint, reflow/relayout, restyle](http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/)



## CSS Performance

[will-change](https://developer.mozilla.org/en/docs/Web/CSS/will-change) - The will-change CSS property provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed. These kind of optimizations can increase the responsiveness of a page by doing potentially expensive work ahead of time before they are actually required

[contain](https://developer.mozilla.org/en-US/docs/Web/CSS/contain) - The contain property allows an author to indicate that an element and its contents are, as much as possible, independent of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page. This property is useful on pages that contain a lot of widgets that are all independent as it can be used to prevent one widget's CSS rules from changing other things on the page.
