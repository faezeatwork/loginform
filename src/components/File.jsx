import { ErrorMessage, FastField } from "formik";
import React, { useEffect } from "react";

export const File = ({ formik, name, type, placeholder }) => {
  return (
    <div className="w-100">
      <label htmlFor=""></label>
      <div className="position-relative">
        <input
          type="text"
          name={name}
          className={`col-12 input-group-text rounded-pill shadow-lg`}
          placeholder={placeholder}
          value={formik.values[name] ? formik.values[name].name : ""}
          onChange={() => null}
        />

        <input
          type={type}
          name={name}
          className={`chooseFile col-12 input-group-text rounded-pill shadow-lg`}
          placeholder={placeholder}
          onChange={(e) => {
            formik.setFieldValue(name, e.target.files[0]);
          }}
        />
      </div>

      <div>
        <ErrorMessage
          name={name}
          render={(d) => <small className="smallFont">{d}</small>}
        />
      </div>
    </div>
  );
};
