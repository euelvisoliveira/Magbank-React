import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/MAGbank-footer.png'
import logoApple from '../assets/app-store.png'
import logoGoogle from '../assets/google-play.png'

import './Footer.scss'

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="text-center py-5">
        <Col xs={12} lg={6} className="text-lg-left mb-5">
          <Image src={logo} className="mb-mx-5" />
        </Col>
        <Col xs={12} lg={4} className="mb-5">
          <Image src={logoApple} />
          <Image src={logoGoogle} className="mx-3" />
        </Col>

        <Col
          xs={12}
          lg={2}
          className="d-flex align-items-center justify-content-center"
        >
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size="2x"
            color="#7c7c7c"
            className="mx-2"
          />
          <FontAwesomeIcon icon={faTwitter} size="2x" color="#7c7c7c" />
          <FontAwesomeIcon
            icon={faYoutube}
            size="2x"
            color="#7c7c7c"
            className="mx-2"
          />
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
