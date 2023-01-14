import { useState } from 'react';


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !=='';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  // useful to think-through possibilites
  if(enteredNameIsValid){
    formIsValid = true;
  }

  const nameInputChangeHandler = event => {
    // scheduled by React!
    // no processed immediately, use the value directly
    // captured
    setEnteredName(event.target.value);

    // // validation --> derived above
    // if (event.target.value.trim() !== ""){
    //   setEnteredNameIsValid(true);
    // }
  };

  const nameInputBlueHandler = event => {

    // just left alone, the user doesn't know if it's valid
    // good idea to try putting immediate feedback here
    setEnteredNameTouched(true);

    // // validation
    // if (enteredName.trim() === ""){
    //   setEnteredNameIsValid(false);
    // }
  };

  const formSubmissionHandler = event => {
    // vanilla behavior is to send HTTP request to server serving this website
    event.preventDefault(); 

    //treat all inputs as "touched"
    setEnteredNameTouched(true);

    // validation
    // if (enteredName.trim() === ""){
    //   setEnteredNameIsValid(false);
    //   return;
    // }

    if(!enteredNameIsValid){
      return;
    }

    // // input element which always have "value" property
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // brand new form
    setEnteredName('');
    setEnteredNameTouched(false);
  };


  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid' 
    : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlueHandler}
          value={enteredName}/>
          {nameInputIsInvalid &&
              (<p className="error-text">Name must not be empty!</p>)
          }
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
