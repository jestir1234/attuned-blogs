// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../../api";
import Post from "../Post";
import { addBlogs } from "../../actions";
import {
  Container,
  PostsContainer,
  ButtonsContainer,
  PageButton
} from "./styles";

type Props = {
  blogs: array<?Object>,
  searchString: string
};

type State = {
  pageMax: number,
  currentLastPost: number
};

class PostList extends Component<Props, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      pageMax: 10, // Maximum posts per page.
      currentLastPost: 10 // Count of the last post on the page.
    };
  }

  static defaultProps = {
    blogs: [],
    searchString: ""
  };

  componentWillMount() {
    // Fetch blogs when the page is about to be rendered.
    fetchBlogs().then(data => {
      // Update Redux store with blogs.
      this.props.addBlogs(data);
    });
  }

  componentWillReceiveProps(nextProps: Object) {
    // Reset the current last post if its greater than the number of blogs
    if (
      nextProps.blogs.length <
      this.state.currentLastPost - this.state.pageMax + 1
    ) {
      this.setState({ currentLastPost: 10 });
    }
  }

  setNextPage = () => {
    // Update to the next 10 posts if we haven't reached the end of the posts list.
    this.state.currentLastPost < this.props.blogs.length &&
      this.setState({
        currentLastPost: this.state.currentLastPost + this.state.pageMax
      });
  };

  setPreviousPage = () => {
    // Update to the previous 10 posts if we haven't reached the beginning of the posts list.
    this.state.currentLastPost !== 10 &&
      this.setState({
        currentLastPost: this.state.currentLastPost - this.state.pageMax
      });
  };

  render() {
    console.log("CURRENT STATE", this.state);
    let startingPostOnPage = this.props.blogs.length
      ? this.state.currentLastPost - this.state.pageMax + 1
      : 0;
    let lastPostOnPage =
      this.state.currentLastPost > this.props.blogs.length
        ? this.props.blogs.length
        : this.state.currentLastPost;
    return (
      <Container>
        <PostsContainer>
          <h2>
            Posts: {startingPostOnPage} to {lastPostOnPage}
          </h2>
          <h3>Total Posts: {this.props.blogs.length}</h3>
          {this.props.blogs
            .slice(
              this.state.currentLastPost - this.state.pageMax,
              this.state.currentLastPost
            )
            .map(post => {
              return <Post key={post.id} post={post} />;
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

const filterBlogs = (blogs: array<Object>, searchString: string) => {
  if (!searchString) {
    return blogs;
  }

  return blogs.filter(post => {
    return (
      post.title.includes(searchString) || post.body.includes(searchString)
    );
  });
};

const mapStateToProps = (state: Object, { searchString }: string) => {
  return {
    blogs: filterBlogs(state.blogs, searchString)
  };
};

const mapDispatchToProps = {
  addBlogs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
