import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import config from "../../data/config.json";
import Form from "react-bootstrap/Form";
import { Button, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

function EditProject() {
  const { index } = useParams();
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const nameRef = useRef();
  const categoryRef = useRef();
  const imgRefOne = useRef();
  const imgRefTwo = useRef();
  const imgRefThree = useRef();
  const imgRefFour = useRef();
  const imgRefFive = useRef();
  const imgRefSix = useRef();
  const infoRef = useRef();

  const navigate = useNavigate();
  const found = projects[index];

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => {
        setProjects(json || []);
        setLoading(false);
      });
  }, []);

  function edit() {
    if (nameRef.current.value === "") {
      toast.error("Palun sisesta projekti nimi.");
      return; // funktsioon ei lähe edasi siit kohast
    }

    if (infoRef.current.value === "") {
      toast.error("Palun sisesta info.");
      return;
    }

    //  nameRef.current.value[0].toLowerCase() === nameRef.current.value[0]
    if (nameRef.current.value[0].toUpperCase() !== nameRef.current.value[0]) {
      toast.error("Palun sisesta projekti nimi suure algustähega.");
      return;
    }

    projects[index] = {
      name: nameRef.current.value,
      category: categoryRef.current.value,
      info: infoRef.current.value,
      imgOne: imgRefOne.current.value,
      imgTwo: imgRefTwo.current.value,
      imgThree: imgRefThree.current.value,
      imgFour: imgRefFour.current.value,
      imgFive: imgRefFive.current.value,
      imgSix: imgRefSix.current.value
    };
    fetch(config.projects, {
      method: "PUT",
      body: JSON.stringify(projects),
      // Ootab vastuse andmebaasist ära ja siis jätkab koodi lugemist
    }).then(() => navigate("/admin/maintain-projects"));
  }

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <div>
      <Form>
        <Form.Group style={{ width: "18rem", margin: "auto" }} className="mb-3">
          <Form.Label>Projekti nimi</Form.Label>
          <Form.Control
            ref={nameRef}
            defaultValue={found.name}
            type="text"
            placeholder="Nimi"
            name="from_name"
          />
        </Form.Group>
        <Form.Group style={{ width: "18rem", margin: "auto" }} className="mb-3">
          <Form.Label>Projekti kategooria</Form.Label>
          <Form.Control
            ref={categoryRef}
            defaultValue={found.category}
            type="text"
            placeholder="Kategooria"
            name="from_name"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Label>Foto 1</Form.Label>
          <Form.Control
            ref={imgRefOne}
            defaultValue={found.imgOne}
            className="mb-3"
            type="text"
            placeholder="img URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Label>Foto 2</Form.Label>
          <Form.Control
            ref={imgRefTwo}
            defaultValue={found.imgTwo}
            className="mb-3"
            type="text"
            placeholder="img URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Label>Foto 3</Form.Label>
          <Form.Control
            ref={imgRefThree}
            defaultValue={found.imgThree}
            className="mb-3"
            type="text"
            placeholder="img URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Label>Foto 4</Form.Label>
          <Form.Control
            ref={imgRefFour}
            defaultValue={found.imgFour}
            className="mb-3"
            type="text"
            placeholder="img URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Label>Foto 5</Form.Label>
          <Form.Control
            ref={imgRefFive}
            defaultValue={found.imgFive}
            className="mb-3"
            type="text"
            placeholder="img URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Label>Foto 6</Form.Label>
          <Form.Control
            ref={imgRefSix}
            defaultValue={found.imgSix}
            className="mb-3"
            type="text"
            placeholder="img URL"
          />
        </Form.Group>

        <Form.Group
          style={{ width: "40rem", margin: "auto"  }}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Projekti info</Form.Label>
          <Form.Control
            ref={infoRef}
            defaultValue={found.info}
            as="textarea"
            type="text"
            rows={7}
          />
        </Form.Group>
        <Button onClick={edit} variant="primary">
          Muuda
        </Button>
      </Form>
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  );
}

export default EditProject;
