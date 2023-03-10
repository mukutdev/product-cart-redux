import { ADD_TO_CART, CART_INCREMENT } from "./actionType";

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
  
  // export const cartIncrement = (id , type)=>{
  //   return{
  //     type : CART_INCREMENT,
  //     payload : id
  //   }
  // }
  