## Flex

* short hand for flex grow, flex shrink, and flex basis
* 
```css
.item{
    flex-grow: 2;
    flex-shrink: 5;
    flex-basis: 200px;
}

.item{
    flex: 2 5 200px;
}
/* flex:<flex-grow><flex-shrink><flex-basis> */

/*default*/
.item{
    flex: 0 1 auto;
}
/* Implies
0: items will not grow to fit container
1: implies items will shrink when necessary
auto: width of items depends on content
*/
```
