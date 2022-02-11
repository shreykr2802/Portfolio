import { put, takeLatest } from "redux-saga/effects";
import axios from "../axios/axios";
import { fetchBlogDataSuccess, fetchBlogDataFailed, fetchBlogDataStart } from "../slices/blogSlice";
import { ResponseGenerator } from "../types";

export function* blogSaga() {
    try {
        const response: ResponseGenerator = yield axios.get("/blogs");
        yield put(fetchBlogDataSuccess(response.data));
    } catch (error) {
        yield put(fetchBlogDataFailed(error));
    }
}

export function* watchBlogData() {
    yield takeLatest(fetchBlogDataStart, blogSaga);
}


export default watchBlogData;