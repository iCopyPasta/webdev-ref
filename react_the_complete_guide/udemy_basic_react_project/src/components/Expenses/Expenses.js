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

// can filter arrays w/ the "filter" method
// do not change overall expense, derive new array (subset)

// cp the JSX for now
const Expenses = (props) => {

    const [enteredFilterYear, setEnteredFilterYear] = useState('2020');

    const handleYearPicked = (yearPicked) => {
        setEnteredFilterYear(yearPicked);
    }

    const filterByYear = (expenseList) => {
        return expenseList.filter(
            (expenseObj) => expenseObj.date.getFullYear().toString() === enteredFilterYear);
    };

    const reducedArray = filterByYear(props.items);
    
    // Expenses controls Expenses Filter
    // Presentational/Stateless/Dumb
    // some components manage state - Expenses
    // some just present data       - ExpenseItem
    return (
        <Card className="expenses">
            <ExpenseFilter 
                selected={enteredFilterYear}
                onYearPicked={handleYearPicked}
            />
            {reducedArray.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
}
export default Expenses;