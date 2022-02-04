import { put } from "redux-saga/effects";
import axios from "../axios/axios";

import { fetchBlogDataSuccess, fetchBlogDataFailed } from "../slices/blogSlice";

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
        yield put(fetchBlogDataSuccess(response.data));
    } catch (error) {
        yield put(fetchBlogDataFailed(error));
    }
}

export default blogSaga;