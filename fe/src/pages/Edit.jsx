import React, { useEffect, useState } from "react";
import Popups from "../components/Popups";
import "../App.css";
import "../components/Popup.css";

function Edit(props) {
  const [buttonPopup, setButtonPopup] = useState(false);

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
