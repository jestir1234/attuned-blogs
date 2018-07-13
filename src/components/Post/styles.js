// @flow

import styled, { keyframes } from "react-emotion";

const fade = keyframes`
  from { opacity: 0; }
  50%  { opacity: .5 }
  to   { opacity: 1 }`;

export const PostItemContainer = styled("div")`
  padding: 10px 15px;
  border: 1px solid black;
  animation: ${fade} 1s ease-in-out;
  height: 90px;
  margin: 10px 0px;
  background-color: #fff;
  overflow: scroll;
  @media (max-width: 520px) {
    padding: 5px;
  }
`;

export const PostHeader = styled("h2")`
  font-size: 16px;
  @media (max-width: 520px) {
    margin: 5px 0px;
  }
`;

export const PostBody = styled("div")`
  font-size: 11px;
`;
