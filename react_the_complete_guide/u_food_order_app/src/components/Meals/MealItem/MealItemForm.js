import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

// all props w/ type, etc. are default props
// to any html <input>, so we just pass them along and
// spread them out as a return output on "input"
const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step:' 1',
                defaultValue: '1'
            }}></Input>
            <button>+ Add</button>
        </form>
    );
};

export default MealItemForm;