//src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import productsData from "../data/products.json";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // on charge depuis le fichier JSON local
    setProducts(productsData);
  }, []);

  return (
    <div style={{padding:20}}>
      <h1>Catalogue</h1>
      <ProductList products={products} />
    </div>
  );
}
