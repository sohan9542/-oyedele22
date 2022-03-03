import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div className=" h-20 w-full border-b">
      <div className=" w-full h-full flex items-center justify-center">
        <div className="container h-full">
          <div className="flex items-center w-full h-full justify-between">
            <div className="flex items-center justify-center gap-16">
              <div className=" h-8">
                <img src={logo} alt="" />
              </div>
              <div className="flex items-center justify-center gap-5">
                <Link to="/" className=" text-font font-bold text-sm">
                  Home
                </Link>
                <Link to="/works" className=" text-font font-medium text-sm">
                  How it Works
                </Link>
                <Link to="/process" className=" text-font font-medium text-sm">
                  Our Process
                </Link>
                <Link
                  to="/resources"
                  className=" text-font font-medium text-sm"
                >
                  Resources
                </Link>
                <Link to="/contact" className=" text-font font-medium text-sm">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="px-9 cursor-pointer hover:bg-pr hover:text-white py-3 rounded-md flex items-center justify-center btn_bg font-semibold text-sm text-pr">
                Login
              </div>
              <div className="px-9 cursor-pointer bg-pr hover:bg-green-800 text-white py-3 rounded-md flex items-center justify-center font-semibold text-sm ">
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
