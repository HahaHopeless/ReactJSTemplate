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

import translation_en from "../../translations/en.json";
import translation_de from "../../translations/de.json";

const messages = {
  en: translation_en,
  de: translation_de,
};

function* downloadFile(action) {
  const { lang } = action.payload;
  const filename = "Sample File";
  console.log(action.payload);
  try {
    const resp = yield call(http.get, `${URLS.SAMPLE_FILE}`, {
      //the following line is necessry when downloading pdfs
      responseType: "blob",
    });
    let blob = new Blob([resp.data], {
      //only the datatype below will work for pdf files
      type: "application/pdf;charset=utf-8",
    });
    saveAs(blob, filename);
    yield call(message.success, messages[lang]["downloadSuccess"]);
    yield put({ type: DOWNLOAD_FILE_SUCCESS });
  } catch (e) {
    yield call(message.error, messages[lang]["downloadFailure"]);
    yield put({ type: DOWNLOAD_FILE_FAILURE });
  }
}

export default [takeEvery("DOWNLOAD_FILE", downloadFile)];
