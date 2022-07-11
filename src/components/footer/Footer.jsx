import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 mb-5">
              <div className="logo">
                <label>
                  electro<span>.</span>
                </label>
              </div>
              <div className="customer_support f_flex">
                <img src="/images/customersupport.png" alt="" />
                <span>
                  <label>Got questions? call us 24/7!</label>
                  <h5>(800) 8001-8588, (0600) 874 548</h5>
                </span>
              </div>
              <div className="contact_info">
                <h6>Contact info</h6>
                <label>
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </label>
              </div>
              <div className="icons"></div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <h5>Find it Fast</h5>
              <ul>
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>TV & Audio</li>
                <li>Gadgets</li>
                <li>Car Electronic & GPS</li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-12">
                <ul className="mt-5">
                <li> Printers & Ink </li>
                <li>Software</li>
                <li>Office Supplies</li>
                <li>Computer Components</li>
                <li>Accesories</li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-12 ">
              <h5>Customer Care</h5>
              <ul>
                <li>My Account</li>
                <li>Order Tracking </li>
                <li> Wish List</li>
                <li>Customer Service </li>
                <li>Returns / Exchange </li>
                <li> FAQs</li>
                <li> Product Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
