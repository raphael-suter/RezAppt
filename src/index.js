import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import Results from "./components/Results";
import Search from "./components/Search";
import GlobalStyle from "./themes/GlobalStyle";
import Theme from "./themes/Theme";

const Container = styled.div`
  max-height: 100vh;
  overflow: auto;
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 0 1.2rem 1.2rem;
`;

const Title = styled.h1`
  margin: 4rem 1rem 2rem;
  font-family: "Lobster", cursive;
  font-size: 72px;
  text-align: center;
  text-shadow: ${({ theme }) => theme.shadowColor} 4px 4px;
  color: ${({ theme }) => theme.mainColor};
`;

class App extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      ingredients: [],
    };
  }

  render() {
    const { ingredients } = this.state;

    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Container>
          <Content>
            <Title>RezAppt</Title>
            <Search
              ingredients={ingredients}
              onIngredientsUpdate={(ingredients) =>
                this.setState({ ingredients })
              }
            />
            <Results ingredients={ingredients} />
          </Content>
        </Container>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
