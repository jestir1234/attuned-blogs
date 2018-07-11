// @flow
import React from "react";
import styled from "react-emotion";

const PostItemContainer = styled("div")(props => ({
  height: "200px",
  width: "100%"
}));

const PostHeader = styled("h3")(props => ({}));
const PostBody = styled("div")(props => ({}));

type Props = {
  post: {
    title: string,
    body: string
  }
};

const Post = ({ post: { title, body } }: Props) => {
  console.log(title, body);
  return (
    <PostItemContainer>
      <PostHeader>{title}</PostHeader>
      <PostBody>{body}</PostBody>
    </PostItemContainer>
  );
};

export default Post;
