//src/components/ProductCard.jsx

import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card" style={{border:"1px solid #ddd", padding:12, borderRadius:8}}>
      <img src={product.image} alt={product.title} style={{width:"100%", height:180, objectFit:"cover", borderRadius:6}} />
      <h3>{product.title}</h3>
      <p style={{minHeight:40}}>{product.description}</p>
      <p><strong>{product.price.toFixed(2)} €</strong></p>
      <div style={{display:"flex", gap:8}}>
        <Link to={`/product/${product.id}`}><button>Voir</button></Link>
      </div>
    </div>
  );
}
