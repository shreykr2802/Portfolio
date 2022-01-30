import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import appReducer from "../slices/appSlice";

const rootReducer = combineReducers({
    app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
//@ts-ignore
const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
