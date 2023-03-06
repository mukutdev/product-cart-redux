import { ADD_PRODUCT } from "./actionType";
import initialState from "./initialState";


const nextProductId = (products)=>{
    const maxId = products.reduce((maxId , product) => Math.max(maxId , product.id) , -1)
    return maxId >= 1 ? maxId + 1 : 1
}

const addProductReducer = (state = initialState , action)=>{

    switch (action.type) {
        case ADD_PRODUCT:
               return[
                ...state,
                {
                    id : nextProductId(state),
                        ...action.payload
                }
               ] 
        default:
            return state;
    }

}

export default addProductReducer;