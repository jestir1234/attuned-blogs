// @flow
import React, { Fragment, Component } from "react";
import { PostList } from "./components";
import { Header, Title, SearchBox } from "./styles";

type State = {
  searchString: string
};

type Props = {};

class App extends Component<Props, State> {
  state = { searchString: "" };

  handleSearchInput = (e: Object) => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <Header>
          <Title>Attuned Blog</Title>
          <SearchBox placeholder="Search" onChange={this.handleSearchInput} />
        </Header>
        <PostList searchString={this.state.searchString} />
      </Fragment>
    );
  }
}

export default App;
