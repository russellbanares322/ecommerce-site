import React, { useEffect } from "react";
import useProductStore from "../../store/productStore";

const FeaturedProduct = () => {
  const products = useProductStore((state) => state.products);
  const handleFetchProducts = useProductStore(
    (state) => state.handleFetchProducts
  );

  useEffect(() => {
    handleFetchProducts();
    console.log("renders");
  }, []);

  const handleAddToCart = (productDetails) => {
    alert(
      `Product title is ${productDetails.title} and it's price is ${productDetails.price}`
    );
  };
  return (
    <div className="bg-white h-auto pb-[10rem]">
      <p className="page_header_text">Featured Products</p>
      <div className="flex items-center justify-center gap-5 mt-[13rem] flex-wrap">
        {products.slice(0, 4).map((product) => (
          <div
            onClick={() => handleAddToCart(product)}
            className="flex flex-col items-center justify-center gap-2 h-[10rem] w-[16rem] mb-[5rem]"
            key={product.id}
          >
            <img
              className="h-[10rem] w-[8rem] object-cover"
              src={product.image}
            />
            <p className="text-dark-blue text-[0.9rem]">{product.title}</p>
            <p className="text-dark-blue text-[0.8rem]">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
