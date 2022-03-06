import React from "react";

import inv1 from "../../images/Inv1.png";
import inv2 from "../../images/Inv2.png";
import inv3 from "../../images/Inv3.png";
import inv4 from "../../images/Inv4.png";
import inv5 from "../../images/Inv5.png";
import line from "../../images/line.png";
const Invest = () => {
  return (
    <div className=" w-full my-32">
      <div className="flex items-center justify-center">
        <div className="container">
          <div className=" flex items-center w-full justify-center">
            <h1 className=" font-bold text-font text-3xl w-96 text-center">
              We're Changing The Way You Invest
            </h1>
          </div>
          <div className="flex items-center justify-center mt-3">
            <p className=" font-bold text-font_sm text-sm  w-96 text-center">
              Lorem ipsum is common placeholder text used to demonstrate the
              graphic elements of a document or visual.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-8">
            {/* fist row */}
            <div className=" block">
              <img src={inv1} alt="" />
            </div>
            <div className=" flex items-start flex-col">
              <div className="flex items-center gap-1 text-sr text-sm font-medium">
                <div className="w-12 h-1">
                  <img src={line} alt="" />
                </div>
                One
              </div>
              <h4 className="text-lg font-bold text-font pt-2">
                Less Upfront Capital
              </h4>
              <p className=" font-bold text-font_sm text-sm  w-96 text-start pt-2">
                With the fractional ownership opportunity investors need lesser
                upfront capital to own a property. With our short term
                time-to-own 0% interest mortgage, investors have a time to come
                up with capital without having to secure high interest rate
                loans from banks.
              </p>
            </div>
       
            {/* second row */}
            <div className="flex items-start lg:pl-32 justify-center flex-col">
              <div className="flex items-center gap-1 text-sr text-sm font-medium">
                <div className="w-12 h-1">
                  <img src={line} alt="" />
                </div>
                Two
              </div>
              <h4 className="text-lg font-bold text-font pt-2">
                Smarter Diversification
              </h4>
              <p className=" font-bold text-font_sm text-sm  w-96 text-start pt-2">
                Since you don't have to use up all your capital in a single
                investment, you have the opportunity to diversify your
                investment outside of a single property, location, or investment
                strategy.
              </p>
            </div>
            <div>
              <img src={inv2} alt="" />
            </div>
            {/* third row */}
            <div>
              <img src={inv3} alt="" />
            </div>
            <div className="flex items-start flex-col">
              <div className="flex items-center gap-1 text-sr text-sm font-medium">
                <div className="w-12 h-1">
                  <img src={line} alt="" />
                </div>
                Three
              </div>
              <h4 className="text-lg font-bold text-font pt-2">
                Quality Assets Without High Fees
              </h4>
              <p className=" font-bold text-font_sm text-sm  w-96 text-start pt-2">
                Every investment asset goes through our 5 point asset check
                whichincludes a KYC/KYB, physical validation, market comp,
                valuation, and legal verification. We help you avoid paying
                unnecessary fees to agents and different parties just to get a
                valuable asset.
              </p>
            </div>
            {/* four row */}
            <div className="flex items-start lg:pl-32 justify-center flex-col">
              <div className="flex items-center gap-1 text-sr text-sm font-medium">
                <div className="w-12 h-1">
                  <img src={line} alt="" />
                </div>
                Four
              </div>
              <h4 className="text-lg font-bold text-font pt-2">
                Partnership & Support
              </h4>
              <p className=" font-bold text-font_sm text-sm  w-96 text-start pt-2">
                You are not just an investor to us, you are a partner and we
                treat you as such. Wether through our reliable long term legal
                support or joining our community of investors like you, you can
                be rest assured that you are not walking this journey alone.
              </p>
            </div>
            <div>
              <img src={inv4} alt="" />
            </div>
            {/* five row */}
            <div>
              <img src={inv5} alt="" />
            </div>
            <div className="flex items-start flex-col">
              <div className="flex items-center gap-1 text-sr text-sm font-medium">
                <div className="w-12 h-1">
                  <img src={line} alt="" />
                </div>
                Five
              </div>
              <h4 className="text-lg font-bold text-font pt-2">
                Become an Educated Investor
              </h4>
              <p className=" font-bold text-font_sm text-sm  w-96 text-start pt-2">
                Wether you a pro real estate investor or ttis is going to be
                your first time investing into real estate, we have designed
                resources that will help you regardless of your level of
                experience, for FREE. We also have frequent educative webinars,
                events, and information session that will help you stay informed
                about the latest updates and trends regarding your investments
                and real estate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
