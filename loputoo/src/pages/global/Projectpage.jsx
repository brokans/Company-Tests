import React, { useEffect, useState } from "react";
import config from "../../data/config.json";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Footer from "../../components/home/Footer";
import Carousel from "react-bootstrap/Carousel";

function ProjectPage() {
  const { name } = useParams();
  const [projects, setProjects] = useState([]);
  const found = projects.filter((project) => project.name === name);
  const foundInterior = projects.filter(
    (project) => project.category === "Arhitektuur"
  );
  console.log(found);

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => setProjects(json || []));
  }, []);

  return (
    <div>
      {found.map((project, index) => (
        <div className="project-img-container" key={index}>
          <h1>{project.name}</h1>
          <Carousel fade interval={2000}>
            {project.photoOne && (
              <Carousel.Item>
                <img src={project.photoOne} alt="" />
              </Carousel.Item>
            )}
            {project.photoTwo && (
              <Carousel.Item>
                <img src={project.photoTwo} alt="" />
              </Carousel.Item>
            )}
            {project.photoThree && (
              <Carousel.Item>
                <img src={project.photoThree} alt="" />
              </Carousel.Item>
            )}
            {project.photoFour && (
              <Carousel.Item>
                <img src={project.photoFour} alt="" />
              </Carousel.Item>
            )}
            {project.photoFive && (
              <Carousel.Item>
                <img src={project.photoFive} alt="" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            )}
            {project.photoSix && (
              <Carousel.Item>
                <img src={project.photoSix} alt="" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
          <br />
          <div className="project-img-small-container">
            {project.photoTwo && (
              <Card className="project-img-small">
                <img src={project.photoTwo} alt="" />
              </Card>
            )}
            {project.photoThree && (
              <Card className="project-img-small">
                <img src={project.photoThree} alt="" />
              </Card>
            )}
            {project.photoFour && (
              <Card className="project-img-small">
                <img src={project.photoFour} alt="" />
              </Card>
            )}
            {project.photoFive && (
              <Card className="project-img-small">
                <img src={project.photoFive} alt="" />
              </Card>
            )}
          </div>
          <p className="project-info">{project.info}</p>
        </div>
      ))}
      <br />
      <hr />
      <br />
      <h3>VEEL PROJEKTE</h3> <br />
      <div className="project-extra-container">
        {foundInterior.map((project, index) => (
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
        <br />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default ProjectPage;
