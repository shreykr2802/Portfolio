import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import blogReducer from "../slices/blogSlice";

import appReducer from "../slices/appSlice";
import watchBlogData from "../sagas";

const rootReducer = combineReducers({
    app: appReducer,
    blogs: blogReducer
});

export type RootState = ReturnType<typeof rootReducer>;
//@ts-ignore
const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(watchBlogData)

export default store;
