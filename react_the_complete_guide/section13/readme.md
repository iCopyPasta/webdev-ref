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
