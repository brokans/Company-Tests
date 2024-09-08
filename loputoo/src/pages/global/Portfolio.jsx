import React from "react";
import InteriorCards from "../../components/home/InteriorCards";
import ArchitectureCards from "../../components/home/ArchitectureCards";
import  Tabs from "../../components/Tabs";
import Footer from "../../components/home/Footer";



function Portfolio() {
  return (
    <div>
      <Tabs />
      <br />
      <ArchitectureCards />
      <InteriorCards />
      <div className="footer">
        <Footer />
      </div>    </div>
  );
}

export default Portfolio;
