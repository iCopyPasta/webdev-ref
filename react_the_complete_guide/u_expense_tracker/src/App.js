import React, {useState} from 'react'; // historically, all files that needed JSX
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2022, 5, 12),
    },
];

// "special"/"root" - the main component being rendered
const App = () =>{

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpense) => {
            return [expense, ...prevExpense];
        });
    }

    // traditional code from react one might see
    // return React.createElement(
    //     'div',
    //     {}, 
    //     React.createElement('h2', {}, "Let's get started!"),
    //     React.createElement(Expenses, {
    //         items: expenses
    //     }));

    // Syntactic sugar

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <div>
                <Expenses items={expenses}></Expenses>
            </div>
        </div>
    );
}

export default App;
