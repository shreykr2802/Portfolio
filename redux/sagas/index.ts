import { all } from "redux-saga/effects";
import watchBlogData from "./blogSaga";
import watchContentData from "./contentSaga";
import watchTagData from "./tagSaga";

function* rootSaga() {
    yield all([watchBlogData(), watchTagData(), watchContentData()])
}


export default rootSaga;