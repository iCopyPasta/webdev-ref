// how is a component written in a react? 
// its just a function! 
// A component is a just a JavaScript function
// "Special" in that it returns JSX


// tells React to inject styling
import './ExpenseItem.css';

// helper Components
import ExpenseDate from './ExpenseDate'

// a dictionary w/ key/value
// key: attributes given to "constructor"
// values: passed data
function ExpenseItem(props) {

    // in React components, must only have *ONE* root element PER return statement
    // can wrap into its own whole div
    return (
        // className --> is JSX for equivalent for "class="
        // "class" is reserved keyword in JavaScript

        // do output dynamic value w/ single {<refered_value>}
        // note, can do any basic JavaScript expression in {}
        // cannot be Date directly, use toISOString()

        <div className="expense-item">
            <ExpenseDate date={props.date}>
            </ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

// must be exported to be used elsewhere/outside this file
export default ExpenseItem;