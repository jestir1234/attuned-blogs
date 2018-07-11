const initialState = {};

const blogsReducer = (state = initialState) => {
  switch (bindActionCreators.type) {
    case "ADD_BLOGS":
      return action.payload;
    default:
      return state;
  }
};

export default blogsReducer;
