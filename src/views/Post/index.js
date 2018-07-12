// @flow
import React from "react";
import { PostItemContainer, PostHeader, PostBody } from "./styles";

type Props = {
  post: {
    title: string,
    body: string
  }
};

const Post = ({ post: { title, body } }: Props) => {
  return (
    <PostItemContainer>
      <PostHeader>{title}</PostHeader>
      <PostBody>{body}</PostBody>
    </PostItemContainer>
  );
};

export default Post;
