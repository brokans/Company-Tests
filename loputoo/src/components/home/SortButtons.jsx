import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function SortButtons(props) {
  const sortAZ = () => {
    props.products.sort((a, b) => a.name.localeCompare(b.name, "et"));
    props.setProducts(props.products.slice());
  };

  const sortZA = () => {
    props.products.sort((a, b) => b.name.localeCompare(a.name, "et"));
    props.setProducts(props.products.slice());
  };

  const sortPriceAsc = () => {
    props.products.sort((a, b) => a.price - b.price);
    props.setProducts(props.products.slice());
  };

  const sortPriceDesc = () => {
    props.products.sort((a, b) => b.price - a.price);
    props.setProducts(props.products.slice());
  };
  return (
    // Fragment et ei tekiks kujundamisel probleeme
    <React.Fragment>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Sorteeri
        </Dropdown.Toggle>
            <br /> <br />
        <Dropdown.Menu>
          <Dropdown.Item onClick={sortAZ}>Sorteeri A-Z</Dropdown.Item>
          <Dropdown.Item onClick={sortZA}>Sorteeri Z-A</Dropdown.Item>
          <Dropdown.Item onClick={sortPriceAsc}>Hind Kasvav</Dropdown.Item>
          <Dropdown.Item onClick={sortPriceDesc}>Hind Kahanev</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  );
}

export default SortButtons;
