## Flex Basis

Set the initial size of a flex item
Always use flex-basis to set initial width vs "width" directly in CSS

* defines the initial *width* only if flow-direction is "row". 
* If it's set to "column", it defines its initial *height*.

Allowed methods:
* pixels
* percentages
* relative units

Default value is "auto" - sets the width based on the items' content