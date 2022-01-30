/*
This is you Redux store. You don't have to do much here though. Just leave it as it is and if you create
a new reducer, just add it in reducers->index.js file.
*/

import rootReducer from "./reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import promise from "redux-promise";
import rootSagas from "./sagas";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(promise, sagaMiddleWare)
);
sagaMiddleWare.run(rootSagas);

export default store;
