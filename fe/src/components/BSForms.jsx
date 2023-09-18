import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
// import { useNavigate, useParams } from "react-router-dom";
// import config from "../data/config.json";
import { useParams } from "react-router-dom";
import shipmentInfoFromFile from "../data/Shipments.json";

// kui popups's ei saa siis proovida props'ga lahendada, vbla toimib paremini
function BSForms({ selectedShipment, setSelectedShipmens }) {
  const { index } = useParams();
  const orderNoRef = useRef();
  const dateRef = useRef();
  const customerRef = useRef();
  const trackingNoRef = useRef();
  const statusRef = useRef();
  const consigneeRef = useRef();
  const found = selectedShipment;

  // const edit = () => {
  //   shipmentInfoFromFile[shipmentOrderNo] = {
  //     orderNo: orderNoRef.current.value,
  //     date: dateRef.current.value,
  //     customer: customerRef.current.value,
  //     trackingNo: trackingNoRef.current.value,
  //     status: statusRef.current.value,
  //     consignee: consigneeRef.current.value
  //   };
  // }
  // useEffect(() => {
  //   fetch(shipmentInfoFromFile)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setShipments(json || []);
  //     });
  // }, [setShipments]);

  const edit = () => {
    shipmentInfoFromFile[index] = {
      "orderNo": orderNoRef.current.value,
      "date": dateRef.current.value,
      "customer": customerRef.current.value,
      "trackingNo": trackingNoRef.current.value,
      "status": statusRef.current.value,
      "consignee": consigneeRef.current.value,
    };
  };
  // useEffect(() => {
  //   if (selectedShipment) {
  //     orderNoRef.current.value = selectedShipment.orderNo;
  //     dateRef.current.value = selectedShipment.date;
  //     customerRef.current.value = selectedShipment.customer;
  //     trackingNoRef.current.value = selectedShipment.trackingNo;
  //     statusRef.current.value = selectedShipment.status;
  //     consigneeRef.current.value = selectedShipment.consignee;
  //   }
  // }, [selectedShipment]);

  // function edit() {
  //   selectedShipment[index] = {
  //     orderNo: orderNoRef.current.value,
  //     date: dateRef.current.value,
  //     customer: customerRef.current.value,
  //     trackingNo: trackingNoRef.current.value,
  //     status: statusRef.current.value,
  //     consignee: consigneeRef.current.value,
  //   };
  // fetch(shipmentInfoFromFile, {
  //   method: "PUT",
  //   body: JSON.stringify(selectedShipment)
  // })
  // }

  return (
    <div>
      <Form>
        <Row className="align-items-center mb-3">
          <Col m="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Name
            </Form.Label>
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
    </div>
  );
}

export default BSForms;
