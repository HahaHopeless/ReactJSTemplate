export const DOWNLOAD_FILE = "DOWNLOAD_FILE";
export const DOWNLOAD_FILE_SUCCESS = "DOWNLOAD_FILE_SUCCESS";
export const DOWNLOAD_FILE_FAILURE = "DOWNLOAD_FILE_FAILURE";

export const downloadFile = (payload) => {
  return {
    type: "DOWNLOAD_FILE",
    payload,
  };
};
export const downloadFileSuccess = (payload) => {
  return {
    type: "DOWNLOAD_FILE_SUCCESS",
  };
};
export const downloadFileFailure = (payload) => {
  return {
    type: "DOWNLOAD_FILE_FAILURE",
  };
};
