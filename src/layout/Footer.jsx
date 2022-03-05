import React from "react";
import footerbg from "../images/footerBg.png";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="bg-tr w-full h-72 p-3">
        <div className="flex items-center justify-center w-full h-full ">
          <div className="container">
            <div className="w-full grid grid-cols-1 items-center lg:grid-cols-2 gap-5">
              <div className="flex items-start flex-col pt-6">
                <div className=" h-16 w-52">
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={footerbg}
                    alt=""
                  />
                </div>
                <p className=" text-white text-xs w-96 font-thin">
                  VestAfrik Realty Solutions, LLC ("VestAfrik") operates a
                  website at vestafrik.com and certain mobile apps (the
                  "Platform"'). By using the Platform, you accept our Terms of
                  Service and Privacy Policy. Past performance is no guarantee
                  of future results. Any historical returns, expected returns,
                  or probability projections may not reflect actual future
                  performance.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-6">
                <div className="flex items-start gap-1 flex-col">
                  <h4 className="text-white font-bold pb-3">Product</h4>
                  <a href="#" className=" text-gray-300 text-xs">
                    How it works
                  </a>
                  <a href="#" className=" text-gray-300 text-xs">
                    Our Process
                  </a>
                  <a href="#" className=" text-gray-300 text-xs">
                    Real Estate
                  </a>
                </div>
                <div className="flex items-start gap-1 flex-col">
                  <h4 className="text-white font-bold pb-3">Company</h4>
                  <a href="#" className=" text-gray-300 text-xs">
                    About Us
                  </a>
                  <a href="#" className=" text-gray-300 text-xs">
                    Our Process
                  </a>
                  <a href="#" className=" text-gray-300 text-xs">
                    Careers
                  </a>
                </div>
                <div className="flex items-start gap-1 flex-col">
                  <h4 className="text-white font-bold pb-3">Resources</h4>
                  <a href="#" className=" text-gray-300 text-xs">
                    Help Center
                  </a>
                  <a href="#" className=" text-gray-300 text-xs">
                    Articles
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" w-full h-12 flex items-center justify-center"
        style={{ background: "#001500" }}
      >
        <div className="container">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <p>© 2020 Landify UI Kit. All rights reserved</p>
            <div className="flex items-center gap-4">
              <a href="#">
                <FiInstagram className="w-4 h-4"/>
              </a>
              <a href="#">
                <AiOutlineTwitter className="w-4 h-4" />
              </a>
              <a href="#">
                <AiFillYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
