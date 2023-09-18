import React, { useEffect, useRef } from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
// import config from "../data/config.json";
import shipmentInfoFromFile from "../data/Shipments.json";
import { Link, useParams } from "react-router-dom";
// import BSForms from "../components/BSForms";
import Popups from "../components/Popups";

function Homepage() {
  const [shipments, setShipments] = useState(shipmentInfoFromFile);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [selectedShipment, setSelectedShipment] = useState(null);
  

  // const orderNoRef = useRef();
  // const dateRef = useRef();
  // const customerRef = useRef();
  // const trackingNoRef = useRef();
  // const statusRef = useRef();
  // const consigneeRef = useRef();
  // const { shipmentOrderNo } = useParams();
  // const found = shipments.find((shipment) => shipment.date === shipmentOrderNo);

  const handleEditClick = (shipment, shipmentOrderNo) => {
    setButtonPopup(true);
    setSelectedShipment(shipment);
  };

  // const edit = () => {
  //   shipmentInfoFromFile[shipmentOrderNo] = {
  //     orderNo: orderNoRef.current.value,
  //     date: dateRef.current.value,
  //     customer: customerRef.current.value,
  //     trackingNo: trackingNoRef.current.value,
  //     status: statusRef.current.value,
  //     consignee: consigneeRef.current.value,
  //   };
  // };
  // config.shipmentDataURL
  // useEffect(() => {
  //   fetch(shipmentInfoFromFile)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       setShipments(json || []);
  //     });
  // }, []);

  const deleteShipment = (index) => {
    shipments.splice(index, 1);
    setShipments(shipments.slice());
  };

  return (
    <div>
      {/* <Popups
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        buttonPopup={buttonPopup}
        setButtonPopup={setButtonPopup}
        selectedShipment={selectedShipment}
      /> */}
      <div>
        <Table>
          <thead>
            <tr>
              <th data-field="ordern">ORDERNO</th>
              <th data-field="deliverdate">DELIVERDATE</th>
              <th data-field="customer">
                CUSTOMER
                <span>
                  <img className="sort-image" src="/down-up.png" alt="" />
                </span>
              </th>
              <th data-field="trackingNr">
                TRACKINGNO
                <span>
                  <img className="sort-image" src="/down-up.png" alt="" />
                </span>
              </th>
              <th data-field="status">
                STATUS
                <span>
                  <img className="sort-image" src="/down-up.png" alt="" />
                </span>
              </th>
              <th data-field="consignee">
                CONSIGNEE
                <span>
                  <img className="sort-image" src="/down-up.png" alt="" />
                </span>
              </th>
              <th
                data-field="actions"
                data-formatter="operateFormatter"
                data-events="operateEvents"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment, index) => (
              <tr key={index}>
                <td>{shipment.orderNo}</td>
                <td>{shipment.date}</td>
                <td>{shipment.customer}</td>
                <td>{shipment.trackingNo}</td>
                <td>{shipment.status}</td>
                <td>{shipment.consignee}</td>
                <td>
                  <span>
                    <Link to={"./edit/" + index}>
                      <img
                        onClick={() => handleEditClick(shipment, true)}
                        className="image"
                        src="/edit-button.png"
                        alt="Edit"
                      />
                    </Link>
                  </span>
                  <span>
                    <img
                      onClick={() => deleteShipment(index)}
                      className="image"
                      src="/delete-button.png"
                      alt="Edit"
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Homepage;
