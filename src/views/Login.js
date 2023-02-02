import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Button, Image } from 'react-bootstrap'
import logo from '../assets/MAGbank.svg'

import './Login.scss'

const Login = () => (
  <section className="login">
    <div className="login__container">
      <Row>
        <Col className="text-center text-light">
          <Image src={logo} className="mb-5" />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label className="lead">
                <bold>Número da Conta</bold>
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="lead">
                <bold>Senha</bold>
              </Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Link to="/dashboard">
              <Button variant="success" type="submit" className="mt-3">
                Criar Conta
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  </section>
)

export default Login
