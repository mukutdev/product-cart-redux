import { combineReducers } from "redux";
import addProductReducer from "./reducer";

const rootReducer = combineReducers({
    products : addProductReducer,
})

export default rootReducer;