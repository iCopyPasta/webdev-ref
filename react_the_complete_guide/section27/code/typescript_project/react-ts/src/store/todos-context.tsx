import React, { useState } from 'react';

import Todo from "../models/todo";

// React 18 removed children from the FC type. 
// If you want it back you need to add it to the props yourself.
type Props = {
    children: React.ReactNode
};

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: ()=>{},
    removeTodo: (id: string) =>{}
})

export const TodosContextProvider: React.FC<Props> = (props) => {

    useState();

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

    const contextValue: TodosContextObj = {
        items: appTodos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}
