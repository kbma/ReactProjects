// src\pages\ProductDetail.jsx
import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/products.json"; // fichier JSON des produits
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  // Trouver le produit correspondant
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div>
        <h2>Produit non trouvé</h2>
        <Link to="/">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", height: "300px" }}
      />
      <p>{product.description}</p>
      <p>Prix : {product.price} €</p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>
      <br />
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default ProductDetail;
