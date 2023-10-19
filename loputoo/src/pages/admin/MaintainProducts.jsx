import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Spinner } from "react-bootstrap";
import config from "../../data/config.json";
import { Link } from "react-router-dom";
import EditModal from "../../components/admin/EditModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  fa1,
  fa2,
  fa3,
  fa4
} from "@fortawesome/free-solid-svg-icons";
import AddProductModal from "../../components/admin/AddProductModal";


function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [leftButtonDisabled, setLeftButtonDisabled] = useState(true);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);

  const list = products;
  const endIndex = currentPage * postsPerPage;
  const startIndex = endIndex - postsPerPage;
  const currentItems = list.slice(startIndex, endIndex);


  useEffect(() => {
    fetch(config.products)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json || []);
        setLoading(false);
      });
  }, []);

  // if (isLoading === true) {
  //   return <Spinner />;
  // }

  const pageOne = () => {
    setCurrentPage(1);
    setLeftButtonDisabled(true);
    setRightButtonDisabled(false);
  };

  const pageTwo = () => {
    setCurrentPage(2);
    setRightButtonDisabled(false);
    setLeftButtonDisabled(false);
  };
  const pageThree = () => {
    setCurrentPage(3);
    setRightButtonDisabled(false);
    setLeftButtonDisabled(false);
  };
  const pageFour = () => {
    setCurrentPage(4);
    setRightButtonDisabled(true);
    setLeftButtonDisabled(false);
  };

  const decPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setRightButtonDisabled(false);
    }
    if (currentPage === 2) {
      setLeftButtonDisabled(true);
    }
  };

  const incPage = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
      setLeftButtonDisabled(false);
    }
    if (currentPage === 3) {
      setRightButtonDisabled(true);
    }
  };

  return (
    <div>
      < AddProductModal />
      <ul className="product-card-container">
        {currentItems.map((product, index) => (
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
                <EditModal 
                  key={product.id}
                  product={product}
                  products={products}
                />
              </Card.Body>
            </Card>
          </div>
        ))}
      </ul>
      <div>
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={faChevronLeft}
              size="lg"
              style={{
                color: leftButtonDisabled ? "#999" : "#ffffff",
                cursor: leftButtonDisabled ? "inactive" : "pointer",
              }}
              onClick={() => decPage()}
            />
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={fa1}
              style={{ color: "#ffffff" }}
              onClick={() => pageOne()}
            />
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={fa2}
              style={{ color: "#ffffff" }}
              onClick={() => pageTwo()}
            />
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={fa3}
              style={{ color: "#ffffff" }}
              onClick={() => pageThree()}
            />
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={fa4}
              style={{ color: "#ffffff" }}
              onClick={() => pageFour()}
            />
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={faChevronRight}
              size="lg"
              style={{
                color: rightButtonDisabled ? "#999" : "#ffffff",
                cursor: rightButtonDisabled ? "inactive" : "pointer",
              }}
              onClick={() => incPage()}
            />{" "}
          </div>
    </div>
  );
}

export default MaintainProducts;
