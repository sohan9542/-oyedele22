import React from "react";
import hero from "../../images/hero.png";
import vector from "../../images/vector.png";
import kk from "../../images/10k.png";
const Hero = () => {
  return (
    <div className="w-full flex mt-2 items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-8">
          <div className=" h-full relative w-full flex items-start flex-col gap-4 justify-center">
            <div
              className=" y_text"
              style={{ background: "#FFF8EF", color: "#D96D09" }}
            >
              Providing Investment Opportunities within your Budget
            </div>
            <h1 className=" h1_text font-bold text-black">
              Real Estate Investment{" "}
              <span className="text-gray-400 font-thin">has been made </span>
              Easier
            </h1>
            <p className=" text-font_sm p_text pt-2 lg:pt-0">
              Lorem ipsum is common placeholder text used to demonstrate the
              graphic elements of a document or visual presentation. Lorem ipsum
              is common placeholder text used to demonstrate the graphic
              elements of a document or visual presentation.
            </p>
            <div style={{bottom:"210px"}} className=" absolute hidden lg:block w-32 h-20  right-7 z-20">
              <img src={vector} alt="" />
            </div>
            <div style={{bottom:"110px"}} className=" absolute blcok lg:hidden w-32 h-20  right-16 z-20">
              <img src={vector} alt="" />
            </div>
          </div>
          <div  className=" relative">
            <img src={hero} alt="" />
            <div style={{left:"-30px"}} className=" absolute hidden lg:block w-40  bottom-32 z-20">
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
