import React from 'react';

// how is a component written in a react? 
// its just a function! 
// A component is a just a JavaScript function
// "Special" in that it returns JSX

// import React, { useState } from 'react';
// changes to values should be 

// tells React to inject styling
import './ExpenseItem.css';


// helper Components
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';

// a dictionary w/ key/value
// key: attributes given to "constructor"
// values: passed data

const ExpenseItem = (props) => {

    // Convention suggestion - name via <event>Handler

    // Overall component function doesn't re-execute by default, including code presented here
    const clickHandler = () => {
        console.log('Clicked!');
    };

    // for all Default HTML events, there is a prop equivalent
    // which we can add
    // Imperative
    // document.getElementById('root').addEventListener();

    // in React components, must only have *ONE* root element PER return statement
    // can wrap into its own whole div
    return (
        // className --> is JSX for equivalent for "class="
        // "class" is reserved keyword in JavaScript

        // do output dynamic value w/ single {<refered_value>}
        // note, can do any basic JavaScript expression in {}
        // cannot be Date directly, use toISOString()

        <Card className="expense-item">
            <ExpenseDate date={props.date}>
            </ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}



// must be exported to be used elsewhere/outside this file
export default ExpenseItem;