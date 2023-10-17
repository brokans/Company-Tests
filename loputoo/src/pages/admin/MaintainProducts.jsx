import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Spinner } from "react-bootstrap";
import config from "../../data/config.json";
import { Link } from "react-router-dom";

function MaintainProducts() {
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

  return (
    <div>
      <ul className="product-card-container">
        {products.map((product, index) => (
          <div>
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
                  {product.price + "€"}
                </Card.Text>
                <Button as={Link} to={"/admin/edit-product/" + product.id} variant="primary">Muuda</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default MaintainProducts;
