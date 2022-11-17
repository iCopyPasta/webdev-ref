import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {

    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    // all the data you will be able to use outside
    // can be useful in scrolling, too
    useImperativeHandle(ref, () => {
        return {
            focus: activate
        };
    });

    return (
        <div
            className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;