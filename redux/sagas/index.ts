import { takeEvery } from "redux-saga/effects";
import blogSaga from "./blogSaga";
import { fetchBlogDataStart } from "../slices/blogSlice";

export function* watchBlogData() {
    yield takeEvery(fetchBlogDataStart, blogSaga);
}

export default watchBlogData;