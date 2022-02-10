import { put, takeLatest } from "redux-saga/effects";
import axios from "../axios/axios";

import { fetchBlogDataSuccess, fetchBlogDataFailed, fetchBlogDataStart } from "../slices/blogSlice";

interface ResponseGenerator {
    config?: any;
    data?: any;
    headers?: any;
    request?: any;
    status?: number;
    statusText?: string;
}

export function* blogSaga() {
    try {
        const response: ResponseGenerator = yield axios.get("/blogs");
        console.log(response);
        yield put(fetchBlogDataSuccess(response.data));
    } catch (error) {
        yield put(fetchBlogDataFailed(error));
    }
}

export function* watchBlogData() {
    yield takeLatest(fetchBlogDataStart, blogSaga);
}


export default watchBlogData;