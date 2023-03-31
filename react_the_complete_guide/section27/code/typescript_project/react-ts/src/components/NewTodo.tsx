import React, { useRef} from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {

  //will be connected to an HTML input; but has no initial value
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // current? (was added automatically)
    // the ref is not necessarily set to a value when we use it
    // ? tries to access value, if that success, use "value"
    // if connection is not established, use "null"
    // use "!" tells TypeScript that possible null-ish value will
    // never be null - use only if 100% certain
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // could throw an error 
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef}></input>
      <button>Add Button</button>
    </form>
  );
};

export default NewTodo;
