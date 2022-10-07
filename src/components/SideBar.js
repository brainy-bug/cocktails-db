// Import React
import React from "react";

import { Link } from "react-router-dom";

// Import React Icons
import { FaTimes } from "react-icons/fa";

import SearchForm from "./SearchForm";

// Import Links from Data
import links from "../data/data";

// Import Global Context
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { closeSideBar, isSideBarOpen } = useGlobalContext();
  return (
    <aside
      className={`${
        isSideBarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
      onClick={(e) => {
        if (!e.target.classList.contains("sidebar-wrapper")) return;
        else closeSideBar();
      }}
    >
      <div className="sidebar">
        <FaTimes className="toggle-btn close-btn" onClick={closeSideBar} />
        <div className="sidebar-links">
          {links.map(({ label, icon, url }) => {
            return (
              <Link
                to={url}
                key={label}
                className="link"
                onClick={closeSideBar}
              >
                {icon}
                {label}
              </Link>
            );
          })}
        </div>
        <SearchForm />
      </div>
    </aside>
  );
};

export default Sidebar;
