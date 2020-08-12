import { combineReducers } from 'redux';

import posts from "../redux/posts/reducer";
import users from "../redux/users/reducer";

export default combineReducers({
    posts,
    users
});
