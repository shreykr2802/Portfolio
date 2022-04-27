import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import axios from "../axios/axios";
import { fetchContentDataSuccess, fetchContentDataFailed, fetchContentDataStart } from "../slices/contentSlice";
import { ResponseGenerator } from "../types";

export function* contentSaga(action: PayloadAction) {
    try {
        const response: ResponseGenerator = yield axios.get(`/blogs-data/${action.payload}`);
        yield put(fetchContentDataSuccess(response.data));
    } catch (error) {
        yield put(fetchContentDataFailed(error));
    }
}

export function* watchContentData() {
    yield takeLatest(fetchContentDataStart, contentSaga);
}


export default watchContentData;