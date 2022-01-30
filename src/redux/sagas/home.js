import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import http from "../../configuration/http";
import { message } from "antd";
import { saveAs } from "file-saver";
import { URLS } from "../../configuration/urls";
import {
  DOWNLOAD_FILE,
  DOWNLOAD_FILE_SUCCESS,
  DOWNLOAD_FILE_FAILURE,
} from "../actions/home";

function* downloadFile(action) {
  const filename = "Sample File";
  try {
    const resp = yield call(http.get, `${URLS.SAMPLE_FILE}`, {
      //the following line is necessry when downloading pdfs
      responseType: "blob",
    });
    console.log("SAGAS:", resp);
    let blob = new Blob([resp.data], {
      //only the datatype below will work for pdf files
      type: "application/pdf;charset=utf-8",
    });
    saveAs(blob, filename);
    yield call(message.success, "File downloaded successfully");
    yield put({ type: DOWNLOAD_FILE_SUCCESS });
  } catch (e) {
    yield call(message.error, "Error!!!");
    yield put({ type: DOWNLOAD_FILE_SUCCESS });
  }
}

export default [takeEvery("DOWNLOAD_FILE", downloadFile)];
