import React, {useState} from 'react';

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";


const AddUser = (props) => {
    const [enteredUserName, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge]   = useState("");
    const [error, setError]   = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        // validation
        if (enteredUserName.trim().length === 0 || 
            enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age (non-empty value)."
            });
            return;
        }

        // +string --> num
        if(+enteredAge < 1){
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age (Greater than or equal to 1)."
            });
            return;
        }
        
        props.onAddUser(enteredUserName, enteredAge);

        // reset state internally
        setEnteredUsername("");
        setEnteredAge("");
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        // null is treated as "falsify value"
        setError(null);
    }

    return (
        <div>
            {error &&
            <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}>
            </ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUserName}
                        onChange={usernameChangeHandler}></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age"
                        type="number"
                        value={enteredAge}
                        onChange={ageChangeHandler}></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
};

export default AddUser;