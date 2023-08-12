import React from "react";
import { LoginInputs } from "./LoginInputs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <div className="">
      <div className="customForm_login d-flex flex-column justify-content-center align-items-center ">
        <div className="w-100 text-center">
          <img
            src="../assets/images/login.png"
            className="formIcon"
            alt="login"
          />
        </div>
        <LoginInputs />
      </div>
      <div className=" mt-1 customRegisterLink ">
        <div className="pointer h-100 d-flex justify-content-center align-items-center fs-4">
          <AiOutlineArrowLeft className="switch_page "/>
          <NavLink to={"/register"} className="text-decoration-none text-dark ps-1">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};
