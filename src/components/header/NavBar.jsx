import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="navbar">
        <div className="container d_flex">
          <div className="department">
            <div className="toggle_btn ">
              <i class="fa-solid fa-bars" onClick={() => setShow(!show)}></i>
            </div>
            <div className="department_title">
              <button
                className=" department_toggle"
                onClick={() => setShow(!show)}
              >
                <i class="fa-solid fa-bars-staggered me-2"></i>
                <span> All Depatments</span>
              </button>
            </div>
            {show ? (
              <ul className="department_list" id="a">
                <div className="list_header c_flex">
                  <div className="logo">
                    <label>
                      electro<span>.</span>
                    </label>
                  </div>
                  <div className="cancle_btn">
                    <h5 onClick={() => setShow(!show)}>&times;</h5>
                  </div>
                </div>
                <li className="department_funfacts">
                  <Link to="value_of_day">Value of Day</Link>
                </li>
                <li className="department_funfacts">
                  <Link to="offers">Top 100 Offers</Link>
                </li>
                <li className="department_funfacts">
                  <Link to="arrivals">New Arrivals</Link>
                </li>
                <li className="list_item">
                  Computers & Accessories
                  <span>
                    <i class="fa-solid fa-angle-right"></i>
                  </span>
                  <div className="sub_menu">
                    <ul className="sub_list">
                      <li>
                        <a className="sub_links">All Computer & Accessories</a>
                      </li>
                      <li>
                        <a className="sub_links ">
                          Laptops, Desktops & Monitors
                        </a>
                      </li>
                      <li>
                        <a className="sub_links">
                          Networking & Internet Devices
                        </a>
                      </li>
                      <li>
                        <a className="sub_links">Computer Accessories</a>
                      </li>
                      <li>
                        <a className="sub_links">Software</a>
                      </li>
                      <li>
                        <a className="sub_links">Printers & Ink</a>
                      </li>
                    </ul>
                    <div className="list_img">
                      <img
                        className="img-fluid"
                        src="/images/listimg1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="list_item">
                  Cameras,Audio & Video{" "}
                  <span>
                    <i class="fa-solid fa-angle-right"></i>
                  </span>
                  <div className="sub_menu">
                    <ul className="sub_list">
                      <li>
                        <a className="sub_links">All Computer & Accessories</a>
                      </li>
                      <li>
                        <a className="sub_links ">
                          Laptops, Desktops & Monitors
                        </a>
                      </li>
                      <li>
                        <a className="sub_links">
                          Networking & Internet Devices
                        </a>
                      </li>
                      <li>
                        <a className="sub_links">Computer Accessories</a>
                      </li>
                      <li>
                        <a className="sub_links">Software</a>
                      </li>
                      <li>
                        <a className="sub_links">Printers & Ink</a>
                      </li>
                    </ul>
                    <div className="list_img">
                      <img
                        className="img-fluid"
                        src="/images/nav2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="list_item">
                  Mobiles & Tablets
                  <span>
                    <i class="fa-solid fa-angle-right"></i>
                  </span>
                  <div className="sub_menu">
                    <ul className="sub_list">
                      <li>
                        <a className="sub_links">All Computer & Accessories</a>
                      </li>
                      <li>
                        <a className="sub_links ">
                          Laptops, Desktops & Monitors
                        </a>
                      </li>
                      <li>
                        <a className="sub_links">
                          Networking & Internet Devices
                        </a>
                      </li>
                      <li>
                        <a className="sub_links">Computer Accessories</a>
                      </li>
                      <li>
                        <a className="sub_links">Software</a>
                      </li>
                      <li>
                        <a className="sub_links">Printers & Ink</a>
                      </li>
                    </ul>
                    <div className="list_img">
                      <img
                        className="img-fluid"
                        src="/images/nav3.png"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="list_item">
                  TV & Audio
                  <span>
                    <i class="fa-solid fa-angle-right"></i>
                  </span>
                  <div className="sub_menu">
                    <ul className="sub_list">
                      <li>
                        <a className="sub_links">All Computer & Accessories</a>
                      </li>
                      <li>
                        <a className="sub_links ">
                          Laptops, Desktops & Monitors
                        </a>
                      </li>
                      <li>
                        <a className="sub_links">
                          Networking & Internet Devices
                        </a>
                      </li>
                      <li>
                        <a className="sub_links">Computer Accessories</a>
                      </li>
                      <li>
                        <a className="sub_links">Software</a>
                      </li>
                      <li>
                        <a className="sub_links">Printers & Ink</a>
                      </li>
                    </ul>
                    <div className="list_img">
                      <img
                        className="img-fluid"
                        src="/images/nav4.png"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="list_item">
                  Watches & Eyewear
                  <span>
                    <i class="fa-solid fa-angle-right"></i>
                  </span>
                  <div className="sub_menu">
                    <ul className="sub_list">
                      <li>
                        <a className="sub_links">All Computer & Accessories</a>
                      </li>
                      <li>
                        <a className="sub_links ">
                          Laptops, Desktops & Monitors
                        </a>
                      </li>
                      <li>
                        <a className="sub_links">
                          Networking & Internet Devices
                        </a>
                      </li>
                      <li>
                        <a className="sub_links">Computer Accessories</a>
                      </li>
                      <li>
                        <a className="sub_links">Software</a>
                      </li>
                      <li>
                        <a className="sub_links">Printers & Ink</a>
                      </li>
                    </ul>
                    <div className="list_img">
                      <img
                        className="img-fluid"
                        src="/images/nav5.png"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="list_item">
                  Car, Motorbike & Industrial
                  <span>
                    <i class="fa-solid fa-angle-right"></i>
                  </span>
                  <div className="sub_menu">
                    <ul className="sub_list">
                      <li>
                        <a className="sub_links">All Computer & Accessories</a>
                      </li>
                      <li>
                        <a className="sub_links ">
                          Laptops, Desktops & Monitors
                        </a>
                      </li>
                      <li>
                        <a className="sub_links">
                          Networking & Internet Devices
                        </a>
                      </li>
                      <li>
                        <a className="sub_links">Computer Accessories</a>
                      </li>
                      <li>
                        <a className="sub_links">Software</a>
                      </li>
                      <li>
                        <a className="sub_links">Printers & Ink</a>
                      </li>
                    </ul>
                    <div className="list_img">
                      <img
                        className="img-fluid"
                        src="/images/nav7.png"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="list_item last_item">Accessories</li>
              </ul>
            ) : null}
          </div>
          <div className="nav_menu ">
            <ul className="nav_list f_flex mb-0">
              <li>Super Deals</li>
              <li>Featured Brands</li>
              <li>Trending Styles</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div className="nav_funfact">
            <label>Free Shipping on Orders $50+</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
