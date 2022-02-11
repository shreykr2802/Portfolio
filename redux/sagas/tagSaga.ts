import { put, takeLatest } from "redux-saga/effects";
import axios from "../axios/axios";
import { fetchTagDataSuccess, fetchTagDataFailed, fetchTagDataStart } from "../slices/tagSlice";
import { ResponseGenerator } from "../types";

export function* tagSaga() {
    try {
        const response: ResponseGenerator = yield axios.get("/tags");
        yield put(fetchTagDataSuccess(response.data));
    } catch (error) {
        yield put(fetchTagDataFailed(error));
    }
}

export function* watchTagData() {
    yield takeLatest(fetchTagDataStart, tagSaga);
}


export default watchTagData;