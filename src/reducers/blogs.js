// @flow
import type { PostItem } from "../types";
const initialState = [];

type AddBlogsAction = {
  type: string,
  payload: Array<?PostItem>
};

const blogs = (
  state: Array<?Object> = initialState,
  action: AddBlogsAction
) => {
  switch (action.type) {
    case "ADD_BLOGS":
      return action.payload ? action.payload : state;
    default:
      return state;
  }
};

export default blogs;
