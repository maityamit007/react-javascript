import React from "react";
import { createContext, useState, useContext } from "react";

export const ThemeProvider = createContext();

export const useTheme = () => {
  return useContext(ThemeProvider);
};

export const ThemeContext = (props) => {
  const [checkboxValue, setCheckboxValue] = useState(true);

  function toggleMode() {
    setCheckboxValue((prevState) => !prevState);
  }
  console.log(checkboxValue);
  let val = checkboxValue;

  return (
    <ThemeProvider.Provider value={{ checkboxValue, toggleMode }}>
      {props.children}
    </ThemeProvider.Provider>
  );
};
