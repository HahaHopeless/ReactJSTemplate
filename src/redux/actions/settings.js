//All actions for the language are here. You can create a new file in the actions folder for another page.

export const SET_GLOBAL_LANGUAGE = "SET_GLOBAL_LANGUAGE";
export const SET_GLOBAL_COOKIES = "SET_GLOBAL_COOKIES";
export const SET_COOKIES_DIALOG_VISIBILITY = "SET_COOKIES_DIALOG_VISIBILITY";

export const setGlobalLanguage = (payload) => {
  return {
    type: "SET_GLOBAL_LANGUAGE",
    payload,
  };
};

export const setGlobalCookies = (payload) => {
  return {
    type: "SET_GLOBAL_COOKIES",
    payload,
  };
};

export const setCookiesDialogVisibility = (payload) => {
  return {
    type: "SET_COOKIES_DIALOG_VISIBILITY",
    payload,
  };
};
