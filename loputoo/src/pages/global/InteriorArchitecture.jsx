import React, { useEffect, useState } from 'react'
import InteriorCards from '../../components/home/InteriorCards'
import Footer from '../../components/home/Footer'
import config from "../../data/config.json";


function Sisearhitektuur() {
  
  const [projects, setProjects] = useState([]);
  const [randomHomePageImg, setRandomHomePageImg] = useState('');
  const found = projects.filter(
    (project) => project.category === "Sisearhitektuur" 
  );

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => setProjects(json || []));
  }, []);
  
  useEffect(() => {
    if (found.length > 0) {
      const randomIndex = Math.floor(Math.random() * found.length);
      const randomProject = found[randomIndex];
      if (randomProject && randomProject.photoOne) {
        setRandomHomePageImg(randomProject.photoOne);
      }
    }
  }, [found]);
  return (
    <div>
      <div className="architecture-img-container">
        <img
          className="homePage-img"
          src={randomHomePageImg}
          alt="pic"
        />
      </div>
        <br /> <br />
        < InteriorCards />
        <div className="footer">
        <Footer />
      </div>
        
    </div>
  )
}

export default Sisearhitektuur