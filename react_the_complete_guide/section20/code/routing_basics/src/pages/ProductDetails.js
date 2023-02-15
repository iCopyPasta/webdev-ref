import { useParams} from "react-router-dom"

const ProductDetailPage = () => {

    const params = useParams();

    // JS object w/ every dynamic path segment as a property
    const productId = params.productId;

    return(
        <h1>Product Details {productId}</h1>
    );
};

export default ProductDetailPage;