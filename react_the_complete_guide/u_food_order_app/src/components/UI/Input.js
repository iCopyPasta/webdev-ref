import classes from "./Input.module.css";

// {...props.input} spread operator puts to
// pass all other configuration data
// to <input> as props 
// all key-value pairs are added to <input>

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}/>
        </div>
    );

};

export default Input;