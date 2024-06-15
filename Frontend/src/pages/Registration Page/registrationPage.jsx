import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './registrationPage.css';
import Swal from 'sweetalert2';

const RegistrationPage = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[a-zA-Z.'\s]+$/, 'Name should only contain letters, apostrophes, periods, and spaces')
      .required('First name is required'),
    lastName: Yup.string()
      .matches(/^[a-zA-Z.'\s]+$/, 'Name should only contain letters, apostrophes, periods, and spaces')
      .required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(25, "Password must be less than 26 characters")
      .matches(/[A-Z]/, "Password should include at least one uppercase letter")
      .matches(/[a-z]/, "Password should include at least one lowercase letter"),
      // .matches(/\d/, "Password should include at least one number")
      // .matches(/[\W_]/, "Password should include at least one special symbol"),
    confirm_password: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref('password'), null], "Confirm password should be the same as the password"),
  });

  const onSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:3001/api/green/registerNew', {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password
      });
      Swal.fire({
        title: "Registered successfully!",
        icon: "success",
        text: "User ID: " + response.data.userId,
        confirmButtonText: "OK",
        }).then(() => {
          window.location.reload();
      });
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <h2>Registration</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="form-control">
              <Field type="text" name="firstName" placeholder="First Name" />
              <ErrorMessage name="firstName" component="div" className="error" />
            </div>

            <div className="form-control">
              <Field type="text" name="lastName" placeholder="Last Name" />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>

            <div className="form-control">
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-control">
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="form-control">
              <Field type="password" name="confirm_password" placeholder="Confirm Password" />
              <ErrorMessage name="confirm_password" component="div" className="error" />
            </div>

            <div className='button-container'>
              <button type="submit" className="submit-button">Register</button>
            </div>
            <div  className="signIn_text">
            <p>Already have an account?</p><a href='/'> Login Here</a>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationPage;
