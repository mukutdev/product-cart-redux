import { ADD_TO_CART, CART_INCREMENT } from "./actionType";
import initialState from "./initialState";

const addToCartReducer = (state = initialState, action) => {
    console.log(initialState)
  switch (action.type) {
    case ADD_TO_CART:
      const { product } = action.payload;
      const existingItemIndex = state.findIndex((item) => item.product.productId === product.productId);
      if (existingItemIndex !== -1) {
        // If the product already exists in the cart, update the quantity by 1
        const newState = [...state];
        newState[existingItemIndex].quantity += 1;
        return newState;
      } else {
        // If the product does not exist in the cart, add it with quantity of 1
        return [...state, { product, quantity: 1 }];
      }

      case CART_INCREMENT:
          const findProduct = state.findIndex((item) => item.product.productId === action.payload)
          if(findProduct !== -1){
              const newState = [...state]
              newState[findProduct].quantity += 1
              return newState 
          }else{
            return [...state];
          }

    default:
      return state;
  }
};

export default addToCartReducer;
