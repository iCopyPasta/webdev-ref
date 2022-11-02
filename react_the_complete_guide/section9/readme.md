# Fragments, Portals, Refs

More tools for your toolbox!

* JSX Limitations & Fragments
  * return at top-most must be returned, no "side-by-side"
    * also isn't valid JavaScript
    *
    ```javascript
    // doesn't work
    return(
      React.createElement();
      React.createElement();
    )
    ```
  * Can use an arrays, but require keys and is cumbersome
  * may lead to "div soup"
    * unnecessary and only there because React is expected
    * could break stylings
    * not the best practice, rendering many elements
    * return a "Wrapper" that is the children content
    * React requires that an element be returned, not necessarily that it is rendered


    ```javascript
    // will always work, built-in
    return (
      <React.Fragment>
        <h2></h2>
        <p></p>
      </React.Fragment>
    )
    ```
      * empty wrapper component: it doesn't render any real HTML element to the DOM, but it fulfills React's/JSX's requirement

    ```javascript
    // may work, subject to build setup
    return (
      <>
        <h2></h2>
        <p></p>
      </>
    )
    ```

    ```javascript
    // custom fragment (not built-in)
    return (
      <Wrapper>
        <h2></h2>
        <p></p>
      </Wrapper>
    )
    ```
* Getting a Cleaner DOM with Portals
  * *Semantically*, from a "clean HTML structure", having a nested modal isn't ideal. It is an overlay to the entire page (similar for side-drawers, other dialogs, etc.). Is something that sits above everything else.
    * Syling, Accessibility problems
    * Lets the Real DOM be rednered better semantically and lets JSX stays the same
  * requires:
    * A place to "port" components
    * let component know it has a portal to this place
    * example
    ```javascript
    {ReactDOM.createPortal(
        <ModalOverlay 
            title={props.title}
            message={props.message}
            onConfirm={props.onConfirm}>
        </ModalOverlay>,
        document.getElementById('overlay-root')
    )
    }
    ```
    * HTML is rendered somewhere else, JSX hasn't changed in usage
    * ```ReactDOM.createPortal``` to render content in actual DOM, not virtual DOM
* Working w/ Refs
  * Lets one get a direct reference of a DOM element
  * Lets one read values from the DOM element via "current.value"
  * must use the ```useRef``` hook
  * Becomes an "uncontrolled" Component because its values/state isn't managed by React
  * const [error, setError]   = useState();
  ```javascript
  <input
  id="username"
  type="text"
  ref={nameInputRef}>
  </input>
  ```