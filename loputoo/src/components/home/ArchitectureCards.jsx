import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import config from "../../data/config.json";

function ArchitectureCards() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => setProjects(json || []));
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {projects.map((project, index) => (
        <div key={index}>
          {/* <div className="cardOne_A">
            <a className="card-img2" href="/sisearhitektuur">
              <div className="card_title_A">{project.name}</div>
              <img src={project.photo} alt="" />
            </a>
          </div> */}
          <br /> <br />
          <Card className="cardOne_A">
            <a style={{backgroundImage: `url(${project.photo})`}} className="card-img2" href="/sisearhitektuur">
              <Card.Title className="card_title_A">{project.name}</Card.Title>
              <Card.Img  variant="top" />
            </a>
          </Card>
        </div>
      ))}

      {/* <Card className="cardOne_A">
        <a className="card-img2" href="/sisearhitektuur">
          <Card.Title className="card_title_A">PROJEKT</Card.Title>
          <Card.Img variant="top" />
        </a>
      </Card>

      <Card className="cardOne_A">
        <a className="card-img3" href="/eriosad">
          <Card.Title className="card_title_A">PROJEKT</Card.Title>
          <Card.Img variant="top" />
        </a>
      </Card>
      <Card className="cardOne_A">
        <a className="card-img3" href="/eriosad">
          <Card.Title className="card_title_A">PROJEKT</Card.Title>
          <Card.Img variant="top" />
        </a>
      </Card> */}
    </div>
  );
}

export default ArchitectureCards;
