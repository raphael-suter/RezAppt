import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import Search from "./components/Search";
import GlobalStyle from "./themes/GlobalStyle";
import Theme from "./themes/Theme";

const Title = styled.h1`
  margin: 4rem 1rem 2rem;
  text-align: center;
  font-family: "Lobster", cursive;
  font-size: 72px;
  text-shadow: ${({ theme }) => theme.shadowColor} 4px 4px;
  color: ${({ theme }) => theme.mainColor};
`;

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Title>RezAppt</Title>
    <Search ingredients={["Gurke", "Milch", "Ei"]} />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
