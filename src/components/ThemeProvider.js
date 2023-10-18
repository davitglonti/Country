import React from "react";

const ThemeProvider = ({ theme }) => {
  return <div>{theme && <ThemedComponent />}</div>;
};

export default ThemeProvider;
