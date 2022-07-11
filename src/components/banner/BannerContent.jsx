import React from "react";

const BannerContent = () => {
  return (
    <>
      <section className="main_banner " >
        <div className="banner_content">
          <label className="title">The new era of standard</label>
          <h5 className="sub_title">under favorable smartwatches</h5>
          <label className="line">from</label>
          <h1 className="banner_price">
            <sup>$</sup>749<sup>99</sup>
          </h1>
          <button className="btn1 banner_btn">start buying</button>
        </div>
        <div className="banner_img">
          <img src="/images/banner_img2.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default BannerContent;
