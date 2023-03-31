import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

// React.FC - Functional Component
// makes it clear that it is a funciton that acts as a functional component
// FC is a generic type; we merge our own props with built-in base props

// we're using a generic here - plugging in concrete value
// we are NOT letting TypeScript infer anything
// will merge with base object type
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((todo) => (
        <TodoItem key={todo.id} todo={todo}></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
