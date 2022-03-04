import React from "react";
import {GoMail} from "react-icons/go"
const Opportunities = () => {
  return (
    <div className=" w-full">
      <div className="flex items-center justify-center">
        <div className="container h-72 bg-white shadow-md p-4 overflow-hidden rounded-bl-3xl rounded-br-3xl">
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
            <div className=" w-1/3 flex items-center justify-between my-8">
            <p className=" w-96 text-sm text-gray-400 flex items-center gap-1">
            <GoMail className=" w-5 h-5"/>Type your email address
            </p>
            <button className="bg-pr font-bold px-4 py-2 rounded-md flex items-center gap-2 text-white text-sm hover:bg-green-800">
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
