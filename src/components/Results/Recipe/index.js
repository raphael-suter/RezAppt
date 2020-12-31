import React from "react";
import styled from "styled-components";

const Container = styled.article`
  margin: 1rem 0 0;
  background: ${({ theme }) => theme.mainColor};
  box-shadow: 0 0 8px ${({ theme }) => theme.shadowColor};
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
`;

const Info = styled.div`
  padding: 0.5rem 1rem;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Ingredients = styled.div`
  display: flex;
  overflow-x: auto;
`;

const Ingredient = styled.span`
  margin: 0.5rem 1rem 0.5rem 0;
  padding: 0.4rem 1rem;
  border-radius: ${({ theme }) => theme.radius};
  font-size: 16px;
  white-space: nowrap;
  background: ${({ theme }) => theme.mediumColor};
`;

const Recipe = ({ recipe }) => {
  const { title, image, missedIngredients } = recipe;

  return (
    <Container onClick>
      <Image src={image} />
      <Info>
        <Title>{title}</Title>
        {missedIngredients && missedIngredients.length > 0 && (
          <Ingredients>
            {missedIngredients.map(({ name }, index) => (
              <Ingredient key={index}>{name}</Ingredient>
            ))}
          </Ingredients>
        )}
      </Info>
    </Container>
  );
};

export default Recipe;
