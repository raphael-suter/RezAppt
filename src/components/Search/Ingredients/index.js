import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  overflow-x: auto;
`;

const Ingredient = styled.button`
  margin: 1rem 1rem 0 0;
  padding: 0.4rem 1rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: 0 0 8px ${({ theme }) => theme.shadowColor};
  font-size: 16px;
  white-space: nowrap;
  background: ${({ theme }) => theme.mediumColor};
  cursor: pointer;
`;

const Ingredients = ({ ingredients, onDeleteIngredient }) => (
  <Container>
    {ingredients &&
      ingredients.length > 0 &&
      ingredients.map((item, index) => (
        <Ingredient key={index} onClick={() => onDeleteIngredient(index)}>
          {item}
        </Ingredient>
      ))}
  </Container>
);

export default Ingredients;
