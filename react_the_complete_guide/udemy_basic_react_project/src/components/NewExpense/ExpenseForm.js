import React from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

    // equivalent to addEventListener(type:"", (event_obj))
    const titleChangeHandler = (event_obj) => {
        // can use the DevTools and drill down into this .json dict
        console.log(event_obj.target.value);
    };



    return (
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01"/>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31"/>
            </div>
        </div>

        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>);

}

export default ExpenseForm;