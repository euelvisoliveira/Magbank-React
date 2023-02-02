import React from 'react'
import {
  Navbar,
  Nav,
  Container,
  ButtonGroup,
  Button,
  NavDropdown
} from 'react-bootstrap'
import './Navbar.scss'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navigation = ({ handleCreateAcc }) => (
  <Navbar expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="#">
        <Link to="/">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="Magbank logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
          <Nav.Link href="#cartao">Cartão</Nav.Link>
          <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
          <Nav.Link href="#FAQ">FAQ</Nav.Link>
        </Nav>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-light">
            <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/login">Pessoa Física</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link>Pessoa Jurítica</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Button>
          <Button variant="outline-light" onClick={handleCreateAcc}>
            Abre sua conta
          </Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navigation
