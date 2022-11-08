import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    // whenever you have code/action that should be executed in response to other action
    // --> that is a side effect
    // something could be like:
    //   reacting to user inputting data
    //   component being updated
    //   email address being updated
    //   password being updated
    //   HTTP request going out
    //   response to some other action
    

    useEffect(() => {
        console.log("checking validity")

        const timer_identifier = setTimeout(() =>{
            setFormIsValid(
                enteredEmail.includes('@') && enteredPassword.trim().length > 6
            );
        }, 500);

        // must be a function return
        // clean-up function before useEffect is used again
        // when ran
        //   before it runs, before the 1st
        //   clean is up
        //   component unmounts from DOM
        //   does not after 1st
        return () => {
            // cleans last side-effect function before setting a new one above
            // this will execute BEFORE the NEXT call of useEffect,
            // which helps keep the latest
            clearTimeout(timer_identifier);
            

        };
        
    // only if these changed, re-run
    // could put setFormIsValid, but its a const and will be the same
    // by react
    }, [enteredEmail, enteredPassword] );

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
