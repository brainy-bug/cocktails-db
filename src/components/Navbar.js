import React from "react";
import { Link } from "react-router-dom";

// Import React Icons
import { FaBars } from "react-icons/fa";

import SearchForm from "./SearchForm";

import Logo2 from "../CocktailDB-Logo.png";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { isSideBarOpen, openSideBar } = useGlobalContext();

  return (
    <>
      <img src={Logo2} alt="CocktailDB Logo" className="logo" />
      <nav className="navbar">
        <div className="nav-center">
          <FaBars
            className={`${isSideBarOpen ? "toggle-btn hide" : "toggle-btn"}`}
            onClick={openSideBar}
          />
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          {isSideBarOpen || <SearchForm />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
