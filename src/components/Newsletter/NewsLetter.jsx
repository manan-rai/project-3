import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <>
      <section className="newsletter">
        <div className="container">
          <div className="row items_center">
            <div className="col-lg-4 col-md-6">
              <label>
                <img src="/images/newsletter.png" alt="" />
                Sign up to Newsletter
              </label>
            </div>
            <div className="col-lg-4 col-md-6">
              <span>...and receive $20 coupon for first shopping.</span>
            </div>
            <div className="col-lg-4 col-12">
              <div className="letter_srch ">
                <input type="text" placeholder="Email address" />
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
