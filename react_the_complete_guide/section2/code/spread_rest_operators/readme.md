# Spread & Rest Operators

```...```


* Spread
  * Used to split up array elements OR object properties
  ```javascript
  const newArray = [...oldArray, 1,2]
  // to include all the elements of oldArray, and put into 
  // [] w/ new elements of 1 and 2
  const newObject = {
    ...oldObject, newProperty: 5;
  }

  // any overlapping is overwritten, new has precedence
  ```
* Rest
  * Used to *merge* a list of function arguments into an array

  ```javascript
  function sortArgs(...args) {
    return args.sort();
  }
  ```


