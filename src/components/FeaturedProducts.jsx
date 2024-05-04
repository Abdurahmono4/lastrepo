// import React from "react";
// import { useLoaderData } from "react-router-dom";
// import { SectionTitle } from "./SectionTitle";

// function FeaturedProducts() {
//   const { products } = useLoaderData();
//   console.log(products);
//   return (
//     <div>
//       <h1>Featured Products</h1>
//     </div>
//   );
// }

// export default FeaturedProducts;

import { useLoaderData } from "react-router-dom";
import { SectionTitle } from "./SectionTitle";
import ProductsGrid from "./ProductsGrid";

function FeaturedProducts() {
  return (
    <div className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </div>
  );
}

export default FeaturedProducts;
