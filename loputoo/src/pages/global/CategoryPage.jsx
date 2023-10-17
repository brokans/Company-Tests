import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Spinner } from "react-bootstrap";
import config from "../../data/config.json";
import { useParams } from "react-router-dom";
import SortButtons from "../../components/home/SortButtons";
import Carouselles from "../../components/home/Carouselles";
import { useContext } from "react";
import { CartSumContext } from "../../store/CartSumContext";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";


function CategoryPage() {
  const { setCartSum } = useContext(CartSumContext);
  const { t } = useTranslation();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.products)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json || []);
        setLoading(false);
      });
  }, []);

  if (isLoading === true) {
    return <Spinner />;
  }

  const decodedCategory = decodeURIComponent(category).trim();

  const filteredProducts = products.filter(
    (product) => product.category === decodedCategory
  );

  const addToCart = (clickedProduct) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    // kas on ostukorvis
    const index = cart.findIndex(
      (cartProduct) => cartProduct.product.id === clickedProduct.id
    );
    if (index >= 0) {
      // kui on ostukorvis siis quantity pluss üks
      cart[index].quantity++;
    } else {
      // lisab ühe toote, hiljem lisab samale juurde, ei teki eraldi samasugust toodet
      cart.push({ quantity: 1, product: clickedProduct });
    }

    let sum = 0;
    cart.forEach(
      (cartProduct) =>
        (sum = sum + cartProduct.product.price * cartProduct.quantity)
    );
    setCartSum(sum.toFixed(2));
    // return sum.toFixed(2);
    // Salvestab ostukorvi lokaalselt
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(t("product-added"));

    // 1. Võtame localStorage'st ostukorvi varasema seisu
    // 2. Võtame LocalStorage'st saadud väärtuselt jutumärgi maha: JSON.parse()
    // 3. Lisame saadud väärtusele juurde ühe toote: .push()
    // 4. Paneme uuenenud väärtustele jutumärgid peale tagasi JSON.stringify()
    // 5. Paneme localStorage'sse tagasi: LocalStorage.setItem()
  };

  return (
    <div >
      <h2>Kategooria: {category}</h2>
      <Carouselles />
      <SortButtons products={products} setProducts={setProducts} />
      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <ul className="product-card-container">
          {filteredProducts.map((product, index) => (
            <div key={index}>
              <Card className="product-card" style={{ width: "18rem" }}>
                <Card.Img
                  className="product-img"
                  variant="top"
                  src={product.image}
                />
                <hr />
                <Card.Body>
                  <Card.Title className="product-title">
                    {product.name}
                  </Card.Title>
                  <hr />
                  <Card.Text className="product-description">
                    {product.description}
                  </Card.Text>
                  <Card.Text className="product-description">
                    {product.price + "€"} <br />
                    <Button variant="secondary">Üksikasjad</Button>
                    <Button
                      variant="secondary"
                      onClick={() => addToCart(product)}
                    >
                      {t("addTo-cart")}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </ul>
      )}
      <ToastContainer position="bottom-left" autoClose={2000} theme="dark" />

    </div>
  );
}

export default CategoryPage;
