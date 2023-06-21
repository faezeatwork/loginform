import { Form, Formik } from "formik";
import React from "react";
import { FormControl } from "./FormControl";
import * as Yup from "yup";

export const LoginInputs = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("You must fill this field")
      .email("Format example: aaa@example.bbb"),
    password: Yup.string().required("You must fill this field"),
  });

  const onSubmit = (value) => {
    console.log(value);
    console.log("submitted");
  };

  return (
    <div className="">
      <div className="d-flex justify-content-center align-items-center">
        <img
          src="../assets/images/user-image.png"
          alt="user image"
          className="w-50 h-50"
        />
      </div>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(formik) => {
          // console.log(formik);
          return (
            <Form>
              <FormControl
                control="email"
                type="email"
                name="email"
                placeholder="&#x2709; email ID"
                iconStyle="Mail"
              />
              <FormControl
                control="password"
                type="password"
                name="password"
                placeholder="&#xe167;  password"
              />
              <div className="p-3 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-success w-75 rounded-pill me-3"
                >
                  login
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
