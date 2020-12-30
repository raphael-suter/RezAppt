import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 1rem 0;
  overflow-x: auto;
`;

const Ingredient = styled.button`
  margin-right: 1rem;
  padding: 0.4rem 1rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: 0 0 8px ${({ theme }) => theme.shadowColor};
  font-size: 16px;
  background: ${({ theme }) => theme.mediumColor};
  cursor: pointer;
`;

const Ingredients = ({ ingredients, onDeleteIngredient }) => (
  <Container>
    {ingredients.map((item, index) => (
      <Ingredient key={index} onClick={() => onDeleteIngredient(index)}>
        {item}
      </Ingredient>
    ))}
  </Container>
);

export default Ingredients;
