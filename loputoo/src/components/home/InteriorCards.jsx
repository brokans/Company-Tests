import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import config from "../../data/config.json";

function InteriorCards() {
  const [projects, setProjects] = useState([]);
  const found = projects.filter(
    (project) => project.category === "Sisearhitektuur"
  );

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => setProjects(json || []));
  }, []);
  return (
    <div className="interior-projects-container">
      {found.map((project, index) => (
        <div key={index}>
          <br /> <br />
          <div className="interior-card-container">
            <Card className="interior-card">
              <a
                style={{ backgroundImage: `url(${project.photoOne})` }}
                className="card-img2"
                href={"/project-page/" + project.name}
              >
                <Card.Title className="card_title_A">{project.name}</Card.Title>
                <Card.Img variant="top" />
              </a>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InteriorCards;
