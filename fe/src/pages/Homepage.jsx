import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import "../App.css";
import config from "../data/config.json";
// import shipmentInfoFromFile from "../data/Shipments.json"

function Homepage() {
  const [shipments, setShipments] = useState([]);
  // const [dbShipments, setDbShipments] = useState([]);
  // const searchedRef = useRef();

  // const [sorted, setSorted] = useState(false);

  useEffect(() => {
    fetch(config.joogidDbUrl)
      .then((res) => res.json())
      .then((json) => setShipments(json || []));
  }, []);

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
            {shipments.map((shipment) => (
              <tr>
                <td>{shipment.name}</td>
                <td>{shipment.category}</td>
                <td>{shipment.id}</td>
                <td>{shipment.trackingNo}</td>
                <td>{shipment.status}</td>
                <td>{shipment.consignee}</td>
                <td>
                  <span>
                    <img className="image" src="/edit-button.png" alt="Edit" />
                  </span>
                  <span>
                    <img
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
