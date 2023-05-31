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
 