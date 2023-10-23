import React, { useEffect, useState } from "react";
import Map from "../../components/Map";
import config from "../../data/config.json";
import Button from "react-bootstrap/Button";

function Locations() {
  const [shops, uShops] = useState([]);

  const [coordinaates, setCoordinates] = useState({
    lngLat: [59.4378, 24.7574],
    zoom: 11,
  });

  useEffect(() => {
    fetch(config.shops)
      .then((res) => res.json())
      .then((json) => uShops(json || []));
  }, []);
  return (
    <div>
      <div>
        <br />
        <Button
          onClick={() => setCoordinates({ lngLat: [58.8882, 25.523], zoom: 7 })}
          className="gold-btn"
          variant="dark"
        >
          Kõik Stuudiod
        </Button>{" "}
        <Button
          onClick={() =>
            setCoordinates({ lngLat: [59.4378, 24.7574], zoom: 11 })
          }
          className="gold-btn"
          variant="dark"
        >
          Kõik Tallinna Stuudiod
        </Button>
      </div>

      {shops.map((shop) => (
        <div>
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
    </div>
  );
}

export default Locations;
