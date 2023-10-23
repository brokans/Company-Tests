import React, { useEffect, useState } from 'react'
import config from "../../data/config.json";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';


function Store() {
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

  const categoryNames = new Set(products.map(product => product.category))


  return (
    
    <div className="d-grid gap-2">
        {Array.from(categoryNames).map((category, index) => (
        <Button as={Link} to={"/category/ " + category} key={index} variant="secondary" size="lg">
          {category || "Vali Kategooria"}
      </Button>
      ))}
        
      
    </div>
  )
}

export default Store