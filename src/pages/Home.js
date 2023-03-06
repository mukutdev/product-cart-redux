import React from "react";
import FormContainer from "../components/FormContainer";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <main className="py-16">
        <div className="productWrapper">
          {/* <!-- products container --> */}
          <div className="productContainer" id="lws-productContainer">
            <ProductCard />
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
