import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/addProduct/action';

const FormContainer = () => {

    const dispatch = useDispatch()

    const [formValues, setFormValues] = useState({
      productName: '',
      category: '',
      imgUrl: '',
      price: 0,
      stock: 0,
    });
    

    // const [productData , setProductData] = useState({})
    const handleChange = (fieldName , e)=>{
      if(fieldName === 'price' || fieldName === 'stock'){
          setFormValues({...formValues , [fieldName]: Number(e.target.value)})
      }
      else{
        setFormValues({...formValues , [fieldName] : e.target.value})
      }
    }

    const handleProductSubmit = (event)=>{
      event.preventDefault()
      dispatch(addProduct(formValues))
      event.target.reset()
    }

    return (
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handleProductSubmit}>
            {/* <!-- product name --> */}
            <div className="space-y-2">
              <label for="lws-inputName">Product Name</label>
              <input onChange={(event)=> handleChange('productName' , event)} className="addProductInput" id="lws-inputName" type="text" required />
            </div>
            {/* <!-- product category --> */}
            <div className="space-y-2">
              <label for="lws-inputCategory">Category</label>
              <input onChange={(event)=> handleChange('category' , event)} className="addProductInput" id="lws-inputCategory" type="text" required />
            </div>
            {/* <!-- product image url --> */}
            <div className="space-y-2">
              <label for="lws-inputImage">Image Url</label>
              <input onChange={(event)=> handleChange('imgUrl' , event)} className="addProductInput" id="lws-inputImage" type="text" required />
            </div>
            {/* <!-- price & quantity container --> */}
            <div className="grid grid-cols-2 gap-8 pb-4">
              {/* <!-- price --> */}
              <div className="space-y-2">
                <label for="ws-inputPrice">Price</label>
                <input onChange={(event)=> handleChange('price' , event)} className="addProductInput" type="number" id="lws-inputPrice" required />
              </div>
              {/* <!-- quantity --> */}
              <div className="space-y-2">
                <label for="lws-inputQuantity">Quantity</label>
                <input onChange={(event)=> handleChange('stock' , event)} className="addProductInput" type="number" id="lws-inputQuantity" required />
              </div>
            </div>
            {/* <!-- submit button --> */}
            <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
          </form>
        </div>
    );
};

export default FormContainer;