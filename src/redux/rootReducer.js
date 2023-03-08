import { combineReducers } from "redux";
import  addProductReducer  from "./addProduct/reducer";
import addToCartReducer from "./CartItems/reducer";


const rootReducer = combineReducers({
    products : addProductReducer,
    cartItems : addToCartReducer
})

export default rootReducer;