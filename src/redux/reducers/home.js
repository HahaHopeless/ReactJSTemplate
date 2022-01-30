import {
  DOWNLOAD_FILE,
  DOWNLOAD_FILE_SUCCESS,
  DOWNLOAD_FILE_FAILURE,
} from "../actions/home";

const initialState = {
  isFileDownloadSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_FILE:
      return {
        ...state,
        isFileDownloadSuccess: true,
      };
    case DOWNLOAD_FILE_SUCCESS:
      return {
        ...state,
        isFileDownloadSuccess: false,
      };
    case DOWNLOAD_FILE_FAILURE:
      return {
        ...state,
        isFileDownloadSuccess: false,
      };
    default:
      return state;
  }
};
