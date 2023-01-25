import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {
  faMobileScreenButton,
  faMobileButton,
  faGlobe,
  faShieldHalved
} from '@fortawesome/free-solid-svg-icons'
import IconText from './IconText'
import './Institutional.scss'

const Institutional = ({ onClick }) => (
  <section className="institutional text-light py-5">
    <Container>
      <Row>
        <Col xs={12} lg={5} />
        <Col xs={12} lg={7}>
          <h2 className="institutional-title">Já nascemos digital</h2>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim.
            Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et
            porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque.
            Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat
            ultrices. Proin purus ante, congue vel arcu ac, porta condimentum
            mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim
            nec diam.
          </p>
          <IconText
            className="mb-4"
            icon={faMobileScreenButton}
            size={2}
            color="#fff"
            textClassName="h5"
          >
            Sem fila e sem burocracia
          </IconText>
          <IconText
            className="mb-4"
            icon={faMobileButton}
            size={2}
            color="#fff"
            textClassName="h5"
          >
            Simples e prático
          </IconText>
          <IconText
            className="mb-4"
            icon={faGlobe}
            size={2}
            color="#fff"
            textClassName="h5"
          >
            Abertura de conta 100% online
          </IconText>
          <IconText
            className="mb-4"
            icon={faShieldHalved}
            size={2}
            color="#fff"
            textClassName="h5"
          >
            Transações mais seguras
          </IconText>
          <Button className="mt-5" variant="outline-light" onClick={onClick}>
            Abra sua conta
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Institutional
