// @flow

import styled from "react-emotion";

export const Container = styled("div")`
  height: 100%;
  width: 100%;
`;

export const Header = styled("h1")`
  display: flex;
  padding: 10px 25px;
`;

export const PostsContainer = styled("div")`
  margin: 20px;
`;

export const ButtonsContainer = styled("div")`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

export const PageButton = styled("div")(({ disabled }) => ({
  padding: "10px 20px",
  backgroundColor: disabled ? "rgba(0, 0, 0, 0.12)" : "#2196f3",
  color: "white",
  opacity: disabled ? "0.5" : "1",
  fontWeight: "bold",
  fontSize: "20px",
  width: "150px",
  textAlign: "center",
  cursor: disabled ? "default" : "pointer",
  "&:hover": {
    background: !disabled && "#1976d2"
  }
}));
