// @flow
import React from "react";
import { PostItemContainer, PostHeader, PostBody } from "./styles";
import type { PostItem } from "../../types";

const Post = ({ post: { title, body } }: PostItem) => (
  <PostItemContainer>
    <PostHeader>{title}</PostHeader>
    <PostBody>{body}</PostBody>
  </PostItemContainer>
);

export default Post;
