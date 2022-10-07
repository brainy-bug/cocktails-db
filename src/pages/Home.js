import React from "react";

import CocktailList from "../components/CocktailList";

import { useGlobalContext } from "../context";

const Home = () => {
  const { isSideBarOpen } = useGlobalContext();
  if (isSideBarOpen) document.body.classList.add("no-scroll");
  else document.body.classList.remove("no-scroll");

  return (
    <>
      <main>
        <CocktailList />
      </main>
    </>
  );
};

export default Home;
