import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import './auth.css'

const SignUp = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <div className='main-signup'>
      <div className='container-signup'>


        <Fragment>
          <h1>Sign Up</h1>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
                placeholder='Full name'
              />
            </Form.Group>
            <Form.Group controlId='formGroupEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                type='email'
                placeholder='Enter email'
              />
            </Form.Group>
            <Form.Group controlId='formGroupPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
                type='password'
                placeholder='Password'
              />
              <Form.Text className='text-muted'>
                Password must be at least 6 characters
          </Form.Text>
            </Form.Group>
            <Form.Group controlId='formGroupPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name='password2'
                value={password2}
                onChange={(e) => onChange(e)}
                type='password'
                placeholder='Confirm Password'
              />
            </Form.Group>
            <Button type='submit' variant='secondary'>
              Sign Up
        </Button>
          </Form>
          <Form.Text className='text-muted'>
            Already have an account? <Link to='/login'>Sign In</Link>
          </Form.Text>
        </Fragment>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(SignUp);
