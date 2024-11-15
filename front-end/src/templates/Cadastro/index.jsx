import "./style.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import { Component } from "react";
import Header from './../../components/Header/index';

export class Cadastro extends Component {
  render() {
    return (
      <>
      <Header /> 
      <section className="container Cadastro">
        <nav className="d-flex justify-content-center cadastroLogin">
          <button type="button" className="btn border-bottom" href="../Login/index.jsx">
            <h5>Cadastro</h5>
          </button>
          <button type="button" className="btn ms-5">
            Login
          </button>
        </nav>
        <h1 className="titulo">Cadastro</h1>
        <Form noValidate validated="" onSubmit="" className="formulario">
          <Row className="mb-3" id="NomeSobrenome">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Nome</Form.Label>
              <Form.Control required type="text" placeholder="Nome" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Sobrenome</Form.Label>
              <Form.Control required type="text" placeholder="Sobrenome" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3" id="EstadoCidadeCEP">
            <Form.Group as={Col} md="3" controlId="Estado">
              <Form.Label>Estado</Form.Label>
              <Form.Control type="text" placeholder="Estado" required />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="Cidade">
              <Form.Label>Cidade</Form.Label>
              <Form.Control type="text" placeholder="Cidade" required />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="CEP">
              <Form.Label>CEP</Form.Label>
              <Form.Control type="text" placeholder="CEP" required />
            </Form.Group>
          </Row>
          <Row className="mb-3" id="RuaNumeroComplemento">
            <Form.Group as={Col} md="6" controlId="Rua">
              <Form.Label>Rua</Form.Label>
              <Form.Control type="text" placeholder="Rua" required />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="Numero">
              <Form.Label>Número</Form.Label>
              <Form.Control type="text" placeholder="Número" required />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="Complemento">
              <Form.Label>Complemento</Form.Label>
              <Form.Control type="text" placeholder="Complemento" required />
            </Form.Group>
          </Row>
          <Row className="mb-3" id="SenhaConfirmaSenha">
            <Form.Group as={Col} md="6" controlId="Senha">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Senha" required />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="ConfirmaSenha">
              <Form.Label>Confirmar Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirmar Senha"
                required
              />
            </Form.Group>
          </Row>
          <Button type="submit" className="button">Cadastrar</Button>
        </Form>
      </section>
      </>
    );
  }
}
