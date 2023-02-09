import { uiActions } from './ui-slice';

import { cartActions } from "./cart-slice";

// custom action-creator function

// redux toolkit detects this and executes for you
// redux then executes function - a flow of side effects

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://react-http-3720d-default-rtdb.firebaseio.com/cart.json");

            if (!response.ok) {
                throw new Error("Could not fetch cart data!");
            }

            const data = await response.json();

            return data;
        };

        try {
            // firebase format/structure is correct from PUT
            const cartData = await fetchData();

            // should make sure payload is object which has items keys


            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));

        } catch(error){
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Fetching cart data failed!"
                })
              );
        }
    };

};

export const sendCartData = (cart) => {
    return async (dispatch) => {
  
      // can perform any side effects
      dispatch(uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!"
      }));
  
      const sendRequest = async () => {
        // and then send Http request
        const response = await fetch("https://react-http-3720d-default-rtdb.firebaseio.com/cart.json",
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        });
  
        if(!response.ok){
          throw new Error("Sending cart data failed");
        }
      }
  
      try {
        await sendRequest();
  
        dispatch(uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sent cart data successfully!"
        }));
      } catch (error){
  
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed!"
          })
        );
  
      }
    };
  };

