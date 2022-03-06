import React from "react";
import play from "../../images/play.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Playground = () => {
  return (
    <div className=" w-full mt-16">
      <div className=" flex items-center justify-center ">
        <div className="container">
          <div className="grid grid-cols-1 items-center lg:grid-cols-3 gap-5">
            <h1 className=" text-4xl font-semibold text-font">
              Built to level the Real Estate Playing Ground
            </h1>
            <p className="text-sm text-font_sm lg:col-span-2">
              Gone are the days where only individuals and cooperations at the
              top of the income chain can invest in Real Estate. With VestAfrik,
              you have access to real estate investment opportunities within
              your budget. Real estate has been considered to be one of the most
              reliable and ever-appreciating asset class and now, it is
              available to you right on your device.
            </p>
          </div>
          <div className="w-full mt-8">
            <img src={play} alt="" />
          </div>
          <div className="w-full  items-center justify-between hidden lg:flex my-8">
            <p className=" w-96 text-sm text-font_sm">
              Moreover, Africa is our fatherland right? So we should have piece
              ofownership of the actual land.
            </p>
            <button className="bg-pr px-4 py-2 rounded-md flex items-center gap-2 text-white text-sm hover:bg-green-800">
              HERE'S HOW IT WORKS <BsFillArrowRightCircleFill />
            </button>
          </div>
          <div className="w-full  items-center flex-col justify-center gap-2 flex lg:hidden my-8">
            <p className=" text-sm text-font_sm">
              Moreover, Africa is our fatherland right? So we should have piece
              ofownership of the actual land.
            </p>
            <button className="bg-pr w-full flex items-center justify-center  py-4 rounded-md  gap-2 text-white text-sm hover:bg-green-800">
              HERE'S HOW IT WORKS <BsFillArrowRightCircleFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
