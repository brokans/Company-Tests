import React, { useEffect, useRef, useState } from "react";
import Map from "../../components/Map";
import Button from "react-bootstrap/Button";
import config from "../../data/config.json";
import Footer from "../../components/home/Footer";

export const Contact = () => {
  const [shops, uShops] = useState([]);

  const [coordinaates, setCoordinates] = useState({
    lngLat: [57.7731, 26.0367],
    zoom: 11,
  });

  useEffect(() => {
    fetch(config.shops)
      .then((res) => res.json())
      .then((json) => uShops(json || []));
  }, []);

  return (
    <div className="locations">
      <div className="contact-img">
        <img
          className="office-img"
          src="https://i.postimg.cc/T3FQM4B9/Kontor.png"
          alt=""
        />
      </div>
      <div>
        <br />
        {/* <Button
          onClick={() => setCoordinates({ lngLat: [58.8882, 25.523], zoom: 7 })}
          className="gold-btn"
          variant="dark"
        >
          Kõik Stuudiod
        </Button>{" "} */}
        {/* <Button
          onClick={() =>
            setCoordinates({ lngLat: [59.4378, 24.7574], zoom: 11 })
          }
          className="gold-btn"
          variant="dark"
        >
          Kõik Tallinna Stuudiod
        </Button> */}
      </div>

      {shops.map((shop) => (
        <div className="map-btn">
          <Button
            key={shop.name}
            onClick={() =>
              setCoordinates({ lngLat: [shop.lati, shop.long], zoom: 13 })
            }
            className="gold-btn"
            variant="dark"
          >
            {shop.name}
          </Button>
        </div>
      ))}

      <Map mapCoordinaates={coordinaates} />

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
