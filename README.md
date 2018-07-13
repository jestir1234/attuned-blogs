# Attuned Blogs

## Getting Started
- Clone the repo.
- CD into `/attuned-blogs` and run `yarn` to install the dependencies.
- Run `yarn start` to start the local server.
- View the App at http://localhost:3000/.

## App Structure

```
public/
    index.html
    manifest.json
src/
    actions/
        blogs.js
        index.js
    api/
        index.js
    components/
        Post/
            index.js
            styles.js
        PostList/
            index.js
            styles.js
        index.js
    reducers/
        blogs.js
        index.js
    store/
        index.js
    types/
        index.js
    App.js
    index.js
    index.css
    styles.css
```

## Technologies Used
- [React.js](https://reactjs.org/) for creating frontend components
- [Redux](https://redux.js.org/) for state management
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for requests
- [Emotion/React-Emotion](https://emotion.sh/) for styling with css-in-js
- [Flow](https://flow.org/en/docs/getting-started/) for type-checking
