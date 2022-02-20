import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import axios from "../axios/axios";
import { clearResultFailed, clearResultStart, clearResultSuccess, insertNewBlogStart, insertNewBlogSuccess, insertNewTagFailed, insertNewTagStart, insertNewTagSuccess, updateATagFailed, updateATagStart, updateATagSuccess, updateBlogFailed, updateBlogStart, updateBlogSuccess } from "../slices/adminSlice";
import { ResponseGenerator } from "../types";

export function* adminNewTagSaga(action: PayloadAction<any>) {
    try {
        const response: ResponseGenerator = yield axios.post(`/admin/create-new-tag`, {
            "name": action.payload.name,
            "data": action.payload.base64,
            "priority": 1,
            "type": "tags"
        });
        yield put(insertNewTagSuccess(response.data));
    } catch (error) {
        yield put(insertNewTagFailed(error));
    }
}

export function* adminNewBlogSaga(action: PayloadAction<any>) {
    try {
        const response: ResponseGenerator = yield axios.post(`/admin/create-new-blog`, action.payload);
        yield put(insertNewBlogSuccess(response.data));
    } catch (error) {
        yield put(insertNewTagFailed(error));
    }
}

export function* updateBlogSaga(action: PayloadAction<any>) {
    try {
        const response: ResponseGenerator = yield axios.post(`/admin/update-a-blog`, action.payload);
        yield put(updateBlogSuccess(response.data));
    } catch (error) {
        yield put(updateBlogFailed(error));
    }
}

export function* adminUpdateTagSaga(action: PayloadAction<any>) {
    try {
        const response: ResponseGenerator = yield axios.post(`/admin/update-a-tag`, {
            "id": action.payload.id,
            "name": action.payload.name,
            "data": action.payload.base64,
            "priority": 1,
            "type": "tags",
            "isAttachment": action.payload.isAttachment
        });
        yield put(updateATagSuccess(response.data));
    } catch (error) {
        yield put(updateATagFailed(error));
    }
}

export function* adminClearResultSaga() {
    try {
        yield put(clearResultSuccess());
    } catch (err) {
        yield put(clearResultFailed("error while clearing results"))
    }
}

export function* watchAdmin() {
    yield takeLatest(insertNewTagStart, adminNewTagSaga);
    yield takeLatest(insertNewBlogStart, adminNewBlogSaga);
    yield takeLatest(updateBlogStart, updateBlogSaga);
    yield takeLatest(updateATagStart, adminUpdateTagSaga);
    yield takeLatest(clearResultStart, adminClearResultSaga);
}


export default watchAdmin;