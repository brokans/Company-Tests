import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import config from "../../data/config.json";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";

function AddProductModal(props) {
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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.products)
      .then((res) => res.json())
      .then((json) => setProducts(json || []));

    fetch(config.categories)
      .then((res) => res.json())
      .then((json) => setCategories(json || []));
  }, []);

  const add = () => {
    if (idRef.current.value === "") {
      // toasti tõlkimiseks tavalised sulud
      toast.error(t("enter-product-id"));
      return;
    } else if (nameRef.current.value.includes("!")) {
      toast.warning(t("no-exclamation"));
    } else if (nameRef.current.value === "") {
      toast.error(t("enter-product-name"));
    } else if (
      nameRef.current.value[0].toLowerCase() === nameRef.current.value[0]
    ) {
      toast.error(t("enter-product-upper"));
    } else {
      toast.success(t("product-entered") + idRef.current.value);
      products.push({
        id: Number(idRef.current.value),
        image: imageRef.current.value,
        name: nameRef.current.value,
        price: Number(priceRef.current.value),
        description: descriptionRef.current.value,
        // kui tüüp muutub tuleb siin ka muuta
        category: categoryRef.current.value,
        active: activeRef.current.checked,
      });
      imageRef.current.value = "";
      idRef.current.value = "";
      nameRef.current.value = "";
      priceRef.current.value = "";
      descriptionRef.current.value = "";
      categoryRef.current.value = "";
      activeRef.current.value = false;

      fetch(config.products, {
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

  console.log();
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Lisa Toode
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Muuda Toodet</Modal.Title>
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
              <Form.Control
                ref={nameRef}
                type="text"
                autoFocus
              />
              <Form.Label>Hind</Form.Label>
              <Form.Control
                ref={priceRef}
                type="text"
                autoFocus
              />
              <Form.Label>Pilt</Form.Label>
              <Form.Control
                ref={imageRef}
                type="text"
                autoFocus
              />
              <Form.Label>Kirjeldus</Form.Label>
              <Form.Control
                ref={descriptionRef}
                type="textarea"
                autoFocus
              />
              <Form.Label>Kategooria</Form.Label> <br />
              <select ref={categoryRef}>
                {categories.map((category) => (
                  <option key={category.name} value="">
                    {category.name}
                  </option>
                ))}
              </select> <br /> <br />
              <Form.Label>Aktiivsus</Form.Label>
              <br />
              <input
                ref={activeRef}
                type="checkbox"
              />
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
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </>
  );
}

export default AddProductModal;
