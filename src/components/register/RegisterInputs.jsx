import React from "react";
import { FormControl } from "../FormControl";
import { Form, Formik } from "formik";
import { initialValues, onSubmit, validationSchema } from "../formikAttribute";

export const RegisterInputs = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div>
              <div className="d-flex ">
                <FormControl
                  control="firstName"
                  type="text"
                  name="firstName"
                  placeholder="first name"
                  inputStyle='registerInputStyle'
                />
                <FormControl
                  control="lastName"
                  type="text"
                  name="lastName"
                  placeholder="last name"
                  inputStyle='registerInputStyle'
                />
              </div>

              <div className="d-flex ">
                <FormControl
                  control="username"
                  type="text"
                  name="username"
                  placeholder="username"
                  inputStyle='registerInputStyle'
                />
                <FormControl
                  control="email"
                  type="email"
                  name="email"
                  placeholder="email"
                  inputStyle='registerInputStyle'
                />
              </div>
              
              <div className="d-flex ">
                <FormControl
                  control="password"
                  type="password"
                  name="password"
                  placeholder="password"
                  inputStyle='registerInputStyle'
                />
                <FormControl
                  control="password"
                  type="password"
                  name="password"
                  placeholder="confirm password"
                  inputStyle='registerInputStyle'
                />
              </div>

            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
