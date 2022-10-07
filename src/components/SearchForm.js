import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { isSideBarOpen, closeSideBar, setSearchTerm } = useGlobalContext();

  const searchValue = React.useRef("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchValue.current.value);
    navigate("/");
    searchValue.current.value = "";
    if (isSideBarOpen) {
      closeSideBar();
    }
  };
  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a cocktail"
          ref={searchValue}
          onChange={() => setSearchTerm(searchValue.current.value)}
        />
        <button className="search-btn">
          <AiOutlineSearch />
        </button>
      </form>
    </>
  );
};

export default SearchForm;
