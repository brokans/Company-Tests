import React, { useEffect, useRef, useState } from "react";
// import config from "../data/config.json";
import shipmentInfoFromFile from "../data/Shipments.json";
import { useNavigate, useParams } from "react-router-dom";
import Popups from "../components/Popups";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "../components/Popup.css";

function Edit(props) {
  const { shipmentOrderNo } = useParams();
  const orderNoRef = useRef();
  const dateRef = useRef();
  const customerRef = useRef();
  const trackingNoRef = useRef();
  const statusRef = useRef();
  const consigneeRef = useRef();
  const found = shipmentInfoFromFile[shipmentOrderNo];
  const navigate = useNavigate();
  const [buttonPopup, setButtonPopup] = useState(false);

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

  useEffect(() => {
    setButtonPopup(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
      <div>
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

//   return props.trigger ? (
//     <div className="popup">
//       <div className="popup-inner">
//         <Form>
//           <Row className="align-items-center mb-3">
//             <Col m="auto">
//               <Form.Label htmlFor="inlineFormInput" visuallyHidden>
//                 Name
//               </Form.Label>
//               <Form.Control
//                 ref={orderNoRef}
//                 className="mb-2 bg-light"
//                 id="inlineFormInput"
//                 defaultValue={found.orderNo}
//               />
//             </Col>
//             <Col m="auto">
//               <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
//                 Username
//               </Form.Label>
//               <InputGroup className="mb-2">
//                 <Form.Control
//                   ref={dateRef}
//                   className="bg-light"
//                   id="inlineFormInputGroup"
//                   defaultValue={found.date}
//                 />
//               </InputGroup>
//             </Col>
//             <Col xs="auto"></Col>
//           </Row>

//           <Row className="align-items-center mb-3 ">
//             <Col m="auto">
//               <Form.Label htmlFor="inlineFormInput" visuallyHidden>
//                 Name
//               </Form.Label>
//               <Form.Control
//                 ref={customerRef}
//                 className="mb-2 bg-light"
//                 id="inlineFormInput"
//                 defaultValue={found.customer}
//               />
//             </Col>
//             <Col m="auto">
//               <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
//                 Username
//               </Form.Label>
//               <InputGroup className="mb-2">
//                 <Form.Control
//                   ref={trackingNoRef}
//                   className="bg-light"
//                   id="inlineFormInputGroup"
//                   defaultValue={found.trackingNo}
//                 />
//               </InputGroup>
//             </Col>
//             <Col xs="auto"></Col>
//           </Row>
//           <Row className="align-items-center mb-3">
//             <Col m="auto">
//               <Form.Label htmlFor="inlineFormInput" visuallyHidden>
//                 Name
//               </Form.Label>
//               <Form.Control
//                 ref={statusRef}
//                 className="mb-2 bg-light"
//                 id="inlineFormInput"
//                 defaultValue={found.status}
//               />
//             </Col>
//             <Col m="auto">
//               <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
//                 Username
//               </Form.Label>
//               <InputGroup className="mb-2">
//                 <Form.Control
//                   ref={consigneeRef}
//                   className="bg-light"
//                   id="inlineFormInputGroup"
//                   defaultValue={found.consignee}
//                 />
//               </InputGroup>
//             </Col>
//             <Col xs="auto"></Col>
//           </Row>
//           <Button onClick={edit} type="submit" className="mb-2">
//             Edit
//           </Button>
//         </Form>
//         {/* <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button> */}
//         {props.children}
//       </div>
//     </div>
//   ) : (
//     ""
//   );
// }

// export default Edit;
