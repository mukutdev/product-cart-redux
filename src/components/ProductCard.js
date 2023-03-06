import React from 'react';

const ProductCard = () => {
    return (
        <div class="lws-productCard">
          <img class="lws-productImage" src="https://i.dummyjson.com/data/products/59/thumbnail.jpg" alt="product" />
          <div class="p-4 space-y-2">
            <h4 class="lws-productName">Spring and summershoes</h4>
            <p class="lws-productCategory">Mens shoes</p>
            <div class="flex items-center justify-between pb-2">
              <p class="productPrice">BDT <span class="lws-price">400</span></p>
              <p class="productQuantity">QTY <span class="lws-quantity">10</span></p>
            </div>
            <button class="lws-btnAddToCart">Add To Cart</button>
          </div>
        </div>
    );
};

export default ProductCard;