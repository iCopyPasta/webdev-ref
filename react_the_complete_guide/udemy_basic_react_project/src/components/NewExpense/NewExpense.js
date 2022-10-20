import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const ExpenseFormViews = {
    defaultView: "defaultView",
    selectView: "selectView"
};


const NewExpense = (props) => {

    const [desiredView, setDesiredView] = useState(ExpenseFormViews.defaultView)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    const changeDesiredViewHandler = (desiredView) => {
        setDesiredView(desiredView);
        console.log("changeDesiredViewHandler");
        console.log(desiredView);

    }

    // convention to make it clear
    // the value should be a function inside the child component
    // and based "on" this event
    return(
        <div className="new-expense">
            <ExpenseForm
                desiredView={desiredView}
                onChangeView={changeDesiredViewHandler}
                onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;