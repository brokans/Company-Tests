import React from "react";
import Cards from "../../components/home/Cards";
import Footer from "../../components/home/Footer";
import "../../App.css";
import CardsSquare from "../../components/home/CardsSquare";

function HomePage() {
  return (
    <div>
      <div>
        <img
          className="homePage-img"
          src="https://media.architecturaldigest.com/photos/56ba787ca254b168296a8fff/master/w_1920%2Cc_limit/zaha-hadid-architecture-01.jpg"
          alt="pic"
        />
        <br /> <br />
        <Cards />
        < CardsSquare />
        <br /> <br />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
