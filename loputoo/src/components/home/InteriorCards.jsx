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
        <div className="extra-card-container">
          <a className="noUnderline" href={"/project-page/" + project.name}>
            <Card
              href={"/project-page/" + project.name}
              className="homePageCard"
            >
              <img src={project.photoTwo} alt="" />
              <Card.Title className="project-card-title">
                {project.name}
              </Card.Title>
            </Card>
          </a>
        </div>
      </div>
      ))}
    </div>
  );
}

export default InteriorCards;
