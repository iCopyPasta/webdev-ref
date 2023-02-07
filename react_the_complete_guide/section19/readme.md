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

