// app context - wareHouse
// provider - AppContext.provider
// consumer - useContext
import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();
const initialState = {
  name: "",
  image: "",
  services: [],
};
const API = "https://www.themealdb.com/api/json/v1/1/categories.php";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // call api
  useEffect(() => {
    getServices(API);
  }, []);

  // get services from API
  const getServices = async (url) => {
    try {
      const res = await axios.get(url);
      const data = await res.data;
    //   console.log(data);
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Naved khan",
        image: "./images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Geeky Naved",
        image: "./images/about.svg",
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
