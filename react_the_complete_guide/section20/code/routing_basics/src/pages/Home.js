import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

// // but reloading happens if you do it this way!!!!!!
// would lose context/state
// const HomePage = () => {

//     return (
//         <Fragment>
//             <h1>My Home Page</h1>
//             <p> Go to <a href="/products"> the list of products</a>.</p>
//         </Fragment>
//     );
// };

// will navigate between and will automatically use preventDefault for us
const HomePage = () => {

    // to switch to a different route
    const navigate = useNavigate();

    function navigateHandler () {
        navigate("/products");
    };

    return (
        <Fragment>
            <h1>My Home Page</h1>
            <p>
                Go to <Link to="/products">the list of products</Link>
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </Fragment>
    );
};

export default HomePage;