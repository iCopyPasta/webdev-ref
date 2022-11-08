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

## Managing more Complex State with Reducers

## Managing App-Wide or Component-Wide State with Context