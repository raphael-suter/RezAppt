import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.mainColor};
  overflow: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
  padding: 1.2rem;
`;

const Title = styled.h1`
  margin-bottom: 0.2rem;
  font-size: 24px;
`;

const List = styled.ul`
  list-style: none;
  background: ${({ theme }) => theme.mainColor};
`;

const ListItem = styled.li`
  padding: 0.5rem 0;
  font-size: 18px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 45px;
  height: 45px;
  align-self: center;
  margin-top: 2rem;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.mediumColor};
  cursor: pointer;
`;

const Icon = styled.img`
  width: 28px;
  margin-top: 4px;
`;

const Modal = ({ recipe, onClose }) => {
  const { title, missedIngredients, usedIngredients } = recipe;
  const ingredients = missedIngredients.concat(usedIngredients);

  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <List>
          {ingredients &&
            ingredients.length > 0 &&
            ingredients.map(({ originalString }, index) => (
              <ListItem key={index}>{originalString}</ListItem>
            ))}
        </List>
        <Button onClick={onClose}>
          <Icon src={`${process.env.PUBLIC_URL}/close-black.svg`} />
        </Button>
      </Content>
    </Container>
  );
};

export default Modal;
