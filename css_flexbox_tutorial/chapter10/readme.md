## Algin Content

Aligns lines of content along the *cross axis*
Distributes additional space but along the *cross axis*

Multiple lines/rows must exist within the container, otherwise no affect


Possible Values:
* stretch        - default value; w/ multiple lines/rows, will try to auto fit/stretch all the flex items
within the container
* flex-start     - pulls the lines to the beginning of the cross axis
* flex-end       - pulls the lines to the end of the cross axis
* center         - content wrapping is centered, following flex-start
* space-between  - puts extra space in between the lines
* space-around   - distributes space around (similar to "L", "R" 20/10px behavior)

### Baseline

*def* The line on which most letters sit. Flexbox baseline value for baseline items will align flex items on their contents' baseline

Useful for aligning text within the flex item

![](img/baseline.png)

