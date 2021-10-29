import React, { createContext } from "react";
import PropTypes from "prop-types";
import useAppState from "./useAppState";

export const initialData = {
  error: false,
  errorMsg: "",
  player: "",
  scrumId: "",
  userType: "",
  players: [],
  votes: [],
  question: "",
  vote: ""
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const appState = useAppState(initialData);

  return (
    <AppContext.Provider value={{ ...appState }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ])
};
