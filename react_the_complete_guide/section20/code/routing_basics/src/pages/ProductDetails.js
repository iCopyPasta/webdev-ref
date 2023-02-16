import { Fragment } from "react";
import { useParams, Link } from "react-router-dom"

const ProductDetailPage = () => {

    const params = useParams();

    // JS object w/ every dynamic path segment as a property
    const productId = params.productId;

    return(
        <Fragment>
            <h1>Product Details {productId}</h1>
            <p>{params.productId}</p>
            <p><Link to=".." relative="path">Back</Link></p>
        </Fragment>
    );
};

// note if your routes are SIBLINGS, this will send you back to the parent
// <p><Link relative= "" to="..">Back</Link></p>
// relative="route" <-- default
// relative="path" <--URL facing
// /root
//   /products
//   /products/:id
// /root is the parent from our route/object definition

export default ProductDetailPage;