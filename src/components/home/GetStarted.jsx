import React from "react";
import create from "../../images/create.png";
import add from "../../images/add-content.png";
import lounch from "../../images/launch.png";

const GetStarted = () => {
  return (
    <div className=" w-full bg_getStarted">
      <div className="flex items-center justify-center">
        <div className="container">
          <h1 className=" font-bold text-font text-3xl w-full text-center">
            How To Get Started
          </h1>
          <div className="flex items-center justify-center mt-3">
            <p className=" font-bold text-font_sm text-sm  w-96 text-center">
              Lorem ipsum is common placeholder text used to demonstrate the
              graphic elements of a document or visual.
            </p>
          </div>
          <div className=" hidden lg:grid grid-cols-3 gap-5 mt-8 ">
            <div className="flex items-center justify-center flex-col gap-1">
              <div className=" h-28">
                <img src={create} alt="" />
              </div>
              <h3 className=" text-font font-bold w-full text-center">
                Tell Us about yourself
              </h3>
            </div>
            <div className="flex items-center justify-center flex-col gap-1">
              <div className=" h-28">
                <img src={add} alt="" />
              </div>
              <h3 className=" text-font font-bold w-full text-center">
                Find an investment opportunity
              </h3>
            </div>
            <div className="flex items-center justify-center flex-col gap-1">
              <div className=" h-28">
                <img src={lounch} alt="" />
              </div>
              <h3 className=" text-font font-bold w-full text-center">
                Grow your portdolio
              </h3>
            </div>
          </div>
          <div className=" grid lg:hidden grid-cols-3 gap-5 mt-8">
            <div className="flex items-center justify-center flex-col gap-1">
              <div className=" h-20">
                <img src={create} alt="" />
              </div>
              <h3 className=" text-font text-sm font-bold w-full text-center">
                Tell Us about yourself
              </h3>
            </div>
            <div className="flex items-center justify-center flex-col gap-1">
              <div className=" h-20">
                <img src={add} alt="" />
              </div>
              <h3 className=" text-font text-sm font-bold w-full text-center">
                Find an investment opportunity
              </h3>
            </div>
            <div className="flex items-center justify-center flex-col gap-1">
              <div className=" h-20">
                <img src={lounch} alt="" />
              </div>
              <h3 className=" text-font text-sm font-bold w-full text-center">
                Grow your portdolio
              </h3>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
