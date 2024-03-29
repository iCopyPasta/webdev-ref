import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";

import { sendCartData, fetchCartData } from "./store/cart-actions";

// when file is parsed for the first time
// when application is started
let isInitial = true;

function App() {

  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector( state => state.ui.notification);

  useEffect(()=>{
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {

    if(isInitial){
      isInitial = false;
      return;
    }

    if(cart.changed){
      // redux toolkit detects this and executes for you
      dispatch(sendCartData(cart));
    }    
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && 
        <Notification status={notification.status} title={notification.titlenotification} message={notification.message}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
