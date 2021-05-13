import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import './navbar.css'

function NavBar(props) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  return (
    <Navbar className='whole-navbar' bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className='navbar-img' href="/">
        <img
          alt=""
          src="./assets/logo.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navbar-links">
          <Nav.Link href="/bundles">Bundles</Nav.Link>
          <Nav.Link href="/computers">Computers</Nav.Link>
          <Nav.Link href="/monitors">Monitors</Nav.Link>
          <Nav.Link href="/peripherals">Peripherals</Nav.Link>
          <Nav.Link href="/chairs">Chairs</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
          <Button className="login-button" variant="secondary" onClick={handleShow}>
            Login / Sign Up
      </Button>
        </Nav>
      </Navbar.Collapse>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default NavBar;