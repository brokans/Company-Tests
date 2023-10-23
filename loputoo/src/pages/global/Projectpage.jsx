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
    (project) => project.category === "Sisearhitektuur"
  );

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => setProjects(json || []));
  }, []);
  console.log(found);
  return (
    <div>
      {found.map((project, index) => (
        <div className="project-img-container" key={index}>
          <div className="project-img-main">
            {project.photoOne && <img src={project.photoOne} alt="" />}
          </div>
          <h1>{project.name}</h1>
          <Carousel fade interval={project.photoTwo ? 3000 : null}>
              <Carousel.Item>
                <img src={project.photoTwo} alt="" />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={project.photoThree} alt="" />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={project.photoThree} alt="" />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>

            <Carousel.Item>
              <img src={project.photoFour} alt="" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={project.photoFive} alt="" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <br />
          <div className="project-img-small-container">
            {project.photoTwo && (
              <Card className="project-img-small">
                <a
                  style={{ backgroundImage: `url(${project.photoTwo})` }}
                  className="card-img2"
                  href={"/project-page/" + project.name}
                >
                  {}
                </a>
              </Card>
            )}
            {project.photoThree && (
              <Card className="project-img-small">
                <a
                  style={{ backgroundImage: `url(${project.photoThree})` }}
                  className="card-img2"
                  href={"/project-page/" + project.name}
                >
                  {}
                </a>
              </Card>
            )}
            {project.photoFour && (
              <Card className="project-img-small">
                <a
                  style={{ backgroundImage: `url(${project.photoFour})` }}
                  className="card-img2"
                  href={"/project-page/" + project.name}
                >
                  {}
                </a>
              </Card>
            )}
            {project.photoFive && (
              <Card className="project-img-small">
                <a
                  style={{ backgroundImage: `url(${project.photoFive})` }}
                  className="card-img2"
                  href={"/project-page/" + project.name}
                  alt="project image"
                >
                  {}
                </a>
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
              <Card className="extra-card">
                <a
                  style={{ backgroundImage: `url(${project.photoTwo})` }}
                  className="card-img2"
                  href={"/project-page/" + project.name}
                >
                  {}
                </a>
                <Card.Title className="project-card-title">
                  {project.name}
                </Card.Title>
              </Card>
            </div>
          </div>
        ))}
        <br />
      </div>
      <div className="div-space">{}</div>
      <Footer />
    </div>
  );
}

export default ProjectPage;
