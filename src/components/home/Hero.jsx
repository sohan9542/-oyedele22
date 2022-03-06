import React from "react";
import hero from "../../images/hero.png";
import vector from "../../images/vector.png";
import kk from "../../images/10k.png";
const Hero = () => {
  return (
    <div className="w-full flex mt-2 items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-16">
          <div className=" h-full relative w-full flex items-start flex-col gap-6 justify-center">
            <div
              className="px-4 py-2 text-xs lg:text-base"
              style={{ background: "#FFF8EF", color: "#D96D09" }}
            >
              Providing Investment Opportunities within your Budget
            </div>
            <h1 className=" text-3xl lg:text-5xl font-bold text-font">
              Real Estate Investment{" "}
              <span className="text-gray-400 font-medium">has been made</span>{" "}
              Easier
            </h1>
            <p className=" text-font_sm text-sm pt-3">
              Lorem ipsum is common placeholder text used to demonstrate the
              graphic elements of a document or visual presentation. Lorem ipsum
              is common placeholder text used to demonstrate the graphic
              elements of a document or visual presentation.
            </p>
            <div className=" absolute hidden lg:block w-32 h-20 bottom-44 right-7 z-20">
              <img src={vector} alt="" />
            </div>
            <div className=" absolute blcok lg:hidden w-32 h-20 bottom-22 right-7 z-20">
              <img src={vector} alt="" />
            </div>
          </div>
          <div  className=" relative">
            <img src={hero} alt="" />
            <div style={{left:"-60px"}} className=" absolute hidden lg:block w-40  bottom-28 z-20">
              <img src={kk} alt="" />
            </div>
            <div style={{left:"-20px"}} className=" absolute  lg:hidden w-32  bottom-28 z-20">
              <img src={kk} style={{width:"100%", height:"100%", objectFit:"contain"}} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
