import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWallet,
  faCreditCard,
  faShieldHalved,
  faUserTie
} from '@fortawesome/free-solid-svg-icons'
import IconText from './IconText'
import './Faq.scss'

const Faq = () => {
  const options = [
    {
      icon: faCreditCard,
      text: 'Cartão de crédito'
    },
    {
      icon: faWallet,
      text: 'Conta e abertura'
    },
    {
      icon: faShieldHalved,
      text: 'Token digital'
    },
    {
      icon: faUserTie,
      text: 'Produtos e serviços'
    }
  ]

  const [index, setIndex] = useState(0)

  const handleClick = (key) => {
    setIndex(key)
  }

  useEffect(() => {
    console.log(index)
  }, [index])

  return (
    <section className="faq text-light">
      <Container className="py-5">
        <Row className="text-center">
          <h2 className="faq-title my-5">Dúvidas frequentes</h2>
        </Row>
        <Row className="d-flex align-items-center justify-items-center">
          <Col className="d-lg-none mb-5" xs={12}>
            <Row>
              {options.map(({ icon }, key) => (
                <Col className="d-flex justify-content-center" key={key}>
                  <FontAwesomeIcon
                    icon={icon}
                    size="2x"
                    color={key === index ? '#fff' : '#bbb'}
                    onClick={() => setIndex(key)}
                  />
                </Col>
              ))}
            </Row>
            <Row className=" justify-content-center">
              <p className="mt-5 lead">{options[index].text}</p>
            </Row>
          </Col>

          <Col className="d-none d-lg-block">
            {options.map(({ icon, text }, key) => (
              <IconText
                icon={icon}
                size={3}
                className="faq-clickable mb-4"
                textClassName="lead pt-2"
                color={key === index ? '#fff' : '#bbb'}
                onClick={() => handleClick(key)}
                key={key}
              >
                {text}
              </IconText>
            ))}
          </Col>
          <Col>
            <Accordion defaultActiveKey="0" activeKey={`${index}`}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
                <Accordion.Body className="text-light faq__card">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Nulla porttitor eros ac ex tristique posuere
                </Accordion.Header>
                <Accordion.Body className="faq__card text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Quisque fringilla tincidunt arcu
                </Accordion.Header>
                <Accordion.Body className="faq__card text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Nam elementum lobortis purus a maximus tortor
                </Accordion.Header>
                <Accordion.Body className="faq__card text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Faq
