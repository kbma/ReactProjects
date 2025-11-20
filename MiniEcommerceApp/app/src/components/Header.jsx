//src\components\Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header(){
  const { cart } = useCart();
  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <header style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:12, borderBottom:"1px solid #eee"}}>
      <Link to="/"><h2>Mini E-commerce</h2></Link>
      <nav>
        <Link to="/cart">Panier ({totalItems})</Link>
      </nav>
    </header>
  );
}
