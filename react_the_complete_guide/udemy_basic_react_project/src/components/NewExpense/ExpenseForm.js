import React, {useReact, useState} from 'react';


import './ExpenseForm.css';

const ExpenseForm = (props) => {

    // can keep different states per component
    // or can keep one state since it is related to the forum
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // equivalent to addEventListener(type:"", (event_obj))
    const titleChangeHandler = (event_obj) => {
        
        // // can use the DevTools and drill down into this .json dict
        // console.log(event_obj.target.value);
        setEnteredTitle(event_obj.target.value);
    };

    const amountChangeHandler = (event_obj) => {
        setEnteredAmount(event_obj.target.value);

    };

    const dateChangeHandler = (event_obj) => {
        setEnteredDate(event_obj.target.value);
    };

    // one managed state, need to update all properties as appropriate
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    // when using one state that depends on the previous:
    // should use nested functions

    // const titleChangeHandler = (event_obj) => {
    //     setUserInput((previousState) => {
    //         // deals with the React scheduler better
    //         // guaranteed that the snapshot is the latest
    //         return {
    //             ...previousState,
    //             enteredTitle: event_obj.target.value
    //         };
    //     });
    // };

    // const amountChangeHandler = (event_obj) => {
    //     setUserInput((previousState) => {
    //         // deals with the React scheduler better
    //         return {
    //             ...previousState,
    //             enteredAmount: event_obj.target.value
    //         };
    //     });
    // };

    // const dateChangeHandler = (event_obj) => {
    //     setUserInput((previousState) => {
    //         // deals with the React scheduler better
    //         return {
    //             ...previousState,
    //             enteredDate: event_obj.target.value
    //         };
    //     });
    // };

    // manually collect, combine
    // on front-end first
    const submitHandler = (event_obj) => {
        // does not send out - default JS
        event_obj.preventDefault(); 

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        // value is a function from the parent,
        // but the data is from the child
        props.onSaveExpenseData(expenseData);

        // clears out value on redraw
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input 
                    type='text'
                    value={enteredTitle}
                    onChange={titleChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input 
                    type='number'
                    value={enteredAmount}
                    min="0.01"
                    step="0.01"
                    onChange={amountChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input 
                    type='date'
                    value={enteredDate}
                    min="2019-01-01"
                    max="2022-12-31"
                    onChange={dateChangeHandler}/>
            </div>
        </div>

        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>);

}

export default ExpenseForm;