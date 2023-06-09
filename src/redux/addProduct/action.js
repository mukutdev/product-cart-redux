import { ADD_PRODUCT , REDUCE_STOCK, UPDATE_STOCK } from "./actionType"

export const addProduct = (formData)=>{
    return{
        type : ADD_PRODUCT,
        payload : formData
    }
}

export const reduceStock = (productId , changeType) => {
    return {
      type: REDUCE_STOCK,
      payload: {
        productId: productId,
        changeType : changeType,
      },
    };
  };

  export const updateStock = (productId, quantity) => {
    return {
      type: UPDATE_STOCK,
      payload: {
        id : productId,
        quantity
      }
    }
  }