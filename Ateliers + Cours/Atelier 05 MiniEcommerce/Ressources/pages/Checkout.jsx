// src/components/Checkout.jsx
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    address: "",
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullname || !form.email || !form.address) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Simuler validation commande
    setOrderConfirmed(true);
    clearCart();
  };

  if (orderConfirmed) {
    return (
      <div className="checkout">
        <h2>🎉 Merci pour votre commande !</h2>
        <p>Votre commande a été validée avec succès.</p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Validation de la commande</h2>

      {cart.length === 0 ? (
        <p>Aucun article dans le panier.</p>
      ) : (
        <>
          <h3>Total : {totalPrice.toFixed(2)} €</h3>

          <form onSubmit={handleSubmit} className="checkout-form">
            <label>Nom complet :</label>
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              placeholder="Votre nom"
            />

            <label>Email :</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Votre e-mail"
            />

            <label>Adresse :</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Adresse de livraison"
            ></textarea>

            <button type="submit" className="btn-pay">
              Confirmer et payer
            </button>
          </form>
        </>
      )}
    </div>
  );
}
