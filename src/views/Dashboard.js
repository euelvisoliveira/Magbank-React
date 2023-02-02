import React from 'react'
import { Container, Row, Col, Button, Tab, Tabs, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCircle } from '@fortawesome/free-solid-svg-icons'

import './Dashboard.scss'

const Dashboard = (className = false) => {
  const latest = [
    { date: '22/07', description: 'SAQUE 24H 012345 ', value: '300,00' },
    {
      date: '21/07',
      description: 'SUPERMERCADO 24H 02323626 ',
      value: '275,00'
    },
    { date: '20/07', description: 'NETFLIX 24H 035236 ', value: '30,00' },
    { date: '15/07', description: 'FARMÁCIA 24H 12125 ', value: '350,00' },
    { date: '15/07', description: 'GASOLINA', value: '500,00' }
  ]

  const future = [
    { date: '22/08', description: 'SALÁRIO', value: '3.500,00' },
    {
      date: '21/08',
      description: 'BROTHER',
      value: '100,00'
    },
    { date: '20/09', description: 'DEVCLUB', value: '100,00' },
    { date: '15/08', description: 'FAMÍLIA', value: '350,00' },
    { date: '15/08', description: 'INSTAGRAM', value: '500,00' }
  ]

  return (
    <Container className={`dashboard py-5 ${className ? className : ''}`}>
      <Row>
        <Col xs={12} lg={4}>
          <Row className=" align-content-center mb-5">
            <Col xs={3}>
              <span className="dashboard__user-avatar">
                <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
                <FontAwesomeIcon
                  className="dashboard__user-icon"
                  icon={faUser}
                  size="3x"
                  color="#7c7d7d"
                />
              </span>
            </Col>
            <Col xs={9}>
              <h3>Elvis Ribeiro</h3>
              <p className="text-muted">ag: 1234 c/c: 4321-5</p>
            </Col>
          </Row>
          <div className="d-grid">
            <Button
              className="dashboard__button dashboard__button--active text-left"
              variant="link"
              size="lg"
            >
              Minha Conta
            </Button>
            <Button
              className="dashboard__button text-left"
              variant="link"
              size="lg"
            >
              Pagamentos
            </Button>
            <Button
              className="dashboard__button text-left"
              variant="link"
              size="lg"
            >
              Extrato
            </Button>
          </div>
        </Col>
        <Col xs={12} lg={3} className="mt-lg-5 pt-lg-5">
          <h3 className="my-5">Conta Corrente</h3>
          <h6>Saldo em conta corrente</h6>
          <h4 className="text-success mb-4">R$ 3.500,00</h4>
          <h6>Cheque especial</h6>
          <p className="mb-1">Limite disponivel</p>
          <p className="mb-4">R$ 5.000,00</p>
          <Button variant="secondary">Ver extrato</Button>
        </Col>
        <Col xs={12} lg={5} className="mt-lg-5 pt-lg-5">
          <Tabs defaultActiveKey="latest" className=" mt-5 pt-lg-5">
            <Tab eventKey="latest" title="Últimos Lançamentos">
              <Table striped hover borderless>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {latest.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="future" title="Lançamentos Futuros">
              <Table striped hover>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {future.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}
export default Dashboard
