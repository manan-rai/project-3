import React from "react";
import { Link } from "react-router-dom";
const Search = () => {
  return (
    <>
      <section className="search">
        <div className="container c_flex">
       
          <div className="logo">
            <label>
              electro<span>.</span>
            </label>
          </div>
          <div className="search_box">
            <div className="search_product c_flex">
              <input
                type="text"
                placeholder="Search for Products"
                className="input_control"
              />
              <span class="dropdown">
                <button
                  class=" dropdown-toggle f_400"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  <span>All Categories</span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Two
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Three
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Four
                    </a>
                  </li>
                </ul>
              </span>
            </div>
            <button className="btn">
              <i class="fa-solid fa-magnifying-glass ps-2 pe-2"></i>
            </button>
          </div>
          <div className="icons">
            <ul className="icons_list c_flex mb-0">
              <li>
                <Link to="compare">
                  <img
                    src="/images/refresh-button.png"
                    alt=""
                    className="icons_img ms-3"
                  />
                </Link>
              </li>
              <li>
                <Link to="favourite">
                  <img
                    src="/images/heart.png"
                    alt=""
                    className="icons_img ms-4"
                  />
                </Link>
              </li>
              <li className="c_flex cart">
                <Link to="cart">
                  <img
                    src="/images/bag.png"
                    alt=""
                    className="icons_img ms-4"
                  />
                </Link>
                <span className="cart_count">2</span>
                <span className="total_price">$1785.00</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
