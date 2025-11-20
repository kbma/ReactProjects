// src/pages/Cart.jsx

import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, total } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Mon Panier</h1>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Produit</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Sous-total</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price} TND</td>
                  <td>
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </td>
                  <td>{(item.price * item.quantity).toFixed(2)} TND</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>❌ Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={{ textAlign: "right", marginTop: "20px" }}>
            Total : <strong>{total.toFixed(2)} TND</strong>
          </h2>
        </div>
      )}
    </div>
  );
}
