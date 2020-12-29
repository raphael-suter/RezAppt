import React from "react";
import styled from "styled-components";
import Ingredients from "./Ingredients";
import SearchField from "./SearchField";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 0 1.2rem;
`;

const Search = ({ ingredients }) => (
  <Container>
    <SearchField />
    <Ingredients items={ingredients} />
  </Container>
);

export default Search;
