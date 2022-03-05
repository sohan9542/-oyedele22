import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Topbar = () => {
  const [active, setActive] = React.useState(1)
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
                <Link onClick={()=>setActive(1)} to="/" className={ active === 1 ? " text-font font-bold text-sm":  " text-font font-medium text-sm"}>
                  Home
                </Link>
                <Link to="/works"  onClick={()=>setActive(2)}  className={ active === 2 ? " text-font font-bold text-sm":  " text-font font-medium text-sm"}>
                  How it Works
                </Link>
                <Link to="/process" onClick={()=>setActive(3)}  className={ active === 3 ? " text-font font-bold text-sm":  " text-font font-medium text-sm"}>
                  Our Process
                </Link>
                <Link
                  to="/resources"
                  onClick={()=>setActive(4)}  className={ active === 4 ? " text-font font-bold text-sm":  " text-font font-medium text-sm"}
                >
                  Resources
                </Link>
                <Link to="/contact" onClick={()=>setActive(5)}  className={ active === 5 ? " text-font font-bold text-sm":  " text-font font-medium text-sm"}>
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
