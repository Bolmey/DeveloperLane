import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './TheNavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
// import Actions from '../../api';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

function TheNavBar({ auth: { isAuthenticated, loading }, logout }) {
  const authLinks = (
    <Fragment>
      <Link to='/login'>
        <Button onClick={logout} className='login-button' variant='secondary'>
          Logout
        </Button>
      </Link>
      <Link to='/cart'>
        <Button className='login-button' variant='secondary'>
          Saved Items
        </Button>
      </Link>
    </Fragment>
  );

  const guestLinks = (
    <Link to='/login'>
      <Button className='login-button' variant='secondary'>
        Login / Sign Up
      </Button>
    </Link>
  );

  return (
    <Navbar className='whole-navbar' bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand className='navbar-img'>
        <Link to='/'>
          <img
            alt=''
            src='./assets/logo.png'
            width='40'
            height='40'
            className='d-inline-block align-top'
          />{' '}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto navbar-links'>
          <Nav.Link>
            <Link className='navlink' to='/computers'>
              Computers{' '}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className='navlink' to='/monitors'>
              Monitors
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className='navlink' to='/keyboards'>
              Keyboards
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className='navlink' to='/mouse'>
              Mouse
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className='navlink' to='/chairs'>
              Chairs
            </Link>
          </Nav.Link>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

TheNavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(TheNavBar);
