// @flow

import type { PostItem } from "../types";

export const addBlogs = (payload: Array<?PostItem>) => ({
  type: "ADD_BLOGS",
  payload
});
