import React from 'react';
import { useSelector } from 'react-redux';
import BillDetails from '../components/BillDetails';
import CartCard from '../components/CartCard';

const Cart = () => {

    const totalCartItems = useSelector(state => state.cartItems)

    return (
        <>

        <main className="py-16">
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <div className="space-y-6">
          {/* <!-- Cart Item --> */}
         {
          totalCartItems.length > 0 ?  
            totalCartItems.map(cartProduct => <CartCard key={cartProduct.product.productId} cartProduct={cartProduct}/>)
           : "No products added to cart"
         }
          {/* <!-- Cart Items Ends --> */}

        </div>

        {/* <!-- Bill Details --> */}
        <div>
          <BillDetails totalBill = {totalCartItems}/>
        </div>
      </div>
    </div>
  </main>
            
        </>
    );
};

export default Cart;