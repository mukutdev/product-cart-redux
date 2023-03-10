import React from 'react';
import { useDispatch } from 'react-redux';
import { reduceStock } from '../redux/addProduct/action';
import { addedToCart } from '../redux/CartItems/action';


const ProductCard = ({product}) => {

    const {productName , category , price ,stock , imgUrl} = product  

    const dispatch = useDispatch()
    const handleAddToCart = (pro)=>{
      if(Number(pro.stock) > 0){
          dispatch(addedToCart(pro))
          dispatch(reduceStock(pro.productId, "decrement"))
      }
    }

    return (
        <div className="lws-productCard">
          <img className="lws-productImage" src={imgUrl} alt="product" />
          <div className="p-4 space-y-2">
            <h4 className="lws-productName">{productName}</h4>
            <p className="lws-productCategory">{category}</p>
            <div className="flex items-center justify-between pb-2">
              <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
              <p className="productQuantity">QTY <span className="lws-quantity">{stock}</span></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} disabled={stock < 1} className="lws-btnAddToCart">Add To Cart</button>
          </div>
        </div>
    );
};

export default ProductCard;