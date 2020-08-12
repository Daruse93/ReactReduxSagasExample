import { all } from 'redux-saga/effects';

import postSagas from "../redux/posts/sagas";
import userSagas from "../redux/users/sagas";

export default function* rootSaga() {
    yield all([
        postSagas(),
        userSagas(),
    ]);
}
