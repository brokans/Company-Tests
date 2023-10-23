import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../data/config.json";
import { Spinner } from "react-bootstrap";

function ProductPage() {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const found = products.find((product) => product.id === Number(productId));

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

  return (
    <div>
      <br /> <br />
      <img src={found.image} alt="" /> <br /> <br />
      <label htmlFor="">
        <p>Toote nimi:</p>
        {found.name}
      </label>{" "}
      <br /> <br />
      <label htmlFor="">
        <p>Toote kirjeldus:</p>
        {found.description}
      </label>{" "}
      <br /> <br />
      <label htmlFor="">
        <p>Hind:</p>
        {found.price + "€"}
      </label>
    </div>
  );
}

export default ProductPage;
