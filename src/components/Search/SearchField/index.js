import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: 0 0 8px ${({ theme }) => theme.shadowColor};
`;

const TextField = styled.input.attrs(() => ({
  type: "text",
}))`
  flex: 1;
  min-width: 0;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 0;
  border-top-left-radius: ${({ theme }) => theme.radius};
  border-bottom-left-radius: ${({ theme }) => theme.radius};
  font-size: 18px;
  background: ${({ theme }) => theme.mainColor};
`;

const Button = styled.button`
  width: 60px;
  border: none;
  border-radius: 0;
  border-top-right-radius: ${({ theme }) => theme.radius};
  border-bottom-right-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.lightColor};
  cursor: pointer;
`;

const Icon = styled.img`
  width: 28px;
  margin-top: 3px;
`;

const List = styled.ul`
  position: absolute;
  width: 100%;
  top: calc(47px + 1rem);
  padding: 0.5rem 0;
  list-style: none;
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.mainColor};
  overflow: hidden;
`;

const ListItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.darkColor};
  }
`;

const SearchField = ({ value, suggestions, onType, onSelectSuggestion }) => (
  <Container>
    <TextField placeholder="Suche" value={value} onChange={onType} />
    <Button onClick={() => onType({ target: { value: "" } })}>
      <Icon src={`${process.env.PUBLIC_URL}/close.svg`} />
    </Button>
    {suggestions && suggestions.length > 0 && (
      <List>
        {suggestions.map(({ name }, index) => (
          <ListItem key={index} onClick={() => onSelectSuggestion(name)}>
            {name}
          </ListItem>
        ))}
      </List>
    )}
  </Container>
);

export default SearchField;
