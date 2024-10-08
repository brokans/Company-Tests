import React, { useRef } from "react";
import Cards from "../../components/home/Cards";
import Footer from "../../components/home/Footer";
import "../../App.css";
import Carouselles from "../../components/home/Carouselles";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function HomePage() {
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
      <div className="homePage-img-container">
        <Carouselles className="homepage-carousel" />
        <br /> <br />
        <h1>Meie loome teekonna eesmärkideni</h1> <br /> <br />
        <Cards />
        <br /> <br />
        <hr />
        <div className="homepage-objects">
          <a className="all-objects" href="/portfolio">
            <h1>Vaata kõiki objekte</h1>
          </a>
        </div>
        <div className="services">
          <h2>TEENUSED</h2>
          <p>Arhitektuurne projekteerimine</p>
          <p>Sisearhitektuurne projekteerimine</p>
          <p>3D visualiseerimine ja mudeldamine</p>
          <p>Mood boardide loomine</p>
          <p>Arhitektuurne analüüs äriideedele</p>
        </div>
        <h2>Võta ühendust!</h2> <br /> <br />
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
            <Form.Control as="textarea" rows={5} name="message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Saada
          </Button>
        </Form>
        <br /> <br />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
