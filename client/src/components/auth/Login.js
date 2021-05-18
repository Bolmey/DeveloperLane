import React, { Fragment, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    console.log('testing123');
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      <h1>Sign In</h1>
      <Form onSubmit={onSubmit}>
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
        </Form.Group>
        <Button type='submit' variant='secondary'>
          Sign In
        </Button>
      </Form>
      <Form.Text className='text-muted'>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </Form.Text>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
