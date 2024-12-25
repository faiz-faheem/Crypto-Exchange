import React from "react";
import { Link } from "react-router-dom"; // Import Link component


import logo from "../../images/logo.png";

function MyButton() {
  const navigate = useNavigate(); // Get the useNavigate function

  const handleClick = () => {
    navigate("D:project_web3.0\client\src\navbar"); // Specify the target page path
  };
  return <button onClick={handleClick}>Market</button>;
}
const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p>
          
        </p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center text-1xl sm:text-1.5xl py-2 ">
        Contact us: +91-6307399618
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        zelta@exchange.com
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@zelta</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;