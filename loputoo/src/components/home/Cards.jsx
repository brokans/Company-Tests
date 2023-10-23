import React from "react";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <div className="d-flex justify-content-center homePageCards">
      <Card className="cardOne">
        <a className="card-img" href="/arhitektuur">
          <Card.Img variant="top" />
          <Card.Title className="card_title">ARHITEKTUUR</Card.Title>
        </a>
      </Card>

      <Card className="cardTwo">
        <a className="card-img2" href="/sisearhitektuur">
          <Card.Img variant="top" />
          <Card.Title className="card_title">SISEARHITEKTUUR</Card.Title>
        </a>
      </Card>

      <Card className="cardThree">
        <a className="card-img3" href="/courses">
          <Card.Img variant="top" />
          <Card.Title className="card_title">KURSUSED</Card.Title>
        </a>
      </Card>
    </div>
  );
}

export default Cards;
