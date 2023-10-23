import React, { createContext, useState } from "react";

export const CartSumContext = createContext();

export function CartSumContextProvider({ children }) {
  const [cartSum, setCartSum] = useState(calculateInitial());

  function calculateInitial() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let sum = 0;
    cart.forEach(
      (cartProduct) =>
        (sum = sum + cartProduct.product.price * cartProduct.quantity)
    );
    return sum.toFixed(2);
  }

  return (
    <CartSumContext.Provider value={{ cartSum, setCartSum }}>
      {children}
    </CartSumContext.Provider>
  );
}
