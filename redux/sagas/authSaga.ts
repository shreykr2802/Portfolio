import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import axios from "../axios/axios";
import { fetchAuthFailed, fetchAuthStart, fetchAuthSuccess } from "../slices/authSlice";
import { ResponseGenerator } from "../types";

export function* authSaga(action: PayloadAction<{ username: string, password: string }>) {
    try {
        const response: ResponseGenerator = yield axios.post(`/auth`, {
            "username": action.payload.username,
            "password": action.payload.password
        });
        yield put(fetchAuthSuccess(response.data.token));
        yield localStorage.setItem("accessToken", response.data.token)
    } catch (error) {
        yield put(fetchAuthFailed(error));
    }
}

export function* watchAuth() {
    yield takeLatest(fetchAuthStart, authSaga);
}


export default watchAuth;