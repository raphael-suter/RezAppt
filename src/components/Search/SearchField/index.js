import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: 0 0 8px ${({ theme }) => theme.shadowColor};
`;

const TextField = styled.input.attrs(() => ({
  type: "text",
}))`
  flex: 1;
  min-width: 0;
  padding: 1rem 1.2rem;
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

const SearchField = () => (
  <Container>
    <TextField placeholder="Suche" />
    <Button>
      <Icon src={`${process.env.PUBLIC_URL}/search.svg`} />
    </Button>
  </Container>
);

export default SearchField;
