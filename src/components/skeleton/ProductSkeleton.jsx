import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = ({ products }) => {
  return Array(products.length)
    .fill(0)
    .map((_) => (
      <div className="border-gray z-50 w-[12rem]">
        <Skeleton height={170} />
        <Skeleton count={4} />
      </div>
    ));
};

export default ProductSkeleton;
