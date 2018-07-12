import styled, { keyframes } from "react-emotion";

const fade = keyframes`
  from { opacity: 0; }
  50%  { opacity: .5 }
  to   { opacity: 1 }`;

export const PostItemContainer = styled("div")(props => ({
  padding: "10px 15px",
  border: "1px solid black",
  animation: `${fade} 1s ease-in-out`,
  height: "90px",
  margin: "5px",
  backgroundColor: "#fff",
  overflow: "scroll"
}));

export const PostHeader = styled("h2")(props => ({
  fontSize: "16px"
}));
export const PostBody = styled("div")(props => ({
  fontSize: "11px"
}));
