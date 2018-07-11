const initialState = [];

const blogs = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOGS":
      return action.payload ? action.payload : state;
    default:
      return state;
  }
};

export default blogs;
