# A Look Behind the Scenes of ReactJS & Optimization Techniques

* ReactDOM - interface to the web
  * Our interface is this DOM - virtual DOM
  * ReactDOM does the translation later on
  * state changes + what should be visible to react interface
  * ReactDOM --> HTML Real DOM (what the user sees)

* Re-Evaulating Components !== Re-Rendering the DOM
  * Components vs. RealDOM
  * Components are re-evaluated whener props, state, or context changes
  * React executes component function
    * Changes to the real DOM are only made for differences between evalulations on the tree
    * Real DOM is not changed
    * virtual comparison is fairly cheap - in memory
    * reaching out to real DOM is expensive

* Virtual DOM Diffing
  * State One:
  ```javascript
    <div>
        <h1>Hi there!</h1>
    </div>
  ```
  * State Two:

  ```javascript
    <div>
        <p>This is new!</p>
    </div>
  ```

  * changes are required, DOM needs to know only the ```<p>``` has changed

* Preventing Unnecessary Re-Evaluations through memoization
  * Syntax
  ```javascript
  export default React.memo(MyFunctionalComponent);
  ```
  * Applies to only functional components
  * memoization comes at a cost!
    * need to store in memory for any opted in value
    * exchange performace time of re-evaluating vs. comparison of props
    * which cost is higher? depends on the number of props + complexity of components + number of child
    * great tool if many children under parent wouldn't be re-evaulated
  * if component should re-render anyways, save comparison of props value (remove the overhead)
  * Read [this](https://academind.com/tutorials/reference-vs-primitive-values) on pritmives and object comparisons 
  * for non-primitives on this, tweak creation and storage
    * useCallback - allows us to store a function across component executions - same place in memory
    * pointer reference

* Closures for ```useCallback``` and its dependencies
  * Read [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

* useState creates a new variable, ReactJS ties to component
  * useState comes from React - React makes sure default value is only considered once
    * first time ever - useState creates a new State which is handed/managed by React
      * React memorizes to where that goes
    * for subsequent calls - no new state is called
      * React recognizes already has it - updates as needed
      * if component is removed from DOM then new state is initialized
      * similar to useReducer
    

## Understanding State Scheduling & Batching

### State Scheduling
* Our Code - with useState() hook
* initial state
* in component, we update w/ callback returned from hook
  * state updating functions schedules a data update
  * will be scheduled against any other tasks React must do
    * some might be more intensive and then therefore not handled immediately
    * guarantees order of the same state

  * function format from previous - gives you the latest, not from when the call was scheduled
  ```
  setFunctionFromHook( (value) => value_modification);
  ```

### State Batching
* within same synchrnous code, if multiple states are updated, React batches these together
* This means one overall process to make multiple changes at once

### useMemo
* A React hook to store data and not re-return, similar to useCallback that stores a function
* Useful for saving data that hasn't changed and is **expensive to compute**
```javascript
import React, { useMemo } from 'react';

// will otherwise pass a new list each time 
const listItems = useMemo(() => [1,2,3], []);

<DemoList items={listItems}>

// instead of re-calculating every time
// only re-build if item changes
const sortedList = useMemo(() => {
  const {items} = props;
  return items.sort( (a,b) => a-b);
}, [items]);
```