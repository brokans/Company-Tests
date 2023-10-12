import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zoynupw",
        "template_akogdbi",
        form.current,
        "PXhCZSpIJP4mL_Cfv"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group style={{ width: "18rem", margin: "auto" }} className="mb-3">
        <Form.Label>Nimi</Form.Label>
        <Form.Control type="text" placeholder="Nimi" name="from_name" />
      </Form.Group>
      <Form.Group
        style={{ width: "18rem", margin: "auto" }}
        controlId="formBasicEmail"
      >
        <Form.Label>Emaili aadress</Form.Label>
        <Form.Control
          className="mb-3"
          type="email"
          placeholder="Email"
          name="from_email"
        />
      </Form.Group>

      <Form.Group
        style={{ width: "28rem", margin: "auto" }}
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Räägi oma ideest!</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Saada
      </Button>
    </Form>
  );
};
