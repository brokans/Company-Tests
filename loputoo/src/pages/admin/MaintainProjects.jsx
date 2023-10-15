import React, { useEffect, useRef, useState } from "react";
import config from "../../data/config.json";
import { Button, Spinner } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function MaintainProjects() {
  const [projects, setProjects] = useState([]);
  const nameRef = useRef();
  const photoRef = useRef();
  const infoRef = useRef();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => {
        setProjects(json || []);
        setLoading(false);
      });
  }, []);

  function addProject() {
    projects.push({
      name: nameRef.current.value,
      photo: photoRef.current.value,
      info: infoRef.current.value,
    });
    setProjects(projects.slice());

    fetch(config.projects, {
      method: "PUT",
      body: JSON.stringify(projects),
    });
  }

  function deleteProject(index) {
    projects.splice(index, 1);
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
    <div>
      <br /> <br />
      <Form>
        <Form.Group style={{ width: "18rem", margin: "auto" }} className="mb-3">
          <Form.Label>Projekti nimi</Form.Label>
          <Form.Control
            ref={nameRef}
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
            as="textarea"
            type="text"
            rows={5}
          />
        </Form.Group>
        <Button onClick={addProject} variant="primary">
          Lisa
        </Button>
      </Form>
      <br />
      {projects.map((project, index) => (
        <div key={index} className="manage_project">
          <br /> 
          {project.name} <br />
          <hr />
          {project.info} <br />
          <hr />
          <Button
            as={Link}
            to={"/admin/maintain-projects/edit-project/" + index}
          >
            Muuda
          </Button>
          <Button onClick={() => deleteProject(index)} variant="dark ">
            X
          </Button>
          <br /> <br />
        </div> 
      ))}
      <br /> <br />
    </div>
  );
}

export default MaintainProjects;
