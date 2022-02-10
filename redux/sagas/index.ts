import { all } from "redux-saga/effects";
import watchBlogData from "./blogSaga";

function* rootSaga() {
    yield all([watchBlogData()])
}


export default rootSaga;