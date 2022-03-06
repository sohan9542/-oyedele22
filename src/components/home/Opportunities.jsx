import React from "react";
import { GoMail } from "react-icons/go";
const Opportunities = () => {
  return (
    <div className=" w-full" style={{ marginBottom: "-70px" }}>
      <div className="flex items-center justify-center">
        <div className="container  bg-white shadow-md p-4 overflow-hidden rounded-bl-3xl rounded-br-3xl">
          <div className="bg_oportunites w-full h-full">
            <div className=" flex items-center w-full pt-16 justify-center">
              <h1 className=" font-bold text-font text-2xl text-center">
                Get the latest Opportinites
              </h1>
            </div>
            <div className="flex items-center justify-center mt-3">
              <p className=" font-bold text-font_sm text-sm w-2/3 text-center">
                Get to know about new investment opportunities first. Lorem
                ipsum is common placeholder text used to demonstrate the graphic
                elements of a document or visual presentation
              </p>
            </div>
            <div className=" w-full flex items-center justify-center">
              <div className=" hidden w-1/3 lg:flex items-center justify-between my-8">
                <p className=" w-96 text-sm text-gray-400 flex items-center gap-1">
                  <GoMail className=" w-5 h-5" />
                  <input type="text" placeholder="Type your email address" />
                </p>
                <button className="bg-pr font-bold px-4 py-2 rounded-md flex items-center gap-2 text-white text-sm hover:bg-green-800">
                  Subscribe
                </button>
              </div>
              <div className=" lg:hidden pt-3 w-full flex items-center gap-3 flex-col">
                <p className=" text-sm w-full justify-center text-gray-400 flex items-center gap-1">
                  <GoMail className=" w-6 h-6" />
                  <input type="text" className=" text-lg" placeholder="Type your email address" />
                </p>
                <button className="bg-pr w-full font-bold px-4 py-4 rounded-md flex items-center justify-center gap-2 text-white text-sm hover:bg-green-800">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
