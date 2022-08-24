## Flex Grow

Specifies what amount of *available space* inside the flex container the flex item should take up if necessary.

It is also relative to other items in the flex container.

By default, all items have a flex-grow value of 0.

Maintains the relative-ness by the ratio of items compared to each other.
e.g. 0, 1, 3, in the *extra space*, the relative ratio is respected here.
25px --> 75px, etc. 

Can specify fractional values

DO NOT do negative

If you want even growth, set all to "1" for all items