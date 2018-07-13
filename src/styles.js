// @flow

import styled from "react-emotion";

export const Header = styled("div")`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  align-items: center;
  padding: 0 40px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled("h1")`
  font-size: 32px;
  text-align: center;
  grid-column-start: 2;
  letter-spacing: 3px;
`;

export const SearchBox = styled("input")`
  height: 20px;
  width: 200px;
  padding: 0 5px;
  border-radius: 20px;
  outline: none;
  text-indent: 5px;
  justify-self: flex-end;
`;
