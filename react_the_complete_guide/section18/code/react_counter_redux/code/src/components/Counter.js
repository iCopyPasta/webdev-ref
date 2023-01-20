import { useSelector, useDispatch } from 'react-redux';
// select a part of the state managed by store
// can use useStore for direct access
// connect - for class-based

import classes from './Counter.module.css';

const Counter = () => {

  // will dispatch an action against Redux store
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({type: "INCREMENT"});

  }

  const decrementHandler = () => {
    dispatch({type: "DECREMENT"});    
  }

  // which piece of data we want to extract
  const selectorFunction = (state) => {
    return state.counter;
  };

  // will automatically set a subscription
  // if unmounted, react-redux clears subscription
  // for you, behind the scenes
  const counter = useSelector(selectorFunction);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
