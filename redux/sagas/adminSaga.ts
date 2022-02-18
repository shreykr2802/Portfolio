import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import axios from "../axios/axios";
import { insertNewBlogStart, insertNewBlogSuccess, insertNewTagFailed, insertNewTagStart, insertNewTagSuccess, updateBlogFailed, updateBlogStart, updateBlogSuccess } from "../slices/adminSlice";
import { ResponseGenerator } from "../types";

export function* adminNewTagSaga(action: PayloadAction<any>) {
    try {
        const response: ResponseGenerator = yield axios.post(`/admin/create-new-tag`, {
            "name": action.payload.name
        });
        const attachmentRes: ResponseGenerator = yield axios.post('/attachment/upload-attachment', {
            "data": action.payload.base64,
            "content_type": "data:image/webp;base64,",
            "parent_id": response.data.insertId,
            "priority": 1,
            "type": "tags"
        });
        yield put(insertNewTagSuccess(attachmentRes.data));
    } catch (error) {
        yield put(insertNewTagFailed(error));
    }
}

export function* adminNewBlogSaga(action: PayloadAction<any>) {
    try {
        const response: ResponseGenerator = yield axios.post(`/admin/create-new-blog`, action.payload);
        // const attachmentRes: ResponseGenerator = yield axios.post('/attachment/upload-attachment', {
        //     "data": action.payload.base64,
        //     "content_type": "data:image/webp;base64,",
        //     "parent_id": response.data.insertId,
        //     "priority": 1,
        //     "type": "tags"
        // });
        yield put(insertNewBlogSuccess(response.data));
    } catch (error) {
        yield put(insertNewTagFailed(error));
    }
}

export function* updateBlogSaga(action: PayloadAction<any>) {
    try {
        const response: ResponseGenerator = yield axios.post(`/admin/update-a-blog`, action.payload);
        // const attachmentRes: ResponseGenerator = yield axios.post('/attachment/upload-attachment', {
        //     "data": action.payload.base64,
        //     "content_type": "data:image/webp;base64,",
        //     "parent_id": response.data.insertId,
        //     "priority": 1,
        //     "type": "tags"
        // });
        yield put(updateBlogSuccess(response.data));
    } catch (error) {
        yield put(updateBlogFailed(error));
    }
}

export function* watchAdmin() {
    yield takeLatest(insertNewTagStart, adminNewTagSaga);
    yield takeLatest(insertNewBlogStart, adminNewBlogSaga);
    yield takeLatest(updateBlogStart, updateBlogSaga);
}


export default watchAdmin;