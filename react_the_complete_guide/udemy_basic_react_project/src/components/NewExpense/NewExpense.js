import React from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    // convention to make it clear
    // the value should be a function inside the child component
    // and based "on" this event
    return(
        <div className="new-expense">
            <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;