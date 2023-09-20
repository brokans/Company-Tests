import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Popup.css";
// import shipmentInfoFromFile from "../data/Shipments.json";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Spinner } from "react-bootstrap";

import "../components/Popup.css";
import config from "../data/config.json";

function Popups(props) {
  const { shipmentOrderNo } = useParams();
  const orderNoRef = useRef();
  const dateRef = useRef();
  const customerRef = useRef();
  const trackingNoRef = useRef();
  const statusRef = useRef();
  const consigneeRef = useRef();
  const [shipments, setShipments] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // const found = shipmentInfoFromFile[shipmentOrderNo];
  const found = shipments.find(
    (shipment) => shipment.id === Number(shipmentOrderNo)
  );
  const navigate = useNavigate();

  console.log(shipments);
  useEffect(() => {
    fetch(config.joogidDbUrl)
      .then((res) => res.json())
      .then((json) => {
        setShipments(json.slice() || []);
        setLoading(false);
      });
  }, []);

  function edit() {
    const index = shipments.findIndex(
      (shipment) => shipment.id === Number(shipmentOrderNo)
    );
    shipments[index] = {
      id: orderNoRef.current.value,
      name: dateRef.current.value,
      price: customerRef.current.value,
      description: trackingNoRef.current.value,
      active: statusRef.current.value,
      image: consigneeRef.current.value,
    };
    fetch(config.joogidDbUrl, {
      method: "PUT",
      body: JSON.stringify(shipments),
    });
    navigate("/");
  }

  if (isLoading === true) {
    return <Spinner />;
  }
  return props.trigger ? (
    <div className="popup">
      <div className="blue-box">
        <div></div>
      </div>
      <div className="popup-inner">
        <hr />
        <p className="details">SHIPMENT DETAILS</p>
        <Form key={props.shipmentOrderNo}>
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
                defaultValue={found.id}
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
                  defaultValue={found.name}
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
                defaultValue={found.price}
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
                  defaultValue={found.description}
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
                defaultValue={found.active}
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
                  defaultValue={found.image}
                />
              </InputGroup>
            </Col>
            <Col xs="auto"></Col>
          </Row>
          <Button onClick={edit} type="submit" className="mb-2">
            Update
          </Button>
        </Form>
        <hr className="hr-bottom" />
        {/* <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button> */}
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popups;
