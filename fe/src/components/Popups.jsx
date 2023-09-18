// import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useRef } from "react";
import "./Popup.css";
import shipmentInfoFromFile from "../data/Shipments.json";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "../components/Popup.css";

// Proovida siin seadistada edit nuppu või homepage'l, delete seal töötab
function Popups(props) {
  const { shipmentOrderNo } = useParams();
  const orderNoRef = useRef();
  const dateRef = useRef();
  const customerRef = useRef();
  const trackingNoRef = useRef();
  const statusRef = useRef();
  const consigneeRef = useRef();
  const found = shipmentInfoFromFile[shipmentOrderNo];
  const navigate = useNavigate();

  const edit = () => {
    shipmentInfoFromFile[shipmentOrderNo] = {
      orderNo: orderNoRef.current.value,
      date: dateRef.current.value,
      customer: customerRef.current.value,
      trackingNo: trackingNoRef.current.value,
      status: statusRef.current.value,
      consignee: consigneeRef.current.value,
    };
    navigate("/");
  };
  return props.trigger ? (
    <div className="popup">
      <div className="blue-box"></div>
      <div className="popup-inner">
        <p>SHIPMENT DETAILS</p>
        <Form>
          <Row className="align-items-center mb-3">
            <Col m="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Name
              </Form.Label>
              <p>orderNo</p>
              <Form.Control
                ref={orderNoRef}
                className="mb-2 bg-light"
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
                  className="bg-light"
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
                className="mb-2 bg-light"
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
                  className="bg-light"
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
                className="mb-2 bg-light"
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
                  className="bg-light"
                  id="inlineFormInputGroup"
                  defaultValue={found.consignee}
                />
              </InputGroup>
            </Col>
            <Col xs="auto"></Col>
          </Row>
          <Button onClick={edit} type="submit" className="mb-2">
            Edit
          </Button>
        </Form>
        {/* <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button> */}
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popups;
