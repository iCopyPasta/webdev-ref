import React, { useState, useCallback } from 'react';

import Button from "./components/UI/Button/Button"
import DemoOutput from './components/demo/DemoOutput';
import './App.css';

function App() {

  // prop value did change - this function is newly re-defined as a new constant
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);


  console.log("App RUNNING!");

  // prop value did change - this function is newly re-defined as a new constant
  const togglePragraphHandler = useCallback(() => {

    if (allowToggle){
      console.log("allowToggle!");
      setShowParagraph((prevState) => !prevState);
    }

  // function has same logic
  // functions are "closures" - close over values

  // when a function is defined - JavaScript
  // locks in all the variables that are defined outside
  // JavaScript "closes" over, and stores that
  // stored variable will be used (at the point of time)
  // in memory - this variable will be the same, even if the toggle state changed
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  // new false is created

  // if parent is re-executed, so are the children
  // as they are apart of the return function's body
  // but how does this scale?

  // in essence; props.show === props.previous.show
  // privitive values - work
  // for new function addreses, will not work
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={togglePragraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
