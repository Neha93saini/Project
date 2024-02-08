import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';

import * as Yup from "yup";


const FormikForm = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, " must be 15 characters or less")
      .required(" Name is required"),
    lastName: Yup.string()
      .max(15, " must be 15 characters or less")
      .required("required"),
    email: Yup.string()
      .email("email is invalid")
      .required(" email is required"),
    password: Yup.string()
      .min(6, "password should have at least six character ")
      .required(" password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password must match")
      .required("confirm pasword is required")
  })
  const handleReset = (resetForm) => {
    // Reset the form
    resetForm();
  };
  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={{ email: '', password: '', firstName: "", lastName: "", confirmPassword: "" }}
        validationSchema={validate}
        onSubmit={values => {
          console.log("ONSUBMIT ------------", values)
        }}

      >
        {({ handleSubmit, resetForm }) => (
          <Form onSubmit={handleSubmit}>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField label="Confirm Password" name="ConfirmPassword" type="password" />
            <div>
              <button className='btn btn-dark mt-3 me-3' type="submit"> Submit</button>
              <button className='btn btn-danger mt-3' onClick={() => handleReset(resetForm)}> Reset</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikForm;

