import { ADD_TO_CART, CART_INCREMENT, PRODUCT_REMOVE } from "./actionType";

export const addedToCart = (product) => {
    return {
      type: ADD_TO_CART,
      payload:{ product },
    };
  };

  export const cartIncrement = (id , changeType)=>{
    return{
      type : CART_INCREMENT,
      payload : {id , changeType}
    }
  }
  
  export const cartProductRemove = (id)=>{
    return{
      type : PRODUCT_REMOVE,
      payload : id
    }
  }

  // export const cartIncrement = (id , type)=>{
  //   return{
  //     type : CART_INCREMENT,
  //     payload : id
  //   }
  // }
  