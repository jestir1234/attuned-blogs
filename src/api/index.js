// @flow

export const fetchBlogs = () =>
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json().then(responseJSON => responseJSON))
    .catch(err => console.error(err));
