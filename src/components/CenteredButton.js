import React from 'react'
import { Container, Button } from 'react-bootstrap'

const CenteredButton = ({ children }) => (
  <Container className="d-flex justify-content-center">
    <Button className="my-5 " variant="success" size="lg">
      {children}
    </Button>
  </Container>
)

export default CenteredButton
