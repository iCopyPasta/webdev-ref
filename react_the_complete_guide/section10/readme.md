# Advanced: Handling Side Effects, Using Reducers & Using the Context API

## Working with (Side) Effects

* Main Job Currently: Render UI & React to User Input
  * Evaluate & Render JSX
  * Manage State & Props
  * React to (User) Events & Inputs
  * Re-evaluate Component upon State & Prop Changes
* Side Effects: Anything Else
  * Storage Data in Browser Storage
  * Avoids infinitely loops if modifying local w/o "knowing"
    * s1: request goes out, modify variable
    * s2: modified state, re-execute
    * s1: ... (repeat)
  * Data Fetch/Send HTTP Requests to Backend Servers
  * Set & Manage Timers
  * ... must happen *outside* the evaulation of normal component evaluation and render cycle
    * They might block/delay rendering (long-running request)
* ```useEffect()```
  ```javascript
    useEffect(() => {}, [dependencies]);
  ```
  * A function that should be executed *after* every component evaluation
    * your side effect coded goes into this function
  * dependencies of this effect - the function only runs if the dependences changed
    * specify your dependencies of your functions here
* Some considerations about when not to use:
  * don't need to add state updating functions
    * React guarantees that those functions never change
  * don't need to add "built-in" APIs of functions
    * functions/features built-into the browser
    * They are not related to the component render cycle
  * don't need to add variables or functions defined *outside* of your components

### Life Cycle of ```useEffect()```
* for no dependencies, ran each time *after* the Component function is ran
* for useEffect with dependencies and NO cleanup function, ran each time *after* the component function is ran AND if any of the dependencies changed from the last cycle
* for useEffect with dependencies and a cleanup function, ran each time *after the component funciton is ran AND if any of the dependencies changed from the last cycle AND on unmount from DOM

## Managing more Complex State with Reducers
* useRedcuer() (built-in hook) for State Management
* useful for more complex state - multiple states of changing it or dependencies to other states
  * related or together-changing
* can be used as a replacement for useState() if you need "more *powerful state management*"
  * of course, most will use useState
* most useful for when you have a state change that depends on another state change (composite)

* ```useReducer()```
  ```javascript
    const [state, () => {}] = useReducer(() => {}, initialState, () => {});
    const [state, dispatchFnPtr] = useReducer(reducerFnPtr, initialState, initFnPtr);
  ```
  * state - latest state snapshot, state snapshot used in the component re-render cycle
  * dispatchFnPtr - a function that can be used to dispatch a new action (i.e. trigger an update of the state)
    * dispatch an Action, will be consumed by reducerFn
  * reducerFnPtr - a function that is triggered automatically once an action is *dispatched* via dispatchFn - it receives the latest state snapshot and should return the new, updated state
    ```javascript
    (prevState, action) => newState
  ```
  * initialState - default value
  * a function to set the initial state programmatically - if your state depends on a more complex setup like an HTTP request

### ```useState()``` vs. ```useReducer()``` 

* Generally, you'll know when you need useReduer --> when using useState() becomes:
  * a lot of related snapshots which are done together

| ```useState``` | ```useReducer``` |
| -------------- | ---------------- |
| the main state management "tool" | Great if you need "more power" - latest state snapshot, can move complex logic out of component function |
| Great for independent pieces of state/data | Related pieces of state/data |
| Great if state updates are easy and limited to a few kinds of updates | Can be helpful if you have more complex state updates |


## Managing App-Wide or Component-Wide State with Context
* allows us to manage state behind the scenes to directly change in a component and pass without building a "prop-chain"
* in order to use, must do two things:
  * wrap JSX elements who could be able to use/tap-into the context
  * in the components, appropriately listen/consume the object

* these act as globals
  * may have multiple contexts in the application
  * can use via <Context.Consumer> or a React Hook