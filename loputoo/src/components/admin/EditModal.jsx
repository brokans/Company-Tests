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
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState(
    props.product.category
  );

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    fetch(config.categories)
      .then((res) => res.json())
      .then((json) => {
        setCategories(json || [])
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

    const index = props.products.findIndex(
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
    });
  }

  const categoryNames = new Set(products.map((product) => product.category));

  const checkIdUniqueness = () => {
    if (idRef.current.value === productId) {
      uIdUnique(true);
      return;
    }
    const index = props.products.findIndex(
      (product) => product.id === Number(idRef.current.value)
    );
    if (index === -1) {
      uIdUnique(true);
    } else {
      uIdUnique(false);
    }
  };

  if (isLoading === true) {
    return <Spinner/>
  }

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
              <Form.Label>ID</Form.Label>
              <Form.Control
                className={idUnique === false ? "error" : undefined}
                ref={idRef}
                onChange={checkIdUniqueness}
                type="number"
                defaultValue={props.product.id}
                autoFocus
              />
              <Form.Label>Nimi</Form.Label>
              <Form.Control
                ref={nameRef}
                type="text"
                defaultValue={props.product.name}
                autoFocus
              />
              <Form.Label>Hind</Form.Label>
              <Form.Control
                ref={priceRef}
                type="text"
                defaultValue={props.product.price + "€"}
                autoFocus
              />
              <Form.Label>Pilt</Form.Label>
              <Form.Control
                ref={imageRef}
                type="text"
                defaultValue={props.product.image}
                autoFocus
              />
              <Form.Label>Kirjeldus</Form.Label>
              <Form.Control
                ref={descriptionRef}
                type="textarea"
                defaultValue={props.product.description}
                autoFocus
              />
              <Form.Label>Kategooria</Form.Label> <br />
              <select
                ref={categoryRef}
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {Array.from(categoryNames).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <br />
              <Form.Label>Aktiivsus</Form.Label>
              <br />
              <input
                ref={activeRef}
                defaultChecked={props.product.active}
                type="checkbox"
              />
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
              handleClose();
              edit();
            }}
          >
            Salvesta
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </>
  );
}

export default EditModal;
