//src/App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Header />
      <main style={{padding:20}}>
        <Outlet />
      </main>
    </CartProvider>
  );
}
