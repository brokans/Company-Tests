import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import config from "../../data/config.json";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function EditModal(props) {
  const [projects, setProjects] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { t } = useTranslation();
  const nameRef = useRef();
  const categoryRef = useRef();
  const imgRefOne = useRef();
  const imgRefTwo = useRef();
  const imgRefThree = useRef();
  const imgRefFour = useRef();
  const imgRefFive = useRef();
  const imgRefSix = useRef();
  const infoRef = useRef();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.products)
      .then((res) => res.json())
      .then((json) => {
        setProjects(json || []);
        setLoading(false);
      });
  }, []);

  function addProject() {
    projects.push({
      name: nameRef.current.value,
      category: categoryRef.current.value,
      photoOne: imgRefOne.current.value,
      photoTwo: imgRefTwo.current.value,
      photoThree: imgRefThree.current.value,
      photoFour: imgRefFour.current.value,
      photoFive: imgRefFive.current.value,
      photoSix: imgRefSix.current.value,
      info: infoRef.current.value
    });
    setProjects(projects.slice());

    fetch(config.projects, {
      method: "PUT",
      body: JSON.stringify(projects),
    });
  }

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Lisa Uus Projekt
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lisa Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form key={props.productId}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Projekti Nimi</Form.Label>
              <Form.Control
                ref={nameRef}
                type="text"
                autoFocus
              />
              <Form.Label>Kategooria</Form.Label>
              <Form.Control
                ref={categoryRef}
                type="text"
                autoFocus
                placeholder="Arhitektuur või Sisearhitektuur"
              />
              <Form.Label>Pilt 1</Form.Label>
              <Form.Control
                ref={imgRefOne}
                type="text"
                autoFocus
                placeholder="photo URL"
              />
              <Form.Label>Pilt 2</Form.Label>
              <Form.Control
                ref={imgRefTwo}
                type="textarea"
                autoFocus
                placeholder="photo URL"
              />
              <Form.Label>Pilt 3</Form.Label>
              <Form.Control
                ref={imgRefTwo}
                type="textarea"
                autoFocus
                placeholder="photo URL"
              />
              <Form.Label>Pilt 4</Form.Label>
              <Form.Control
                ref={imgRefTwo}
                type="textarea"
                autoFocus
                placeholder="photo URL"
              />
              <Form.Label>Pilt 5</Form.Label>
              <Form.Control
                ref={imgRefTwo}
                type="textarea"
                autoFocus
                placeholder="photo URL"
              />
              <Form.Label>Pilt 6</Form.Label>
              <Form.Control
                ref={imgRefTwo}
                type="textarea"
                autoFocus
                placeholder="photo URL"
              />
              <Form.Label>Projekti info</Form.Label>
              <Form.Control
                ref={imgRefTwo}
                type="textarea"
                autoFocus
                placeholder=""
              />
              <br />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sule
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              addProject();
              handleClose();
            }}
          >
            Salvesta
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
