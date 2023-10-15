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
  const photoRef = useRef();
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

    if (photoRef.current.value.includes(" ")) {
      toast.error("Palun sisesta URL ilma tühikuteta.");
      return;
    }

    projects[index] = {
      name: nameRef.current.value,
      info: infoRef.current.value,
      photo: photoRef.current.value,
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
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
          <Form.Label>Foto</Form.Label>
          <Form.Control
            ref={photoRef}
            defaultValue={found.photo}
            className="mb-3"
            type="text"
            placeholder="photo URL"
          />
        </Form.Group>

        <Form.Group
          style={{ width: "28rem", margin: "auto" }}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Projekti info</Form.Label>
          <Form.Control
            ref={infoRef}
            defaultValue={found.info}
            as="textarea"
            type="text"
            rows={5}
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
