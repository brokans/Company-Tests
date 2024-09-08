import Table from "react-bootstrap/Table";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Link } from "react-router-dom";
import ShipmentsFromFile from "../data/Shipments.json";

function Homepage() {
  const [shipments, setShipments] = useState(ShipmentsFromFile);

  const deleteShipment = (index) => {
    shipments.splice(index, 1);
    setShipments(shipments.slice());
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
            {shipments.map((shipment, index) => (
              <tr key={shipment.orderNo}>
                <td>{shipment.orderNo}</td>
                <td>{shipment.date}</td>
                <td>{shipment.customer}</td>
                <td>{shipment.trackingNo}</td>
                <td>{shipment.status}</td>
                <td>{shipment.consignee}</td>
                <td>
                  <span>
                    <Link key={index} to={"./edit/" + shipment.orderNo}>
                      <img
                        className="image"
                        src="/edit-button.png"
                        alt="Edit"
                      />
                    </Link>
                  </span>
                  <span>
                    <img
                      onClick={() => deleteShipment(shipment.orderNo)}
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
