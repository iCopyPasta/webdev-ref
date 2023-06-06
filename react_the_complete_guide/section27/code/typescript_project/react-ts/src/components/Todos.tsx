import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

// React.FC - Functional Component
// makes it clear that it is a funciton that acts as a functional component
// FC is a generic type; we merge our own props with built-in base props

// we're using a generic here - plugging in concrete value
// we are NOT letting TypeScript infer anything
// will merge with base object type
const Todos: React.FC = () => {

  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={todosCtx.removeTodo.bind(null, todo.id)}
        ></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
