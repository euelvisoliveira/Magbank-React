import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

const AccountModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Abra Sua Conta</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Seu nome</Form.Label>
          <Form.Control type="text" placeholder="seu nome " />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Seu email</Form.Label>
          <Form.Control type="email" placeholder="seu email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Sua Cidade</Form.Label>
          <Form.Control as="select">
            <option value="1">Florianópolis - SC</option>
            <option value="2">Volta Redonda - RJ</option>
            <option value="3">São Paulo - SP</option>
            <option value="3">Resende - RJ</option>
            <option value="3">Limeira - MG</option>
          </Form.Control>
        </Form.Group>

        <Form.Check
          type="checkbox"
          id="custom-checkbox"
          label="Eu li e concordo com os termos de uso"
        />
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Criar Conta
      </Button>
    </Modal.Footer>
  </Modal>
)

export default AccountModal
