# Chalfal

[Reddit](https://www.reddit.com) clone (a social media site) made w/ MERN stack & Redux.
## Built using

- [ReactJS](https://reactjs.org/) - Frontend framework
- [Redux w/ useDispatch & useSelector hooks](https://redux.js.org/) - For state management
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) - For asynchronous actions
- [React Router](https://reactrouter.com/) - For general routing & navigation
- [Formik](https://formik.org/) - For flexible forms
- [Material-UI w/ lots of CSS customisations](https://material-ui.com/) - UI library
- [Yup](https://github.com/jquense/yup) - For form validation

## Features

- Authentication (login/register with username-password)
- CRUD posts & comments
- Add posts in the form of text, link or image
- Upvote/downvote posts & comments
- Dynamic URLs for users (u/Aman) & subreddits (r/reactjs)
- Sorting of posts on basis of algorithms like hot, top, controversial etc.
- Full database search feature
- Pagination of posts
- Error management to prevent app crashes
- Sort comments by oldest, newest, most upvoted etc.
- Avatar uploading for user profiles
- Toast notifications for actions: adding posts, deleting comments etc.
- Loading spinners for relevant fetching processes
- Dark mode toggle w/ local storage save
- Responsive UI for all screens

#### Client:

Open client/src/backendUrl.js & change "backend" variable to `"http://localhost:3005"` since server will be running on 3005 port.

```
cd client
npm install
npm start
```
