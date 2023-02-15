import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetails";

// intuitive
// ReactRouter < 6.4 was JSX
/* <div>
  <Route path = "/welcome">
    <Welcome></Welcome>
  </Route>
  <Route path = "/products">
    <Products></Products>
  </Route>
</div> */

// createRoutesFromElements
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path = "/welcome">
//       <HomePage/>
//     </Route>
//     <Route path = "/products">
//       <ProductsPage/>
//     </Route>
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      { 
        path: "/",
        element: <HomePage/>
      },
      { 
        path: "/products",
        element: <ProductsPage/>,
        errorElement: <ErrorPage/>
      },
      // parameters
      { 
        path: "/products/:productId",
        element: <ProductDetailPage/>,
        errorElement: <ErrorPage/>
      }
    ],
    errorElement: <ErrorPage/>
  },
  // {
  //   path: "/admin",
  //   children: [

  //   ]
  // }
  
]);

const App = () => {
  return <RouterProvider router={router}/>
};

export default App;
