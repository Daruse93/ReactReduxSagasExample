import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects';

import PostApi from "../../service/rest-api/PostApi";

export default function* postSagas() {
    yield all([deviceDataFlow()]);
}

function* deviceDataFlow() {
    yield takeLatest('POSTS_GET', getPosts);
}

function* getPosts() {
    try {
        let response = yield call(PostApi.getPosts);
        yield put({
            type: 'POSTS_GET_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: 'POSTS_GET_ERROR',
        });
    }
}
