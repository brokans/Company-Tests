import React, { useEffect, useState } from "react";
import Popups from "../components/Popups";
import "../App.css"
import "../components/Popup.css";
import config from "../data/config.json"
import { useParams } from "react-router-dom";


function Edit(props) {

  const [buttonPopup, setButtonPopup] = useState(false);
  const [shipments, setShipments] = useState([]);
  
  useEffect(() => {
    fetch(config.joogidDbUrl)
      .then((res) => res.json())
      .then((json) => {
        setShipments(json || [])
      })
  }, []);

  useEffect(() => {
    setButtonPopup(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
      <div>
        <div className="blue-box"></div>
        <Popups
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        buttonPopup={buttonPopup}
        setButtonPopup={setButtonPopup}
        selectedShipment={props.selectedShipment}
      />
      </div>
    );
  }

  export default Edit;
