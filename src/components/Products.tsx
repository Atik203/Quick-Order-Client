import React from "react";
import { useGetProductsQuery } from "../redux/api/api";
import ProductCard from "./ProductCard";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery({});
  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-10">All Products</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {data?.data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
