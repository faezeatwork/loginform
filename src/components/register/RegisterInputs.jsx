import React from "react";
import { FormControl } from "../FormControl";
import { Form, Formik } from "formik";
import { initialValues, onSubmit, validationSchema } from "../formikAttribute";

export const RegisterInputs = () => {
  const ItemValidationTypeRadio = [
    { id: "phone", name: "phone" },
    { id: "email", name: "email" },
  ];
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        // console.log(formik);
        // console.log(formik.values.auth_mode);
        return (
          <Form>
            <div className="">
              {/* ====== first name , last name inputs ===== */}
              <div className="d-flex ">
                <FormControl
                  formik={formik}
                  control="input"
                  type="text"
                  name="firstName"
                  placeholder="first name"
                  inputStyle="registerInputStyle"
                />
                <FormControl
                  formik={formik}
                  control="input"
                  type="text"
                  name="lastName"
                  placeholder="last name"
                  inputStyle="registerInputStyle"
                />
              </div>

              {/* ===== phone/email , username inputs ===== */}
              <div className="d-flex ">
                {formik.values.auth_mode == "phone" ? (
                  <FormControl
                    formik={formik}
                    control="input"
                    type="number"
                    name="phone"
                    placeholder="phone"
                    inputStyle="registerInputStyle"
                  />
                ) : (
                  <FormControl
                    formik={formik}
                    control="input"
                    type="email"
                    name="email"
                    placeholder="email"
                    inputStyle="registerInputStyle"
                  />
                )}
                <FormControl
                  formik={formik}
                  control="input"
                  type="text"
                  name="username"
                  placeholder="username"
                  inputStyle="registerInputStyle"
                />
              </div>

              {/* ============ date input ============== */}
              <div>
                <FormControl
                  formik={formik}
                  type="text"
                  control="date"
                  name="date_of_birth"
                  placeholder="Date of birth"
                />
              </div>

              {/* ===== password , confirmation inputs ======= */}
              <div className="d-flex ">
                <FormControl
                  formik={formik}
                  control="input"
                  type="password"
                  name="password"
                  placeholder="password"
                  inputStyle="registerInputStyle"
                  errMsg="divErrMsg"
                />
                <FormControl
                  formik={formik}
                  control="input"
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                  inputStyle="registerInputStyle"
                />
              </div>
            </div>
            {/*================ Choose file input ================*/}

            <FormControl
              formik={formik}
              control="file"
              type="file"
              name="choose_file"
              placeholder="Choose a file"
            />
            {/* ================= Register btn ================== */}
            <div className="p-3 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-success w-75 rounded-pill mt-2"
              >
                Register
              </button>
            </div>

            {/* ====== validation type radio button ====== */}
            <div>
              <FormControl
                formik={formik}
                control="validation-type"
                type="radio"
                label="validation type"
                nameOfItem={ItemValidationTypeRadio}
                name="auth_mode"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
