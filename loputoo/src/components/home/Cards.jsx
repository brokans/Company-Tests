import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import config from "../../data/config.json";


function Cards() {
  const [projects, setProjects] = useState([]);

  // const lastImage = projects?.[projects.length-1]?.photoOne;
  // const secondToLastImage = projects?.[projects.length-2]?.photoOne;
  // const thirdToLastImage = projects?.[projects.length-3]?.photoOne;
  // const lastImageName = projects?.[projects.length-1]?.name;
  // const secondToLastName = projects?.[projects.length-2]?.name;
  // const thirdToLastName = projects?.[projects.length-3]?.name;

  const lastImage = projects?.[1]?.photoOne;
  const secondToLastImage = projects?.[2]?.photoOne;
  const thirdToLastImage = projects?.[3]?.photoOne;
  const lastImageName = projects?.[1]?.name;
  const secondToLastName = projects?.[2]?.name;
  const thirdToLastName = projects?.[3]?.name;


  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => setProjects(json || []));
  }, []);
  
  return (
    <div className="d-flex justify-content-center homePageCards">
      <Card className="homePageCard">
        <a href={"project-page/" + lastImageName}>
          <Card.Img variant="top" src={lastImage}/>
          {/* <Card.Title className="card_title"></Card.Title> */}
        </a>
      </Card>

      <Card className="homePageCard">
        <a href={"project-page/" + secondToLastName}>
          <Card.Img variant="top" src={secondToLastImage}/>
          {/* <Card.Title className="card_title">SISEARHITEKTUUR</Card.Title> */}
        </a>
      </Card>

      <Card className="homePageCard">
        <a href={"project-page/" + thirdToLastName}>
          <Card.Img variant="top"  src={thirdToLastImage}/>
          {/* <Card.Title className="card_title">KURSUSED</Card.Title> */}
        </a>
      </Card>
    </div>
  );
}

export default Cards;
