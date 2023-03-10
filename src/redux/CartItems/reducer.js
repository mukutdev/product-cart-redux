import { ADD_TO_CART, CART_INCREMENT } from "./actionType";
import initialState from "./initialState";

const addToCartReducer = (state = initialState, action) => {
  console.log(initialState);
  switch (action.type) {
    case ADD_TO_CART:
      const { product } = action.payload;
      const existingItemIndex = state.findIndex(
        item => item.product.productId === product.productId
      );
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
      const { id, changeType } = action.payload;

      switch (changeType) {
        case "increment":
          const findProduct = state.findIndex(
            item => item.product.productId === id
          );
          if (findProduct !== -1) {
            const newState = [...state];
            const { stock } = newState[findProduct].product;
            if (newState[findProduct].quantity < stock) {
              newState[findProduct].quantity += 1;
            }
            return newState;
          } else {
            return [...state];
          }
         
        case "decrement" :
          const findPro = state.findIndex(
            item => item.product.productId === id
          );
          if (findPro !== -1) {
            const newState = [...state];
            newState[findPro].quantity -= 1;
            if (newState[findPro].quantity === 0) {
              // If quantity becomes 0, remove the item from the cart
              newState.splice(findPro, 1);
            }
            return newState;
          } else {
            return [...state];
          }  
        default:
          return state;
      }

    default:
      return state;
  }
};

export default addToCartReducer;
