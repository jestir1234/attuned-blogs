// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../../api";
import Post from "../Post";
import { addBlogs } from "../../actions";
import {
  Container,
  Header,
  PostsContainer,
  ButtonsContainer,
  PageButton
} from "./styles";

type Props = {
  blogs: array<?Object>
};

type State = {
  pageMax: number,
  currentLastPost: number
};

class PostList extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      pageMax: 10,
      currentLastPost: 10
    };
  }

  static defaultProps = {
    blogs: []
  };

  componentWillMount() {
    fetchBlogs().then(data => {
      this.props.addBlogs(data);
    });
  }

  setNextPage = () => {
    this.state.currentLastPost < this.props.blogs.length &&
      this.setState({
        currentLastPost: this.state.currentLastPost + this.state.pageMax
      });
  };

  setPreviousPage = () => {
    this.state.currentLastPost !== 10 &&
      this.setState({
        currentLastPost: this.state.currentLastPost - this.state.pageMax
      });
  };

  render() {
    console.log("CURRENT STATE", this.state);
    console.log("ALL BLOGS", this.props.blogs);
    return (
      <Container>
        <Header>Attuned Blog</Header>

        <PostsContainer>
          <h2>
            Posts: {this.state.currentLastPost - this.state.pageMax} to{" "}
            {this.state.currentLastPost}
          </h2>
          {this.props.blogs
            .slice(
              this.state.currentLastPost - this.state.pageMax,
              this.state.currentLastPost
            )
            .map(post => {
              return <Post key={Math.random() * new Date()} post={post} />;
            })}
        </PostsContainer>

        <ButtonsContainer>
          <PageButton
            onClick={this.setPreviousPage}
            disabled={this.state.currentLastPost === 10}
          >
            Previous
          </PageButton>
          <PageButton
            onClick={this.setNextPage}
            disabled={this.state.currentLastPost >= this.props.blogs.length}
          >
            Next
          </PageButton>
        </ButtonsContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  log: console.log("REDUX STATE", state),
  blogs: state.blogs
});

const mapDispatchToProps = {
  addBlogs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
