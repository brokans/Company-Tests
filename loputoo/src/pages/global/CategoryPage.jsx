import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Spinner } from "react-bootstrap";
import config from "../../data/config.json";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // const filterCategory = () => {
  //   const result = products.filter((product) => 
  //   product.category.includes(category));
  //   setSelectedCategory(result);
  // }

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
  // console.log(selectedCategory.length);
  return (
    <div>
      {products.map((product, index) => 
        <div key={index}>{product}</div>
      )}
    </div>
  );
}

export default CategoryPage;
