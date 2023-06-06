import { Fragment } from "react";

import { Link } from "react-router-dom";

// dummy dynamic feedback from backend
const PRODUCTS = [
    {id: "1", title: "Product 1"},
    {id: "2", title: "Product 2"},
    {id: "3", title: "Product 3"},
    {id: "4", title: "Product 4"},

]
const ProductsPage = () => {
    return (
        <Fragment>
            <ul>
                {PRODUCTS.map((prod) => {
                    return (
                        <li key={prod.id}>
                            <Link to={prod.id}>{prod.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </Fragment>
    );
};

export default ProductsPage;