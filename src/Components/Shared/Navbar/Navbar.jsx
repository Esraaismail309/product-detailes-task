import React from "react";
import { SearchInput } from "../SearchInput/SearchInput";
import "./../../style/main.modules.css";
import searchIcon from "./../../../Assets/images/search.svg";
import logo from "./../../../Assets/images/Frame 96850.png";
import cartIcon from "./../../../Assets/images/Bag.png";
import menuIcon from "./../../../Assets/images/Menu icon.png";

import "./navbar.css";

import { DropDown } from "../Dropdown/DropDown";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const links = document.querySelector(".main_nav");

  const displayNav = () => {
    links.classList.toggle("show_nav");
  };

  return (
    <nav className="py-3">
      <div className=" navbar container">
        <div className="nav-logo d-flex align-items-center ">
          <Link to="/" className="w-50">
            {" "}
            <img src={logo} alt="logo" />
          </Link>
          <button className="navbar_toggle d-none " onClick={displayNav}>
            <img src={menuIcon} alt="" />
          </button>
        </div>

        <ul className="main_nav">
          <div className="search d-flex align-items-center ">
            <DropDown />
            <SearchInput placeholder={searchIcon} />
          </div>

          <li className="nav-item mx-1 mt-1">
            <Link to="/services">Services</Link>{" "}
          </li>
          <li className="nav-item mx-1  mt-1">
            <Link to="/order">Order</Link>
          </li>
          <li className="nav-item mx-1  mt-1">
            <Link to="/acount">Acount</Link>
          </li>
          <li className="nav-item mx-1  mt-1">
            <Link to='/cart'>
              <img src={cartIcon} className="mx-1" alt="" />
              <small className="badge">2</small>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
