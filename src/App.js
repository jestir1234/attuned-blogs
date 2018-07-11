// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "react-emotion";
import { fetchBlogs } from "./api";
import Post from "./views/Post";
import { addBlogs } from "./actions";

const Container = styled("div")`
  height: 100%;
  width: 100%;
`;

const Header = styled("h1")`
  display: flex;
  padding: 10px 25px;
`;

const PostsContainer = styled("div")`
  height: 500px;
  width: 100%;
  border: 1px solid red;
`;

type Props = {
  blogs: array<?Object>
};

class App extends Component<Props> {
  static defaultProps = {
    blogs: []
  };

  componentWillMount() {
    fetchBlogs().then(data => {
      this.props.addBlogs(data);
    });
  }

  render() {
    console.log("PROPS", this.props);
    return (
      <Container>
        <Header>Attuned Blog</Header>
        <PostsContainer>
          {this.props.blogs.map(post => {
            console.log("a post", post);
            return <Post key={Math.random() * new Date()} post={post} />;
          })}
        </PostsContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  log: console.log(state),
  blogs: state.blogs
});

const mapDispatchToProps = {
  addBlogs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
