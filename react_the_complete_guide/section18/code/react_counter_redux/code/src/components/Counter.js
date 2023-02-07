// import { Component } from 'react';
// import { connect } from 'react-redux';

import { useSelector, useDispatch } from 'react-redux';
// select a part of the state managed by store
// can use useStore for direct access
// connect - for class-based

import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

// Class-Based Version of Using Redux-datastore
// class Counter extends Component {

//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// maps Redux state to props
// convention
// const mapStateToProps = (state) => {
//   // keys - avalable as props
//   // values - logic for drilling into redux state
//   return {
//     counter: state.counter

//   };
// }

// // equivalent to useDispatch
// const mapDispatchToProps = (dispatchFunction) => {
//   // keys - prop names
//   // values - logic for drilling into redux state
//   return {
//     increment: dispatchFunction({type: "INCREMENT"}),
//     decrement: dispatchFunction({type: "DECREMENT"})
//   };
// }

// // higher order component
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);




// Function-Based Version of Using Redux-datastore
const Counter = () => {

  // will dispatch an action against Redux store
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());

  };

  const increaseHandler = () => {
    // payload == property to action object
    // {type: SOME_UNIQUE_REDUX_TOOL, payload: <>}
    dispatch(counterActions.increase(10))
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());    
  };

  // which piece of data we want to extract
  const selectorFunction = (state) => {
    return state.counter.counter;
  };

  // will automatically set a subscription
  // if unmounted, react-redux clears subscription
  // for you, behind the scenes
  const counter = useSelector(selectorFunction);
  const show = useSelector(state => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
