# Advanced Redux

## Agenda

* Handling Async Tasks with Redux
* Where to Put our Code
* The Redux Dev Tools

### Side Effects, Async Tasks & Redux

* Reducers must be *pure*, *side-effect free*, *synchronous* functions
* Input (Old State + Action) --> Output (New State)
  * for the same input, same value, will awlways produce same output

Main question: where should side-effects and async tasks be executed? 
* Async code: inside the components (e.g. useEffect())
* Inside the action creators
  * Redux has solution that allows to perform side-effects/asynchronous apart of the creators

### Misc Notes

* React-Redux allows you to perform state modifications within the reducers
* outside of the reducers, be careful about updating the reference
  * never mutate reducer state

### Were to put our logic? 

#### Fat Reducers vs. Fat Components vs. Fat Actions
* synchronous, side-effect free (i.e. data transformations)
  * **prefer** reducers
  * **avoid** action creators or components
* asynchronous, side-effect creating
  * **prefer** action creators or components
  * **NEVER** use reducers


### Thunk

A function that delays an action until later/something else finishes.

An action creator function that does NOT return the action itself, but
another function which eventually returns the action.

## Redux DevTools

* in more complex with a lot of state and different slices/actions, hard to find errors
* would be useful to look into the current store w/o looking into the UI
* "redux devtools" - github repo - browser extension