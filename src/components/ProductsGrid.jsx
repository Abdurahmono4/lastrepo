import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

function ProductsGrid() {
  const { products } = useLoaderData();
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        console.log(product);
        const { title, price, image } = product.attributes;
        const DollarAmount = formatPrice(price);
        return (
          <Link
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
            key={product.id}
            to={`/product/${product.id}`}
          >
            <figure className="px-4 pt-4 ">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full  object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider ">{title}</h2>
              <span className="text-secondary ">{}wDollarAmount</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
