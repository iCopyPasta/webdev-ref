# Section 4

# Composition/Wrapper Components
* must use ```props.children```
* for styling, must be fulled declared by you

# Listening to Events & Working w/ Event Handlers
Manipulating and transitioning between 'states'

* Who calls the defined function/```<Tag/> ```?
* We provide these as "HTML" to JSX elsewhere
* in those JSX, they're like function calls
* so we "call" them when JSX is evaluated by ReactJS up until there is no JSX markup to be evaluated
* started by index.js via ```<App/>```
* React goes through initial render, but doesn't go through the process again afterwards
* So how do we tell React something changed and certain part of the vDOM should be re-eval'd?

## State

* if you have data, which might change, and where changes to that data should be reflected on that user interface, you need state - regular variables will not do
* separated on a per-component instance: 
  * managed independently by React
  * registers for a component instance - every instance gets its own state

* A state can be updated other than user events
  * HTTP requests are also a good candidate for updating state
  * A timer via ``` setTimeout()```
ReactJS uses "hooks", denoted with the naming convention ```use```

```javascript
import React, { useState } from 'react';
```

## Two-Way Binding/Lifting the State Up

* Not just listening to a change, but 'reacting' and can reset programmatically
Process  
* Moving data from a child to a parent
* receive a prop with a function
* call that function in the child, passing constructed data, "lifting the data up" to parent
* onCustom will then be called and alter data

## Quiz:

* Q: How should you NOT listen to events when working with React?
 * A: Adding an event listener manually
* Q: Which value should you pass to event listener props like onClick?
  * A pointer at the function that should execute when the event occurs
* Q: How can you communicate from one of your components to a parent (i.e. higher level) component?
  * A: You can accept a function via props and call it from inside the lower-level component to then trigger some action in the parent component (which passed the function)
* Q: How can you change what a component displays on the screen?
  * A: Create some "state" value (via UseState) which you can then change and output in JSX.
* Q: Why do you need this extra "state" concept instead of regular JS variables which you change and use?
  * A: Because standard JS variables don't cause React components to be re-evaluated
* Q: which state about useState is correct
  * It receives an (optional) initial state value an an argument
  * A: it returns an array with exactly two elements
* Q: How can you update component state (created via useState)?
  * A: You can call the state updating function which useState also returned.
    * Calling that function will then also trigger React to re-evaluate the component.
* Q: How much state may you manage in one single component?
  * A: You can have any many state slices as you need/want.
* Q: What's wrong about this code snippet?
  * If you update state that depends on the previous state, you should use the "function form" of the state updating function instead
  * 
  ```javascript 
    const [counter, setCounter] = useState(1);
    ...
    setCounter(counter + 1);
  ```
