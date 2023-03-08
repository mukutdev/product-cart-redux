import { ADD_PRODUCT , REDUCE_STOCK } from "./actionType"

export const addProduct = (formData)=>{
    return{
        type : ADD_PRODUCT,
        payload : formData
    }
}

export const reduceStock = (productId) => {
    return {
      type: REDUCE_STOCK,
      payload: {
        productId: productId,
      },
    };
  };
