import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../../components/home/Footer";

function Services() {
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
    <div>
      <div className="services-text">
        <h4>Arhitektuurne projekteerimine</h4>
        <h4>Sisearhitektuurne projekteerimine</h4>
        <h4>3D visualiseerimine ja mudeldamine</h4>
        <h4>Mood boardide loomine</h4>
        <h4>Arhitektuurne analüüs äriideedele</h4>
      </div>
      <div className="email-form">
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group
            style={{ width: "18rem", margin: "auto" }}
            className="mb-3"
          >
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
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Services;
