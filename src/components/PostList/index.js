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
import type { PostItem } from "../../types";

type Props = {
  blogs: Array<?PostItem>,
  searchString: String,
  addBlogs: (payload?: Array<?PostItem>) => void
};

type State = {
  pageMax: number,
  currentLastPost: number
};

class PostList extends Component<Props, State> {
  constructor(props: Object) {
    super(props);
    this.state = {
      pageMax: 10, // Maximum posts per page.
      currentLastPost: 10 // Count of the last post on the page.
    };
  }

  static defaultProps = {
    blogs: [],
    searchString: "",
    addBlogs: () => ({})
  };

  componentWillMount() {
    // Fetch blogs when the page is about to be rendered.
    fetchBlogs().then((data?: Array<?PostItem>) => {
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
    // Navigate to the next page of posts if we haven't reached the end of the posts list.
    this.state.currentLastPost < this.props.blogs.length &&
      this.setState({
        currentLastPost: this.state.currentLastPost + this.state.pageMax
      });
  };

  setPreviousPage = () => {
    // Navigate to the previous page of posts if we haven't reached the beginning of the posts list.
    this.state.currentLastPost !== 10 &&
      this.setState({
        currentLastPost: this.state.currentLastPost - this.state.pageMax
      });
  };

  render() {
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
            .map((post: PostItem) => <Post key={post.id} post={post} />)}
        </PostsContainer>

        <ButtonsContainer>
          <PageButton
            role="presentation"
            onClick={this.setPreviousPage}
            disabled={this.state.currentLastPost === 10}
          >
            Previous
          </PageButton>
          <PageButton
            role="presentation"
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

const filterBlogs = (blogs: Array<PostItem>, searchString: String) => {
  if (!searchString) {
    return blogs;
  }
  // Filter post titles and body with search string
  return blogs.filter(
    post =>
      post.title.includes(searchString) || post.body.includes(searchString)
  );
};

const mapStateToProps = (state: Object, { searchString }) => ({
  blogs: filterBlogs(state.blogs, searchString)
});

const mapDispatchToProps = {
  addBlogs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
