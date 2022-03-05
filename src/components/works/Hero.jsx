import React from "react";
import circle from "../../images/Circle BG.png";
import hero from "../../images/how.png";
const Hero = () => {
  return (
    <div className="w-full flex mt-8 items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 gap-32  items-center">
          <div className="w-full flex items-center justify-center">
            <div className=" h-full relative w-2/3 lg:px-16 flex items-start justify-center flex-col gap-3 ">
              <h1 className="text-4xl font-bold text-center text-font">
                Quality assets. Low fees. Smart technology.
              </h1>
              <div className="flex items-center justify-center w-full">
                <p className=" text-font_sm text-xs text-center w-2/3 pt-3">
                  We blend our investment expertise with smart technology to
                  provide our 170,000 investors with the buying power and
                  investment opportunities traditionally reserved for billion
                  dollar institutions.
                </p>
              </div>
            </div>
          </div>
          <div className=" relative">
            <img src={circle} alt="" />
            <div style={{top:"-132px"}} className=" absolute left-60 z-20">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
