import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./themes/GlobalStyle";
import Theme from "./themes/Theme";

const Title = styled.h1`
  margin: 4rem 1rem;
  text-align: center;
  font-family: "Lobster", cursive;
  font-size: 72px;
  color: ${({ theme }) => theme.mainColor};
`;

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Title>RezAppt</Title>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
