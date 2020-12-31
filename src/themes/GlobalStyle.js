import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    outline: none;
  }

  body {
    height: 100vh;
    background: no-repeat center center / cover;
    background-image: url(${process.env.PUBLIC_URL}/background.jpg);
  }
`;
