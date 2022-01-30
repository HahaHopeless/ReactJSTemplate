import { all } from "redux-saga/effects";
import mySaga from "./mySaga";
import home from "./home";

export default function* rootSaga() {
  yield all([...mySaga, ...home]);
}
