import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import config from "../../data/config.json";
import { useParams } from "react-router-dom";

function HaldaKursuseid() {
  const { productId } = useParams();
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const [idUnique, uIdUnique] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(config.courses)
      .then((res) => res.json())
      .then((json) => setProducts(json || []));

    fetch(config.courses)
      .then((res) => res.json())
  }, []);

  const add = () => {
    if (idRef.current.value === "") {
      setMessage("Palun sisesta ID number.");
      return;
    } else if (nameRef.current.value.includes("!")) {
      setMessage("Palun sisesta nimi ilma hüüumärgita!");
    } else if (nameRef.current.value === "") {
      setMessage("Palun sisesta toote nimi.");
    } else if (
      nameRef.current.value[0].toLowerCase() === nameRef.current.value[0]
    ) {
      setMessage("Palun sisesta toote nimi suure algustöhega.");
    } else {
      setMessage("Toode lisatud" + idRef.current.value);
      products.push({
        id: Number(idRef.current.value),
        image: imageRef.current.value,
        name: nameRef.current.value,
        price: Number(priceRef.current.value),
        description: descriptionRef.current.value,
        active: activeRef.current.checked,
      });
      imageRef.current.value = "";
      idRef.current.value = "";
      nameRef.current.value = "";
      priceRef.current.value = "";
      descriptionRef.current.value = "";
      activeRef.current.value = false;

      fetch(config.courses, {
        method: "PUT",
        body: JSON.stringify(products),
      });
    }
  };

  const checkIdUniqueness = () => {
    if (idRef.current.value === productId) {
      uIdUnique(true);
      return;
    }
    const index = products.findIndex(
      (product) => product.id === Number(idRef.current.value)
    );
    if (index === -1) {
      uIdUnique(true);
    } else {
      uIdUnique(false);
    }
  };

  return (
    <>
      {message}
      <Button variant="primary" onClick={handleShow}>
        Lisa Kursus
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kursuse info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID</Form.Label>
              <Form.Control
                className={idUnique === false ? "error" : undefined}
                ref={idRef}
                onChange={checkIdUniqueness}
                type="number"
                autoFocus
              />
              <Form.Label>Nimi</Form.Label>
              <Form.Control ref={nameRef} type="text" autoFocus />
              <Form.Label>Hind</Form.Label>
              <Form.Control ref={priceRef} type="text" autoFocus />
              <Form.Label>Pilt</Form.Label>
              <Form.Control ref={imageRef} type="text" autoFocus />
              <Form.Label>Kirjeldus</Form.Label>
              <Form.Control ref={descriptionRef} type="textarea" autoFocus />
              <Form.Label>Aktiivsus</Form.Label>
              <br />
              <input ref={activeRef} type="checkbox" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              add();
            }}
          >
            Lisa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default HaldaKursuseid