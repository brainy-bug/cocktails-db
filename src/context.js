import React, { useState, useContext, useEffect } from "react";

import SearchForm from "./components/SearchForm";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("j");
  const [cocktails, setCocktails] = useState([]);

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const fetchDrinks = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${searchTerm}`);
      const { drinks } = await response.json();
      
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else setCocktails([]);
      setLoading(false);
    } catch (error) {
      alert("Whoops! Couldn't connect to the Internet.");
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setSearchTerm,
        openSideBar,
        closeSideBar,
        isSideBarOpen,
        cocktails,
        SearchForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
