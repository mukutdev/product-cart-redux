import React from "react";
import { useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import ProductCard from "../components/ProductCard";

const Home = () => {

  const products = useSelector(state => state.products)
  
  // console.log(products)

  return (
    <>
      <main className="py-16">
        <div className="productWrapper">
          {/* <!-- products container --> */}
          <div className="productContainer" id="lws-productContainer">
            {
              products.length > 0 ? products.map(product => <ProductCard key={product.productId} product={product} />) : "No Products Found"
            }
      
          </div>

          <div>
            {/* <!-- Product Input Form --> */}
            <FormContainer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
