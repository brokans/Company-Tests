import React from "react";
import Card from "react-bootstrap/Card";

function CardsSquare() {
  return (
    <div className="d-flex justify-content-center homePageSquareCards">
      <Card className="cardOne_square">
        <a className="card-img" href="/arhitektuur">
          <Card.Img variant="top" />
          <Card.Title className="card_title">POOD</Card.Title>
        </a>
      </Card>

      <Card className="cardTwo_square">
        <a className="card-img" href="/sisearhitektuur">
          <Card.Img variant="top" />
          <Card.Title className="card_title">BLOGI</Card.Title>
        </a>
      </Card>
    </div>
  );
}

export default CardsSquare;
