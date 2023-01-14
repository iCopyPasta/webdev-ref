import { useReducer, useState } from 'react';
// not really required - just practice
// reducer function

const initialInputState = {
    value: "",
    isTouched: false
};

const inputStateReducer = (state, action) => {

    if (action.type === "INPUT"){
        // don't want to erase the previous state w/ isTouched
        // because the user is still using this
        return {
            value: action.value,
            isTouched: state.isTouched
        }
    }

    if (action.type === "BLUR"){
        return {
            value: state.value,
            isTouched: true
        }
    }

    if (action.type === "RESET"){
        return initialInputState;
    }

    return initialInputState
};

const useInputReducer = (validateValue) =>{

    // state managed by reducer, input state
    // dispatched function - allows you to dispatch actions
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    // touched state
    // validation logic
    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = event => {
        dispatch({type: "INPUT", value: event.target.value});
    };

    const inputBlurHandler = event => {
        dispatch({type: "BLUR"});
    };

    const reset = () =>{
        dispatch({type: "RESET"});
    };

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
}


const useInput = (validateValue) =>{

    // value
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    // touched state
    // validation logic
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = event => {
        setIsTouched(true);
    };

    const reset = () =>{
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
}

export default useInput;