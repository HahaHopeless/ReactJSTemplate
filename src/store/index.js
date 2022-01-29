/*
This is you Redux store. You don't have to do much here though. Just leave it as it is and if you create
a new reducer, just add it in reducers->index.js file.
*/

import rootReducer from "../reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    )
  );
  return store;
};

export default configureStore;
