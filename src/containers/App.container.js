import React from "react";
import App from "../components/App";
import { AppProvider } from "../state/AppContext";

const AppContainer = () => {
  return (
      <AppProvider>
        <App />
      </AppProvider>
  );
};

export default AppContainer;
