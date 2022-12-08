import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

    // should button be animated
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce(
        (curNumber, item) => {
            //curNumber is carried over executions
            // value is what you returned last
            return curNumber + item.amount;
        },
        0
    );

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    // side effect to play animation
    useEffect(() => {
        if (cartCtx.items.length === 0){
            return;
        }

        setBtnIsHighlighted(true);

        const timer = setTimeout( () => {
            setBtnIsHighlighted(false);
        }, 300);

        // clean-up function
        // called automatically before the next iteration
        return () => {
            clearTimeout(timer);
        };

    }, [items, cartCtx.items.length]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;