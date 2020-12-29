import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./themes/GlobalStyle";
import LightTheme from "./themes/LightTheme";

const App = () => (
  <ThemeProvider theme={LightTheme}>
    <GlobalStyle />
    <h1>RezAppt</h1>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
