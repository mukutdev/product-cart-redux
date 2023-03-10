import { ADD_PRODUCT, REDUCE_STOCK, UPDATE_STOCK} from "./actionType";
import initialState from "./initialState";

const nextProductId = (products)=>{
    const maxId = products.reduce((maxId , product) => Math.max(maxId , product.productId) , -1)
    return maxId >= 1 ? maxId + 1 : 1
}

const addProductReducer = (state = initialState , action)=>{
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                {
                    productId : nextProductId(state),
                    ...action.payload
                }
            ]
        case REDUCE_STOCK :
        const {productId , changeType} = action.payload
        // console.log(action.payload)
            switch (changeType) {
                case "increment":
                    return state.map(item => item.productId === productId ? {...item , stock : Number(item.stock + 1)} : item)
                case "decrement" :
                    return state.map(item => item.productId === productId ? {...item , stock : Number(item.stock -1) > 0 ? Number(item.stock -1) : 0} : item)
                    
    
                default:
                    return state;
            }
            case UPDATE_STOCK:
                const { id, quantity } = action.payload;
                return state.map(item => {
                  if (item.productId === id) {
                    return {
                      ...item,
                      stock: item.stock + quantity
                    };
                  } else {
                    return item;
                  }
                });

        default:
            return state;
    }
}

export default addProductReducer;
