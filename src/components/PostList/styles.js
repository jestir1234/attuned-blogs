// @flow

import styled from "react-emotion";

export const Container = styled("div")`
  width: 100%;
`;

export const PostsContainer = styled("div")`
  padding: 10px 40px;
  margin: auto;
  max-width: 900px;
`;

export const ButtonsContainer = styled("div")`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

export const PageButton = styled("div")(
  ({ disabled }: { disabled: boolean }) => ({
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
    },
    "@media (max-width: 520px)": {
      width: "110px"
    }
  })
);
