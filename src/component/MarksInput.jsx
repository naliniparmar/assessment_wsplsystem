// src/MarksInput.js
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './MarksInput.css';
import backgroundImage from './assest/bg_img.jpg'; // Ensure the path is correct
import Navbar from './navbar.jsx'

// Define the validation schema
const validationSchema = Yup.object({
  theory: Yup.object({
    PreBeginner: Yup.number().min(0).max(25).required(),
    Beginner: Yup.number().min(0).max(25).required(),
    'Sop + program': Yup.number().min(0).max(25).required(),
    'Get wet': Yup.number().min(0).max(25).required(),
    'Adv & Intermediate': Yup.number().min(0).max(25).required(),
    Personality: Yup.number().min(0).max(25).required(),
  }),
  practical: Yup.object({
    PreBeginner: Yup.number().min(0).max(25).required(),
    Beginner: Yup.number().min(0).max(25).required(),
    'Sop + program': Yup.number().min(0).max(25).required(),
    'Get wet': Yup.number().min(0).max(25).required(),
    'Adv & Intermediate': Yup.number().min(0).max(25).required(),
    Personality: Yup.number().min(0).max(25).required(),
  }),
  viva: Yup.number().min(0).max(25).required(),
  feedback: Yup.number().min(0).max(25).required(),
});

const initialValues = {
  theory: {
    PreBeginner: '',
    Beginner: '',
    'Sop + program': '',
    'Get wet': '',
    'Adv & Intermediate': '',
    Personality: '',
  },
  practical: {
    PreBeginner: '',
    Beginner: '',
    'Sop + program': '',
    'Get wet': '',
    'Adv & Intermediate': '',
    Personality: '',
  },
  viva: '',
  feedback: '',
};

const MarksInput = () => {
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
    <div className="horizontal-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <>
            {/* Theory Form */}
            <Form className="marks-form">
              <div className="module-section">
                <h2>Theory</h2>
                {Object.keys(initialValues.theory).map((subject) => (
                  <div key={subject} className="form-group">
                    <label htmlFor={`theory.${subject}`}>
                      {subject} (Total: 25)
                    </label>
                    <Field
                      type="number"
                      id={`theory.${subject}`}
                      name={`theory.${subject}`}
                      className={`input ${errors.theory?.[subject] && touched.theory?.[subject] ? 'error' : ''}`}
                    />
                    <ErrorMessage name={`theory.${subject}`} component="span" className="error-text" />
                  </div>
                ))}
              </div>
            </Form>

            {/* Practical Form */}
            <Form className="marks-form">
              <div className="module-section">
                <h2>Practical</h2>
                {Object.keys(initialValues.practical).map((subject) => (
                  <div key={subject} className="form-group">
                    <label htmlFor={`practical.${subject}`}>
                      {subject} (Total: 25)
                    </label>
                    <Field
                      type="number"
                      id={`practical.${subject}`}
                      name={`practical.${subject}`}
                      className={`input ${errors.practical?.[subject] && touched.practical?.[subject] ? 'error' : ''}`}
                    />
                    <ErrorMessage name={`practical.${subject}`} component="span" className="error-text" />
                  </div>
                ))}
              </div>
            </Form>

            {/* Viva Form */}
            <Form className="marks-form">
              <div className="module-section">
                <h2>Viva</h2>
                <div className="form-group">
                  <label htmlFor="viva">Viva Marks</label>
                  <Field
                    type="number"
                    id="viva"
                    name="viva"
                    className={`input ${errors.viva && touched.viva ? 'error' : ''}`}
                  />
                  <ErrorMessage name="viva" component="span" className="error-text" />
                </div>
              </div>
            </Form>

            {/* Feedback Form */}
            <Form className="marks-form">
              <div className="module-section">
                <h2>Feedback</h2>
                <div className="form-group">
                  <label htmlFor="feedback">Feedback Marks</label>
                  <Field
                    type="number"
                    id="feedback"
                    name="feedback"
                    className={`input ${errors.feedback && touched.feedback ? 'error' : ''}`}
                  />
                  <ErrorMessage name="feedback" component="span" className="error-text" />
                </div>
              </div>
            </Form>

            <button type="submit" className="submit-button">Submit</button>
          </>
        )}
      </Formik>
    </div></div></div>
  );
};

export default MarksInput;
