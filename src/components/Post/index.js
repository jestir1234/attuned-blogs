// @flow
import React from "react";
import { PostItemContainer, PostHeader, PostBody } from "./styles";

const Post = ({
  post: { title, body }
}: {
  post: { title: string, body: string }
}) => (
  <PostItemContainer>
    <PostHeader>{title}</PostHeader>
    <PostBody>{body}</PostBody>
  </PostItemContainer>
);

export default Post;
