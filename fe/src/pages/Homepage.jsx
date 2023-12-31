import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Link } from "react-router-dom";
import config from "../data/config.json";
import { Spinner } from "react-bootstrap";

function Homepage() {
  const [shipments, setShipments] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [selectedShipment, setSelectedShipment] = useState([]);
  const [dbShipment, setDbShipment] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.joogidDbUrl)
      .then((res) => res.json())
      .then((json) => {
        setShipments(json || []);
        setDbShipment(json || []);
        setLoading(false);
      });
  }, []);

  const handleEditClick = (shipment) => {
    setButtonPopup(true);
    setSelectedShipment(shipment.id);
  };

  function deleteShipment(shipmentOrderNo) {
    const index = dbShipment.findIndex(
      (shipment) => shipment.id === shipmentOrderNo
    );

    if (index !== -1) {
      dbShipment.splice(index, 1);

      setShipments([...dbShipment]);

      fetch(config.joogidDbUrl, {
        method: "PUT",
        body: JSON.stringify(dbShipment),
      });
    }
  }

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <div>
      <div>
        <Table>
          <thead>
            <tr>
              <th data-field="ordern">ORDERNO</th>
              <th data-field="deliverdate">DELIVERDATE</th>
              <th data-field="customer">
                CUSTOMER
                <span></span>
              </th>
              <th data-field="trackingNr">
                TRACKINGNO
                <span></span>
              </th>
              <th data-field="status">
                STATUS
                <span></span>
              </th>
              <th data-field="consignee">
                CONSIGNEE
                <span></span>
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
            {shipments.map((shipment, orderNo) => (
              <tr key={shipment.id}>
                <td>{shipment.id}</td>
                <td>{shipment.name}</td>
                <td>{shipment.price}</td>
                <td>{shipment.description}</td>
                <td>{shipment.active}</td>
                <td>{shipment.image}</td>
                <td>
                  <span>
                    <Link to={"./edit/" + shipment.id}>
                      <img
                        onClick={() => handleEditClick(shipment)}
                        className="image"
                        src="/edit-button.png"
                        alt="Edit"
                      />
                    </Link>
                  </span>
                  <span>
                    <img
                      onClick={() => deleteShipment(shipment.id)}
                      className="image"
                      src="/delete-button.png"
                      alt="Delete"
                      type="submit"
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
