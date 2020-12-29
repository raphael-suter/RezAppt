import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./themes/GlobalStyle";
import LightTheme from "./themes/LightTheme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <h1>Hello World</h1>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
