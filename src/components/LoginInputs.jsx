import React from "react";

export const LoginInputs = () => {
  return (
    <div className="">
      <div className="d-flex justify-content-center align-items-center">
        <img
          src="../assets/images/user-image.png"
          alt="user image"
          className="w-50 h-50"
        />
      </div>
      <input
        className="Mail input-group-text mb-2 rounded-pill shadow-lg"
        type="email"
        placeholder="&#x2709; email ID"
        // placeholder="email ID"
      />
      <input
        className="input-group-text rounded-pill shadow-lg"
        type="password"
        placeholder="&#xe150;  password"
      />
      <button className="btn btn-success align-items-center w-100 rounded-pill mt-5">
        login
      </button>
    </div>
  );
};
