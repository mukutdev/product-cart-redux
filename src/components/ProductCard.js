import React from 'react';
import { useDispatch } from 'react-redux';
import { reduceStock } from '../redux/addProduct/action';
import { addedToCart } from '../redux/CartItems/action';


const ProductCard = ({product}) => {

    const dispatch = useDispatch()
    const handleAddToCart = (pro)=>{
      console.log(pro)
      if(Number(pro.stock) > 0){
          dispatch(addedToCart(pro))
          dispatch(reduceStock(pro.productId))
      }
    }

    return (
        <div className="lws-productCard">
          <img className="lws-productImage" src={product.imgUrl} alt="product" />
          <div className="p-4 space-y-2">
            <h4 className="lws-productName">{product.productName}</h4>
            <p className="lws-productCategory">{product.category}</p>
            <div className="flex items-center justify-between pb-2">
              <p className="productPrice">BDT <span className="lws-price">{product.price}</span></p>
              <p className="productQuantity">QTY <span className="lws-quantity">{product.stock}</span></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className="lws-btnAddToCart">Add To Cart</button>
          </div>
        </div>
    );
};

export default ProductCard;