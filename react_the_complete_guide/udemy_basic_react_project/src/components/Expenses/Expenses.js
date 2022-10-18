import React, {useState} from 'react';

import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";

// listen to changes on dropdown
// when user picks a new year
// should listen to that event and picked year/value
// is forwarded to xpenses component
// add expense filter
// from expensefilter, store returned valued in a state
// nothing needs to be updated


// cp the JSX for now
const Expenses = (props) => {

    const [enteredFilterYear, setEnteredFilterYear] = useState('2020');

    const handleYearPicked = (yearPicked) => {
        console.log(yearPicked);
        setEnteredFilterYear(yearPicked);
    }

    // Expenses controls Expenses Filter
    // Presentational/Stateless/Dumb
    // some components manage state - Expenses
    // some just present data       - ExpenseItem
    return (
        <Card className="expenses">
            <ExpenseFilter selected={enteredFilterYear} onYearPicked={handleYearPicked}></ExpenseFilter>
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}></ExpenseItem>
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}></ExpenseItem>
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}></ExpenseItem>
            <ExpenseItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}></ExpenseItem>
        </Card>
    );
}
export default Expenses;