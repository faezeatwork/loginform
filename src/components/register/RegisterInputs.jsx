import React from "react";
import { FormControl } from "../FormControl";
import { Form, Formik } from "formik";
import { initialValues, onSubmit, validationSchema } from "../formikAttribute";

export const RegisterInputs = () => {
  const ItemValidationTypeRadio = [
    { id: 0, name: "phone" },
    { id: 1, name: "email" },
  ];
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div className="">
              <div className="d-flex ">
                <FormControl
                  control="input"
                  type="text"
                  name="firstName"
                  placeholder="first name"
                  inputStyle="registerInputStyle"
                />
                <FormControl
                  control="input"
                  type="text"
                  name="lastName"
                  placeholder="last name"
                  inputStyle="registerInputStyle"
                />
              </div>
              <div>
                <FormControl
                  control="validation-type"
                  type="radio"
                  label="validation type"
                  nameOfItem={ItemValidationTypeRadio}
                  name="validationType"
                />
              </div>
              <div className="d-flex ">
                <FormControl
                  control="input"
                  type="text"
                  name="username"
                  placeholder="username"
                  inputStyle="registerInputStyle"
                />
                {ItemValidationTypeRadio.name == "phone" ? (
                  <FormControl
                    control="input"
                    type="number"
                    name="phone"
                    placeholder="phone"
                    inputStyle="registerInputStyle"
                  />
                ) : (
                  <FormControl
                    control="input"
                    type="email"
                    name="email"
                    placeholder="email"
                    inputStyle="registerInputStyle"
                  />
                )}
              </div>

              <div className="d-flex ">
                <FormControl
                  control="input"
                  type="password"
                  name="password"
                  placeholder="password"
                  inputStyle="registerInputStyle"
                  errMsg="divErrMsg"
                />
                <FormControl
                  control="input"
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                  inputStyle="registerInputStyle"
                />
              </div>
            </div>
            <div className="p-3 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-success w-75 rounded-pill me-3"
              >
                Register
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
