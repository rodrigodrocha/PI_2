import "./style.css";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Component } from "react";
import Header from "../../components/Header";


export class Login extends Component {
  render() {
    return (
      <>
      <Header />
      <section className="container login">
        <nav className="d-flex justify-content-center cadastroLogin">
          <button type="button" className="btn ">
            Cadastro
          </button>
          <button type="button" className="btn ms-5 border-bottom">
            <h5>Login</h5>
          </button>
        </nav>
        <h1 className="titulo">Login</h1>
        <Form className="formulario justify-content-center">
        <Row className="mb-12 row" id="Email">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label className="texto">Email</Form.Label>
              <Form.Control required type="text" placeholder="email" />
            </Form.Group>
          </Row>
        <Row className="mb-12 row" id="Senha">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label className="texto">Senha</Form.Label>
              <Form.Control required type="password" placeholder="Senha" />
            </Form.Group>
          </Row>
          <Button type="submit" className="button">Cadastrar</Button>
        </Form>
      </section>
      </>
    );
  }
}
