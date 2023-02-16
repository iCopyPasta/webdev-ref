import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

// can destructure on object provide by React Router
const isActiveFunc = ({isActive}) => {
    return isActive ? classes.active : undefined;
};

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink 
                            to="/"
                            className={isActiveFunc}
                            end>Home
                        </NavLink>
                        <NavLink to="products" className={isActiveFunc}>Products</NavLink>
                    </li>
                </ul>
                
            </nav>
        </header>
    );
};

export default MainNavigation