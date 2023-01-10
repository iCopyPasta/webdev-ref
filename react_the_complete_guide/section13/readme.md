# An Alternative Way of Building Components: Class-Based Components

* 100% optional within React, most modern projects do not use this approach
* misc. projects from before, classes were *required*, but not now moving forward
  
* Error Boundaries require classes

## What and Why

* Functional Components
  * return renderable results, typically JSX
```javascript
const myComponent = (props) => {
    return(
      <JSX>{props.show ? 'This is new!' : ''}</JSX>
    );
}
```

* Class-based Components
```javascript
class MyComponent extends Component{
    render() {
      return <JSX>{props.show ? 'This is new!' : ''}</JSX>
    };
};
```

* functionally equivalent - requires different mental models

### Classes vs Functions

* React < 16.8 to manage "state"/side-effects
* React 16.8 introduced "React hooks" for functional components
* 3rd party libraries may still use this older approach
* class-based components can't use react hooks!


## Class-based Component Lifecycle
* Cannot use React Hooks in class-bassed components
* Can implement methods for class-based components instead
  * componentDidMount() - built-in as soon as extended
    * when component was just mounted, evaluated & rendered 
      * useEffect(..., ```[]```)
  * componentDidUpdate()
    * called once component was updated, state changed, re-evalualted/re-rendered
      * useEffect(..., ```[withDependencies]```)
  * componentWillUnmount()
    * called right before unmounted
      * cleanup from useEffect()
      ```javascript
      useEffect(() =>
      {
        ...
      }, [])
      ```

## Working with Context

Can still call into components with Context Provider 

How you use it changes:
* can only connect one context to a class-based component
* use ```contextType``` for hooking into a Context

## Class-based vs. Functional Components
* Prefer functional Components
* Use class-based if
  * prefer them
  * working on an existing project/team where they're getting used
  * "Error Boundary"