import React, { useEffect, useRef, useState } from "react";
import config from "../../data/config.json";
import { Button, Spinner } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function MaintainProjects() {
  const [projects, setProjects] = useState([]);
  const [dbProjects, setDbProjects] = useState([]);
  const nameRef = useRef();
  const categoryRef = useRef();
  const photoRefOne = useRef();
  const photoRefTwo = useRef();
  const photoRefThree = useRef();
  const photoRefFour = useRef();
  const photoRefFive = useRef();
  const infoRef = useRef();
  const searchedRef = useRef();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => {
        setProjects(json || []);
        setDbProjects(json || []);
        setLoading(false);
      });
  }, []);

  function addProject() {
    projects.push({
      name: nameRef.current.value,
      category: categoryRef.current.value,
      photoOne: photoRefOne.current.value,
      photoTwo: photoRefTwo.current.value,
      photoThree: photoRefThree.current.value,
      photoFour: photoRefFour.current.value,
      photoFive: photoRefFive.current.value,
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

  function searchFromProducts() {
    const result = dbProjects.filter(
      (project) =>
      project.name
          .toLowerCase()
          .includes(searchedRef.current.value.toLowerCase()) ||
          project.info
          .toLowerCase()
          .includes(searchedRef.current.value.toLowerCase()) ||
          project.category.toString().includes(searchedRef.current.value)
    );
    setProjects(result);
  }

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <div>
      <p>Otsi projekti:</p>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" placeholder="Projekti nimi" /> <br />
      {}
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
        <Form.Group style={{ width: "18rem", margin: "auto" }} className="mb-3">
          <Form.Label>Projekti kategooria</Form.Label>
          <Form.Control
            ref={categoryRef}
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
            ref={photoRefOne}
            className="mb-3"
            type="text"
            placeholder="photo URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
        <Form.Label>Foto 2</Form.Label>
          <Form.Control
            ref={photoRefTwo}
            className="mb-3"
            type="text"
            placeholder="photo URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
        <Form.Label>Foto 3</Form.Label>
          <Form.Control
            ref={photoRefThree}
            className="mb-3"
            type="text"
            placeholder="photo URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
        <Form.Label>Foto 4</Form.Label>
          <Form.Control
            ref={photoRefFour}
            className="mb-3"
            type="text"
            placeholder="photo URL"
          />
        </Form.Group>
        <Form.Group
          style={{ width: "18rem", margin: "auto" }}
          controlId="formBasicEmail"
        >
        <Form.Label>Foto 5</Form.Label>
          <Form.Control
            ref={photoRefFive}
            className="mb-3"
            type="text"
            placeholder="photo URL"
          />
        </Form.Group>

        <Form.Group
          style={{ width: "40rem", margin: "auto" }}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Projekti info</Form.Label>
          <Form.Control ref={infoRef} as="textarea" type="text" rows={7} />
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
          {project.category} <br />
          <hr />
          {project.info} <br />
          <hr />
          <Button
            as={Link}
            to={"/admin/maintain-projects/edit-project/" + index}
          >
            Muuda
          </Button>
          <Button
            onClick={() => deleteProject(index)}
            variant="dark "
            type="submit"
          >
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
