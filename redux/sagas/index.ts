import { all } from "redux-saga/effects";
import watchAdmin from "./adminSaga";
import watchAuth from "./authSaga";
import watchBlogData from "./blogSaga";
import watchContentData from "./contentSaga";
import watchTagData from "./tagSaga";

function* rootSaga() {
    yield all([watchBlogData(), watchTagData(), watchContentData(), watchAuth(), watchAdmin()])
}


export default rootSaga;