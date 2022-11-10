import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// doesn't need to interact with anything inside the component function
const emailReducer = (lastStateSnapshot, actionThatWasDispatched) => {

    if (actionThatWasDispatched.type === "USER_INPUT"){
        return { value: actionThatWasDispatched.val, isValid: actionThatWasDispatched.val.includes('@')};
    }

    if (actionThatWasDispatched.type === "ACTION_BLUR"){
        return {value: lastStateSnapshot, isValid: StaticRange.value.includes('@')};
    }

    return {value: "", isValid: false};
};

const passwordReducer = (lastStateSnapshot, actionThatWasDispatched) => {
    if (actionThatWasDispatched.type === "USER_INPUT"){
        return { value: actionThatWasDispatched.val, isValid: actionThatWasDispatched.val.trim().length > 6};
    }

    if (actionThatWasDispatched.type === "ACTION_BLUR"){
        return {value: lastStateSnapshot, isValid: StaticRange.value.trim().length > 6};
    }

    return {value: "", isValid: false};
};

const Login = (props) => {
    // philosophy
    // all of these all drive "form state"
    // all states have two aspects (value + validity)
    // can handle smaller states or one complex state through useReducer
    
    // lets manage value + validity together
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer,{
        value: "",
        isValid: null
    });
    const [passwordState, dispatchPassword] = useReducer({
        value: "",
        isValid: null
    });
        
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
        console.log('EFFECT1_RUNNING');

        return () => {
            console.log("EFFECT1_CLEANUP");
        };
    },[]);

    // alias assignment through object destructuring syntax
    // this reduces the number of times the useEffect below is ran
    // may use when some props change
    const {isValid: emailIsValid} = emailState;
    const {isValid: passwordIsValid} = passwordState;

    useEffect(() => {
        console.log("checking validity")

        const timer_identifier = setTimeout(() =>{
            // this code is technically concurrent as it will get scheduled by React
            // may technically get the latest for each from guaranteed useEffect()
            setFormIsValid(
                emailIsValid && passwordIsValid
            );
        }, 500);

        return () => {
            clearTimeout(timer_identifier);
        };
    }, [emailIsValid, passwordIsValid] );

    const emailChangeHandler = (event) => {
        dispatchEmail({type:"USER_INPUT", val: event.target.value});
        
        // setFormIsValid(
        //     event.target.value.includes('@') && passwordState.isValid
        // );
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: 'USER_INPUT', val: event.target.value})

        // setFormIsValid(
        //     emailState.isValid && event.target.value.trim().length > 6
        // );
    };

    const validateEmailHandler = () => {
        dispatchEmail({type:"INPUT_BLUR"})
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: "INPUT_BLUR"})
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
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
