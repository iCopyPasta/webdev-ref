import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {

  console.log("Button RUNNING");

  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// turns out, this is re-evaulated..why?
// props values did change!

export default React.memo(Button);
