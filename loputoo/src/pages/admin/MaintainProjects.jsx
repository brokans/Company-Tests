import React, { useEffect, useRef, useState } from 'react'
import config from "../../data/config.json";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function HaldaProjekte() {
  const [projects, setProjects] = useState([]);
  const nameRef = useRef();
  const photoRef = useRef();
  const infoRef = useRef();

  
  useEffect(() => {
    fetch(config.projects)
      .then((res) => res.json())
      .then((json) => setProjects(json || []));
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
    fetch(config.shops, {
      method: "PUT",
      body: JSON.stringify(projects),
    });
  }
  

  return (
    <div>
      <label htmlFor="">Projekti nimi:</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label htmlFor="">Foto:</label> <br />
      <input ref={photoRef} type="text" />
      <br />
      <label htmlFor="">Info:</label> <br />
      <textarea ref={infoRef} type="textarea" /> <br /> <br />
      <Form>
      <Form.Group style={{ width: "18rem", margin: "auto" }} className="mb-3">
        <Form.Label>Projekti nimi</Form.Label>
        <Form.Control ref={nameRef} type="text" placeholder="Nimi" name="from_name" />
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
        <Form.Control ref={infoRef} as="textarea" type='text' rows={5} />
      </Form.Group>
      <Button onClick={addProject} variant="primary" type="submit">
        Lisa
      </Button>
    </Form>
    </div>
  )
}

export default HaldaProjekte