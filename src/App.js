import React, { Component } from "react";
import styled from "react-emotion";

const Container = styled("div")`
  height: 100%;
  width: 100%;
  border: 1px solid red;
`;

const Header = styled("h1")`
  display: flex;
  padding: 10px 25px;
`;

class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <Container>
        <Header>Attuned Blog</Header>
      </Container>
    );
  }
}

export default App;
