//src/components/ProductList.jsx

import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="product-list" style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16}}>
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
