import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects';

import UserApi from "../../service/rest-api/UserApi";

export default function* userSagas() {
    yield all([userDataFlow()]);
}

function* userDataFlow() {
    yield takeLatest('USERS_GET', getUsers);
}

function* getUsers() {
    try {
        let response = yield call(UserApi.getUsers);
        yield put({
            type: 'USERS_GET_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: 'POSTS_GET_ERROR',
        });
    }
}
