import { ADD_PRODUCT } from "./actionType"

export const addProduct = (formData)=>{
    return{
        type : ADD_PRODUCT,
        payload : formData
    }
}