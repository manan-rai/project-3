import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className="head f_400">
        <div className="container c_flex">
          <div className="head_left">
            <label className="detail_info">
              Welcome to Worldwide Electronics Store
            </label>
          </div>
          <div className="head_right"> 
            <ul className="head_links d_flex mb-0">
              <li>
                <Link to="location" className="pe-3 border_right c_flex">
                    <img src="/images/location.png" alt="" className="links_img"/>
                  <span>Store Locator</span>
                </Link>
              </li>
              <li>
                <Link to="order" className="pe-3 ps-3 border_right c_flex">
                    <img src="/images/truck.png" alt="" className="links_img"/>
                  <span>Track Your Order</span>
                </Link>
              </li>
              <li>
                <div class="dropdown pe-3 ps-3 border_right ">
                  <button
                    class=" dropdown-toggle f_400"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-dollar-sign me-1"></i>
                    <span>Dollar (US)</span>
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Deutsch
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Espanol
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="signin" className="ps-3 c_flex">
                    <img src="/images/user.png" alt="" className="links_img"/>
                  <span>Register or Sign in</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
