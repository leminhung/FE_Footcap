import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  SAVE_SHIPPING_ADDRESS,
  CLEAR_SHIPPING_ADDRESS,
  GET_CART_PRODUCTS,
  ORDER_CART
} from "src/constants/cartConstants";
import axios from "axios";
import { toast } from "react-toastify";

export const addItemToCart = (id, quantity,color,size) => async (dispatch, getState) => {

  let data = {};
  try {
    data = await axios.get(`http://localhost:5000/api/v1/products/${id}`).then((resp) => resp.data.data);

    
    const newState = {
      product: id, //data._id,
      discount: data.discount,
      name: data.title,
      price: data.price,
      images: data.images,
      
      quantity,
    }


    if(color){
      newState.color=color;
    }
    if(size){
      newState.size=size;
    }
  
    dispatch({
      type: ADD_TO_CART,
      payload: newState,
    });

    
  
  } catch (err) {
    console.log(err);
  }


};

//remove item in the cart
export const removeToCart = (item) => async (dispatch, getState) => {
  //console.log("datacarAction", data)

  dispatch({
    type: REMOVE_TO_CART,
    payload: item,
  });

  localStorage.setItem(ORDER_CART, JSON.stringify(getState().cart.cartItems));
  toast.success("Removed successfully from cart");
};

// save shipping
export const saveShippingAddress = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

// clear shipping address
export const clearShippingAddress = (data) => async (dispatch) => {
  dispatch({
    type: CLEAR_SHIPPING_ADDRESS,
    payload: {},
  });

  localStorage.removeItem("shippingAddress");
};

export const getCartProducts = () => async (dispatch) => {
  try {
   
   

    const orderCart = JSON.parse(localStorage.getItem(ORDER_CART))

    let promis = [];
    orderCart.forEach(item => {
      const url = `http://localhost:5000/api/v1/products/${item.product}`
      promis.push(axios.get(url));
    })
    
    Promise.all(promis).then((resp) => {
      for (let i = 0; i < resp.length; i++) {
        const item = resp[i].data.data;
        orderCart[i].images = item.images;
        orderCart[i].price = item.price;
        orderCart[i].name = item.title;
      }
      
      dispatch({
        type: GET_CART_PRODUCTS,
        payload: orderCart,
      });
    }).catch((err) => {
      console.log("--err", err);
    })





  } catch (err) {
    console.log("--err", err);
  }

}