# Handling Forms & User Input
Working with Values, Validation & State

## Module Content
* What's Complex About Forms?
* Handling Inputs & Forms with React
* Simplifications

### What's Comples About Forms?
* Forms and inputs can assume different states
    * output input-specific error messages & highlight problematic inputs
    * ensure form can't be submitted
* One or more inputs are invalid
* All inputs are valid
* Asynchronous state validation (e.g. does the address actually exist?)
* Sum of overal inputs is the form state
  * for ALL valid, then let it be submitted
* When to validate?
    * when submitted?
        * allows the user to enter a valid value before warning
        * avoids unnecessary warnings but presents feedback "too late"
    * when it losses focus?
        * allow the user to enter a valid value before warning
        * show error a little more immediately for feedback
        * useful for untouched forms
        * 2nd/3rd time is too late then, as they must leave again
    * on every keystroke
        * warns user before he/she had a chance of entering valid values
        * If applied only on invalid inputs, has the potential of direct feedback

#### When to use what strategy? 
* If you only interested in it once, Ref might be better
    * logging and comparisons frequently is overkill
* Instant Validation, using the State/Reducer
    * If you want to reset input

##### Avoiding Code Re-Use/Possible Re-used
* Use strategic Sub JSX Elements
    * Let the overall form know via props
* Custom Hook
* Outsource Form logic
  * [Formik](https://formik.org/docs/overview)
  * define fields + validation logic, let Formik handle the rest, similar to our code here
  * they have more logic + code, e.g. regex on email
* Build Overall Form Component
* Build More Custom Hooks
  * return pre-configured inputs/forms
  * useForm - readily configured input elements
  * [demo](https://academind.com/tutorials/reactjs-a-custom-useform-hook)