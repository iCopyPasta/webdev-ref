# Replacing Redux with React Hooks

A totally optional way of reducing your dependencies

## Why consider?

* reduced payload
* less dependencies and using React-only

## How
* Context API
  * Downside
    * ContextAPI is good for low frequency updates (as of 2018)
      * whenever context update, every component must be re-rendered
      * no way to to optimize execution branches
  * Good for
    * Authentication
* Global State as a hook
  * have some complex state/shared data with the following OUTSIDE of the hook
    * state
    * listeners
    * actions
  * dispach updates global state and call child listeners
    * components will re-render then

In essence, you do the heavy lifting of state management; however, is entirely within React
and therefore lightweight

Consider:
global state management is less than 1kb

Link: [https://www.npmjs.com/package/use-global-hook](https://www.npmjs.com/package/use-global-hook)

 