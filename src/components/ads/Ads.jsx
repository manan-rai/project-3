import React from "react";
import "./Ads.css"
const Ads = () => {
  return (
    <>
      <section className="ads sec_margin">
        <div className="container">
          <div className="ads_content">
            <label> shop and <span>save big</span> on hotest tablets</label>
            <label className="ads_btn">
              starting at <span> <sup>$</sup>79<sup>99</sup></span>
            </label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ads;
