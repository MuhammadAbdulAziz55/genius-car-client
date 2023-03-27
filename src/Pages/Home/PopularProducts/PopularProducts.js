import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const PopularProducts = () => {
  const [poProducts, setPoProducts] = useState([]);

  useEffect(() => {
    fetch("PopularProducts.json")
      .then((res) => res.json())
      .then((data) => setPoProducts(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className=" mb-20">
      <div className="text-center">
        <p className="text-orange-600 text-2xl mb-3">Popular Products</p>
        <h2 className="text-4xl font-bold mb-5">Browse Our Products</h2>
        <p className="mb-10">
          the majority have suffered alteration in some form, by injected
          humour, <br />
          or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {poProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-16">
        <button className="btn btn-outline btn-error ">More Products</button>
      </div>
    </div>
  );
};

export default PopularProducts;
