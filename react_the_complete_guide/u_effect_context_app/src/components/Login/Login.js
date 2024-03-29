import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../Input/Input';

// doesn't need to interact with anything inside the component function
const emailReducer = (state, action) => {

    if (action.type === 'USER_INPUT'){
        return { value: action.val, isValid: action.val.includes('@')};
    }

    if (action.type === 'INPUT_BLUR'){
        return {value: state.value, isValid: state.value.includes('@')};
    }

    return {value: '', isValid: false};
};

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT'){
        return { value: action.val, isValid: action.val.trim().length > 6};
    }

    if (action.type === 'INPUT_BLUR'){
        return {value: state.value, isValid: state.value.trim().length > 6};
    }

    return {value: '', isValid: false};
};

const Login = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer,{
        value: '',
        isValid: null
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    });

    const authCtx = useContext(AuthContext);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

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
        const timer_identifier = setTimeout(() =>{
            console.log("checking validity")
            setFormIsValid(
                emailIsValid && passwordIsValid
            );
        }, 500);

        return () => {
            console.log("CLEAN_UP")
            clearTimeout(timer_identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({type:"USER_INPUT", val: event.target.value});
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: 'USER_INPUT', val: event.target.value})
    };

    const validateEmailHandler = () => {
        dispatchEmail({type:"INPUT_BLUR"})
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: "INPUT_BLUR"})
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if(formIsValid){
            authCtx.onLogin(emailState.value, passwordState.value);
        }
        else if (!emailIsValid ) {
            emailInputRef.current.focus();
        } else {
            passwordInputRef.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>

                <Input
                    ref={emailInputRef}
                    id="email"
                    label="E-Mail"
                    type="email"
                    isValid={emailIsValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}/>

                <Input
                    ref={passwordInputRef}
                    id="password"
                    label="Password"
                    type="password"
                    isValid={passwordIsValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}/>

                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
