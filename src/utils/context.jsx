import React, { useState, useContext, useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext = React.createContext();

const initialState = {
  title: "Welcome",
  subtitle: "Explore the world of sports",
  url: "/",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [globalLoading, setGlobalLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        globalLoading,
        setGlobalLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
