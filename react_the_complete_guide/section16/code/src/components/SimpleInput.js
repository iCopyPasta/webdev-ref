import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const { 
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(
      (value) =>{
        return value.trim() !== "";
      }
    );

  const { 
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(
      (value) => {
        return value.trim().includes('@');
      }
    );

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    // vanilla behavior is to send HTTP request to server serving this website
    event.preventDefault(); 

    if(!enteredNameIsValid){
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid' 
    : 'form-control'

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid' 
    : 'form-control'

  // add email; validate (use @); replicate behavior
  // form can only be submitted if BOTH are valid
  return (
    <form onSubmit={formSubmissionHandler}>

      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}/>
          {nameInputHasError &&
              (<p className="error-text">Name must not be empty!</p>)
          }
      </div>
      
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your E-Mail</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}/>
          {emailInputHasError &&
              (<p className="error-text">Email must not be empty or have a @!</p>)
          }
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
