import React, { useEffect, useState } from "react";
import useProductStore from "../../store/productStore";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import ProductSkeleton from "../../components/skeleton/ProductSkeleton";

const Products = () => {
  const products = useProductStore((state) => state.products);
  const isLoading = useProductStore((state) => state.isLoading);
  const [savedProduct, setSavedProduct] = useState([]);
  const handleFetchProducts = useProductStore(
    (state) => state.handleFetchProducts
  );

  useEffect(() => {
    handleFetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    if (savedProduct.includes(product)) {
      alert("Product already saved!");
      return;
    } else {
      setSavedProduct([...savedProduct, product]);
      localStorage.setItem("savedProduct", JSON.stringify(savedProduct));
    }

    alert(
      `Successfully added ${product.title} to cart, and it's price is ${product.price}`
    );
  };

  useEffect(() => {
    localStorage.setItem("savedProduct", JSON.stringify(savedProduct));
  }, [savedProduct]);

  return (
    <div className="bg-light-gray h-full py-[2rem]">
      <div className="flex flex-wrap items-start justify-evenly">
        <div className=" h-auto w-[15rem] bg-white">
          <h1>Filter Options</h1>
        </div>
        <div className="flex flex-wrap flex-col justify-center w-auto items-center md:w-[59rem]">
          <h1 className="text-center">Products</h1>
          <div className="flex flex-wrap items-center justify-center gap-5  pt-10">
            {isLoading && <ProductSkeleton products={products} />}
            {!isLoading &&
              products.map((product) => (
                <div
                  className="relative h-[20rem] w-[12rem] my-5 bg-white p-5 rounded-md shadow-sm hover:shadow-2xl duration-500 transition"
                  key={product.id}
                >
                  <img
                    className="h-[10rem] w-full object-cover"
                    src={product.image}
                    alt={product.title}
                  />
                  <HiOutlineShoppingCart
                    onClick={() => handleAddToCart(product)}
                    className="absolute top-2 right-3 text-dark-cyan cursor-pointer"
                    size={18}
                  />
                  <p className="text-[0.6rem] pt-4">{product.title}</p>
                  <p className="text-[1rem] font-bold pt-1">${product.price}</p>
                  <p className="text-[0.8rem] flex items-center justify-start gap-1 py-1">
                    {[...new Array(Math.floor(product.rating.rate))].map(
                      (_, idx) => (
                        <BsStarFill
                          key={idx}
                          className="text-dark-cyan"
                          size={14}
                        />
                      )
                    )}
                    {product.rating.rate % 1 !== 0 && (
                      <>
                        {[
                          ...new Array(
                            [product.rating.rate % 1].toLocaleString()
                          ),
                        ].map((_, idx) => (
                          <BsStarHalf
                            key={idx}
                            className="text-dark-cyan"
                            size={14}
                          />
                        ))}
                      </>
                    )}

                    {product.rating.rate}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
