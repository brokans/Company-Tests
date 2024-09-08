import React, { useEffect, useState } from "react";
import config from "../../data/config.json";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carouselles() {
  const [projects, setProjects] = useState([]);
  const found = projects.filter(
    (project) => project.category === "Arhitektuur"
  );

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => setProjects(json || []));
  }, []);

  return (
    <div>
      <Carousel fade>
        {found.map((project) => 
        <Carousel.Item interval={project.photoOne ? 2000 : project.photoOne}>
          {project.photoOne && < img src={project.photoOne} alt="" />}
          <Carousel.Caption>
            <h3>{project.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        )}
      </Carousel>
    </div>
  );
}

export default Carouselles;
