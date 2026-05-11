// src/context/AppContext.jsx

import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  const value = {
    user,
    setUser,
    token,
    setToken,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;