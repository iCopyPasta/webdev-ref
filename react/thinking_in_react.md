# Thinking in React

## Break the UI into a component hierarchy
* A component should ideally only do one thing
* If your JSON is well-structured, you'll find that it can naturally map to the component structure of your UI

## Build a static version in React

Most straightforward approach is to build a version that renders the UI from your data model without adding any interactivity.  

Build components that re-use other components and pass data using props.  

Don't use useState or alike...yet!

## Find the minimal but complete representation of UI state

* Think of state as the minimal set of chanding data that our apps needs to remember.
* Figure out the absolute minimal representation of the state your app needs, compute everything else on-demand.
* example
  * don't store the number of items as another state value - read the length of the list

Ask these questions:
* does it *remain unchanged* over time? if so, it is NOT state
* it is *passed in from a parent* ? it is props, not state
* can *you compute it* based on existing state or props? if so, NOT state

## Identify where your state should live
* Find each piece of state in your application
  * Identify *every* component that renders something based on that state
  * identity the closest common parent component
    * often you can put the state directly into their common parent
    * you can also put the state into some component above their common parent

## Add inverse data flow
* You want to make it so whenever the user changes the form inputs, the state updatse to reflect those changes

## Reference link
* [https://react.dev/learn/thinking-in-react](https://react.dev/learn/thinking-in-react)