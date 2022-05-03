import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import blogReducer from "../slices/blogSlice";
import tagReducer from "../slices/tagSlice";
import contentReucer from "../slices/contentSlice";

import appReducer from "../slices/appSlice";
import rootSaga from "../sagas";
import authReducer from "../slices/authSlice";
import adminReducer from "../slices/adminSlice";

const rootReducer = combineReducers({
    app: appReducer,
    blogs: blogReducer,
    tags: tagReducer,
    content: contentReucer,
    auth: authReducer,
    admin: adminReducer
});

export type RootState = ReturnType<typeof rootReducer>;
//@ts-ignore
const composeEnhancers = compose;
//typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

export default store;
