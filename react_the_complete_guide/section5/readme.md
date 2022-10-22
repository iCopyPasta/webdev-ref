# Rendering Lists & Conditional Content

* Can apply ```useState```
* add "key=" w/ list of items
  * helps w/ efficieny of rendering and ReactJS decision algorithm

# Quiz Answers

* Q: What does this code snippet do?
  * A: 
  ```javascript
  someArray.map((element) => <p>{element}</p>)
  ```
  * It transform an array into a new array full of JSX elements (which can be output by React)
* Q: Why should you add the special "key" prop to list JSX elements
  * A; It's required for React to correctly identify and update (if needed) the list elements