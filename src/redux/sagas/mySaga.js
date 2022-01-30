import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { message } from "antd";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    // const user = yield call(Api.fetchUser, action.payload.userId);
    // yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
    yield call(message.success, "Success!!!");
  } catch (e) {
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
    yield call(message.error, "Error!!!");
  }
}

export default [takeEvery("USER_FETCH_REQUESTED", fetchUser)];
