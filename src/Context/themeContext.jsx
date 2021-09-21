import React from "react";

export const ThemeContext = React.createContext("");

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContextProvider };
