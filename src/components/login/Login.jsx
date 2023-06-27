import React from 'react'
import { LoginInputs } from './LoginInputs'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const Login = () => {
  return (
    <div className="p-2">
    <div className="customForm d-flex flex-column justify-content-center align-items-center ">
   <img src="../../public/assets/images/login.png" alt="" />
    <LoginInputs/>
    </div>
    <div className=" mt-1 customRegisterLink ">
      <div className="pointer h-100 d-flex justify-content-center align-items-center fs-4">
        <AiOutlineArrowLeft /> register
      </div>
    </div>
  </div>
  )
}





