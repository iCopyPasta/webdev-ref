## Flex Wrap

By default, all flex items will try to fit into a single line.
If there is not enough space, they will by default, will *overflow*.
* shrink
* no longer in view if shrunk

Possible Values:
* no-wrap - default value
* wrap - takes place as and when needed
  * only the necessary item wraps around
* wrap-reserve - climbs into the row above vs below
  * does not do reserve item
  * wrapping always occurs from the last item
