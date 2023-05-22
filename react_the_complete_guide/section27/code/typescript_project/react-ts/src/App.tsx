import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

import { useState } from 'react';
import Todo from './models/todo';

function App() {

  // empty array --> TypeScript infers never[]
  const [appTodos, setAppTodos] = useState<Todo[]>([]);

  const removeTodoHandler = (todoId: string) => {
    setAppTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  const addTodoHandler = (todoText:string) => {
    //todo magic
    const newTodo = new Todo(todoText);
    setAppTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={appTodos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
