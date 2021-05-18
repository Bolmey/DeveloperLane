import React, { Fragment } from 'react';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
// import Actions from '../../api';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

function NavBar({ auth: { isAuthenticated, loading }, logout }) {
  const authLinks = (
    <Button
      onClick={logout}
      href='/login'
      className='login-button'
      variant='secondary'>
      Logout
    </Button>
  );

  const guestLinks = (
    <Button href='/login' className='login-button' variant='secondary'>
      Login / Sign Up
    </Button>
  );

  return (
    <Navbar className='whole-navbar' bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand className='navbar-img' href='/'>
        <img
          alt=''
          src='./assets/logo.png'
          width='40'
          height='40'
          className='d-inline-block align-top'
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto navbar-links'>
          <Nav.Link href='/bundles'>Bundles</Nav.Link>
          <Nav.Link href='/computers'>Computers</Nav.Link>
          <Nav.Link href='/monitors'>Monitors</Nav.Link>
          <Nav.Link href='/peripherals'>Peripherals</Nav.Link>
          <Nav.Link href='/chairs'>Chairs</Nav.Link>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavBar);
