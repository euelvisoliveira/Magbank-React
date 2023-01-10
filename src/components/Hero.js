import React from 'react'
import { Row, Col, Image, Button, Card } from 'react-bootstrap'
import './Hero.scss'
import logoDesktop from '../assets/logo__magic-pay.png'
import logo from '../assets/logo__magic-pay--mobile.png'

const Hero = () => (
  <Card
    className="text-center text-light hero "
    fluid
  >
    <Row className="my-5">
      <Col lg className="text-lg-right mt-5">
        <Image className="d-lg-none" src={logo} />
        <Image className="d-none d-lg-inline-block" src={logoDesktop} />
      </Col>
      <Col lg className="text-lg-start my-5">
        <p>Pague suas contas pelo nosso APP</p>
        <Button variant="outline-light">Abra sua conta</Button>
      </Col>
    </Row>
  </Card>
)

export default Hero
