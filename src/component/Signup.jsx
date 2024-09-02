// src/Signup.js
import React from 'react';
import './signup.css'; // Assuming the compiled CSS is saved as signup.css
import { Link } from 'react-router-dom';
import backgroundImage from './assest/bg_img.jpg'; // Ensure the path is correct
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from './navbar.jsx'


// Define the validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

const Signup = () => {
  const handleSubmit = (values) => {
    console.log('Form values:', values);
    // Handle form submission here
  };

  return (<div className='NavContainer'><Navbar/>
    <div 
      className="bg-img" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        height: '100vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="signup-page">
        <div className="container">
          <div className="info">
            {/* <h1>SignUp Form</h1> */}
          </div>
          <div className="form">
            <div className="thumbnail">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg" alt="Thumbnail" />
            </div>
            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                terms: false,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="signup-form">
                  <div className="input-box">
                    <Field type="text" name="name" placeholder="Enter your name" />
                    <ErrorMessage name="name" component="span" className="error-text" />
                  </div>
                  <div className="input-box">
                    <Field type="text" name="email" placeholder="Enter your email" />
                    <ErrorMessage name="email" component="span" className="error-text" />
                  </div>
                  <div className="input-box">
                    <Field type="password" name="password" placeholder="Create password" />
                    <ErrorMessage name="password" component="span" className="error-text" />
                  </div>
                  <div className="input-box">
                    <Field type="password" name="confirmPassword" placeholder="Confirm password" />
                    <ErrorMessage name="confirmPassword" component="span" className="error-text" />
                  </div>
                  <div className="policy">
                    <Field type="checkbox" name="terms" />
                    <h4>I accept all terms & conditions</h4>
                    <ErrorMessage name="terms" component="span" className="error-text" />
                  </div>
                  <div className="input-box button">
                    <button type="submit">Register Now</button>
                  </div>
                  <div className="text">
                    <h4>Already have an account?</h4>
                    <p><Link to="/">Login Now</Link></p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default Signup;
