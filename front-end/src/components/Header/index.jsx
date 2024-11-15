import "./styles.css";
import { Link } from "react-router-dom";

import logo from "../../img/Logo.png";
import nome from "../../img/nome.png";
import lupa from "../../img/lupas.png";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="header">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand href="#">
              <img src={logo} alt="logo" height="41" className="me-0" />
            </Navbar.Brand>
            <Navbar.Brand href="#">
              <img src={nome} alt="nome" height="41" className="ms-0" />
            </Navbar.Brand>
          </Link>
          <Navbar.Collapse id="navbarScroll">
            <Form className="div-container-search">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 div-search"
                aria-label="Search"
              />
              <div className="">
                <Button
                  variant="outline-success"
                  className="button-search ms-0 me-0"
                >
                  <img src={lupa} alt="" height="20px" className="ms-0" />
                </Button>
              </div>
            </Form>
          </Navbar.Collapse>
          <Link to="/cadastro">
            <Button variant="primary" size="lg" active>
              Cadastrar
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="secondary" size="lg" active className="ms-2">
              Login
            </Button>
          </Link>
        </Container>
      </Navbar>
      <div className="div-animals">
        <ul className="nav justify-content-evenly">
          <li className="nav-item">
            <a
              className="nav-link text-danger-emphasis"
              aria-current="page"
              href="#"
            >
              Cachorro
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-danger-emphasis" href="#">
              Gato
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-danger-emphasis" href="#">
              Pássaro
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-danger-emphasis" href="#">
              Peixe
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
