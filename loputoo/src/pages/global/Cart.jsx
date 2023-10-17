import React, { useContext, useState } from "react";
import styles from "../../css/Cart.module.css";
// import cartFromFile from "../../data/cart.json";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import ParcelMachine from "../../components/cart/ParcelMachine";
import Payment from "../../components/cart/Payment";
import { CartSumContext } from "../../store/CartSumContext";

function Cart() {
  const { setCartSum } = useContext(CartSumContext);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));
  
  const { t } = useTranslation();

  function emptyCart() {
    cart.splice(0);
    setCart(cart.slice());
    toast.error(t("cart-empty"));
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(summedPrice());
  }

  function increaseQuantity(index) {
    cart[index].quantity++;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(summedPrice());

  }

  function decreaseQuantity(index) {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(summedPrice());

  }

  function summedPrice() {
    let sum = 0;
    cart.forEach(
      (cartProduct) =>
        (sum = sum + cartProduct.product.price * cartProduct.quantity)
    );
    return sum.toFixed(2);
  }

  function removeItem(index) {
    cart.splice(index, 1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(summedPrice());

  }

  return (
    <div>
      <div>
        {cart.length > 1 && (
          <div>
            {cart.length} {t("products-in-cart")}
          </div>
        )}
        {cart.length === 1 && (
          <div>
            {cart.length} {t("product-in-cart")}
          </div>
        )}
        {cart.length > 0 && (
          <button onClick={emptyCart}>{t("empty-cart")}</button>
        )}
        <br /> <br />
        {cart.map((cartProduct, index) => (
          <div className={styles.product} key={index}>
            <img
              className={styles.image}
              src={cartProduct.product.image}
              alt=""
            />
            <br />
            <div className={styles.name}>{cartProduct.product.name}</div>
            <div className={styles.price}>
              {cartProduct.product.price.toFixed(2)}€
            </div>
            {/* <button >+</button> */}
            <div className={styles.quantity}>
              <img
                className={styles.button}
                onClick={() => increaseQuantity(index)}
                src="/add.png"
                alt=""
              />
              <div>{cartProduct.quantity} pcs</div>
              {/* <button >-</button> */}
              <img
                className={styles.button}
                onClick={() => decreaseQuantity(index)}
                src="/minus.png"
                alt=""
              />
            </div>
            <div className={styles.total}>
              {(cartProduct.product.price * cartProduct.quantity).toFixed(2)}€
            </div>
            {/* <button >Remove Item</button> */}
            <img
              className={styles.button}
              onClick={() => removeItem(index)}
              src="/delete.png"
              alt=""
            />
            <br /> <br />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        // sidekriipsu asemel kasutatakse kahte alakriipsu et html aksepteeriks
        <div className={styles.cart__bottom}>
          <ParcelMachine />
          {/* Saadan Payment.jsx faili funktsiooni väärtuse */}
          <div className="total">
            {t("subtotal")} {summedPrice()}€{" "}
          </div>
          <Payment sum={summedPrice()}/>
        </div>
      )}

      {cart.length === 0 && (
        <>
          <div>{t("cart-empty")}</div>
          <Link to="/">{t("shop")}</Link>
        </>
      )}
      <br />

      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  );
}

export default Cart;

// Cart.js lehel võimaldada ostukorvi sisu vaadata
//      ostukorvist kustutada, ostukorvi tühjendada, ostukorvi kogusummat vaadata
//      dünaamiline väljakuvamine (tühjendamine ja kogusumma peita kui tühi)
//              kui tühi, siis öelda, et on tühi
