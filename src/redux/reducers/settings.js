/*
All the initial states and state changes for the language are here. You can create 
a new file in the reducers folder for handling states in another page.
*/

import {
  SET_GLOBAL_LANGUAGE,
  SET_GLOBAL_COOKIES,
  SET_COOKIES_DIALOG_VISIBILITY,
} from "../actions/settings";

const initialState = {
  lang:
    localStorage.getItem("lang") === null
      ? navigator.language.substring(0, 2)
      : localStorage.getItem("lang"),

  areCookiesAccepted:
    localStorage.getItem("cookies") === null ||
    typeof localStorage.getItem("cookies") === "undefined"
      ? false
      : JSON.parse(localStorage.getItem("cookies")),

  isCookiesDialogVisible:
    localStorage.getItem("cookies") === null ||
    typeof localStorage.getItem("cookies") === "undefined"
      ? true
      : false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GLOBAL_LANGUAGE:
      if (state.areCookiesAccepted === true) {
        localStorage.setItem("lang", action.payload);
      }
      return {
        ...state,
        lang: action.payload,
      };
    case SET_GLOBAL_COOKIES:
      localStorage.setItem("cookies", true);
      return {
        ...state,
        areCookiesAccepted: true,
        isCookiesDialogVisible: false,
      };
    case SET_COOKIES_DIALOG_VISIBILITY:
      return {
        ...state,
        isCookiesDialogVisible: false,
        areCookiesAccepted: true,
      };
    default:
      return state;
  }
};
