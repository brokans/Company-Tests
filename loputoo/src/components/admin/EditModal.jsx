import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import config from "../../data/config.json";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";



function EditModal(props) {
  const { productId } = useParams();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { t } = useTranslation();
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const [idUnique, uIdUnique] = useState(true);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const found = products.find((product) => product.id === Number(productId));
  
  useEffect(() => {
    fetch(config.products)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json || []);
        setLoading(false);
      });
  }, []);

  function edit() {
    if (idRef.current.value === "") {
      toast.error(t("edit-product.edit-product-id"));
      return; // funktsioon ei lähe edasi siit kohast
    }

    if (nameRef.current.value === "") {
      toast.error(t("edit-product.edit-product-name"));
      return;
    }

    //  nameRef.current.value[0].toLowerCase() === nameRef.current.value[0]
    if (nameRef.current.value[0].toUpperCase() !== nameRef.current.value[0]) {
      toast.error(t("edit-product.edit-product-upper"));
      return;
    }

    if (imageRef.current.value.includes(" ")) {
      toast.error(t("edit-product.edit-product-image"));
      return;
    }

    const index = products.findIndex(
      (product) => product.id === Number(productId)
    );
    products[index] = {
      id: Number(idRef.current.value),
      image: imageRef.current.value,
      name: nameRef.current.value,
      price: Number(priceRef.current.value),
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      active: activeRef.current.checked,
    };
    fetch(config.products, {
      method: "PUT",
      body: JSON.stringify(products),
      // Ootab vastuse andmebaasist ära ja siis jätkab koodi lugemist
    })
  }

  if (isLoading === true) {
    return <Spinner />;
  }
  console.log()
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Muuda
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Muuda Toodet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nimi</Form.Label>
              <Form.Control
                type="text"
                // defaultValue={}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
