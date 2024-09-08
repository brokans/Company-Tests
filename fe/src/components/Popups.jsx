import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import "./Popup.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import "../components/Popup.css";
import ShipmentsFromFile from "../data/Shipments.json";

function Popups(props) {
  const { shipmentOrderNo } = useParams();
  const orderNoRef = useRef();
  const dateRef = useRef();
  const customerRef = useRef();
  const trackingNoRef = useRef();
  const statusRef = useRef();
  const consigneeRef = useRef();
  const [shipments, setShipments] = useState(ShipmentsFromFile);
  const navigate = useNavigate();

  const found = ShipmentsFromFile.find(
    (shipment) => shipment.orderNo === shipmentOrderNo);

  const edit = () => {
    const index = shipments.findIndex((shipment) => shipment.orderNo === shipmentOrderNo)
    console.log("index:" + index)
    
    shipments[index] = {
      orderNo: orderNoRef.current.value,
      date: dateRef.current.value,
      customer: customerRef.current.value,
      trackingNo: trackingNoRef.current.value,
      status: statusRef.current.value,
      consignee: consigneeRef.current.value,
    };
    navigate("/");
  }

  return props.trigger ? (
    <div className="popup">
      <div className="blue-box">
        <div></div>
      </div>
      <div className="popup-inner">
        <hr />
        <p className="details">SHIPMENT DETAILS</p>
        <Form key={shipmentOrderNo}>
          <Row className="align-items-center mb-3">
            <Col m="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Name
              </Form.Label>
              <p>orderNo</p>
              <Form.Control
                ref={orderNoRef}
                className="mb-2 bg-light text-secondary"
                id="inlineFormInput"
                defaultValue={found.orderNo}
              />
            </Col>
            <Col m="auto">
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Username
              </Form.Label>
              <p>date</p>
              <InputGroup className="mb-2">
                <Form.Control
                  ref={dateRef}
                  className="bg-light text-secondary"
                  id="inlineFormInputGroup"
                  defaultValue={found.date}
                />
              </InputGroup>
            </Col>
            <Col xs="auto"></Col>
          </Row>

          <Row className="align-items-center mb-3 ">
            <Col m="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Name
              </Form.Label>
              <p>customer</p>
              <Form.Control
                ref={customerRef}
                className="mb-2 bg-light text-secondary"
                id="inlineFormInput"
                defaultValue={found.customer}
              />
            </Col>
            <Col m="auto">
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Username
              </Form.Label>
              <p>trackingNo</p>
              <InputGroup className="mb-2">
                <Form.Control
                  ref={trackingNoRef}
                  className="bg-light text-secondary"
                  id="inlineFormInputGroup"
                  defaultValue={found.trackingNo}
                />
              </InputGroup>
            </Col>
            <Col xs="auto"></Col>
          </Row>
          <Row className="align-items-center mb-3">
            <Col m="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Name
              </Form.Label>
              <p>status</p>
              <Form.Control
                ref={statusRef}
                className="mb-2 bg-light text-secondary"
                id="inlineFormInput"
                defaultValue={found.status}
              />
            </Col>
            <Col m="auto">
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Username
              </Form.Label>
              <p>consignee</p>
              <InputGroup className="mb-2">
                <Form.Control
                  ref={consigneeRef}
                  className="bg-light text-secondary"
                  id="inlineFormInputGroup"
                  defaultValue={found.consignee}
                />
              </InputGroup>
            </Col>
            <Col xs="auto"></Col>
          </Row>
          <Button onClick={edit} className="mb-2">
            Update
          </Button>
        </Form>
        <hr className="hr-bottom" />
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popups;
