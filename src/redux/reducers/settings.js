/*
All the initial states and state changes for the language are here. You can create 
a new file in the reducers folder for handling states in another page.
*/

import { SET_GLOBAL_LANGUAGE } from "../actions/settings";

const initialState = {
  lang:
    localStorage.getItem("lang") === null
      ? navigator.language.substring(0, 2)
      : localStorage.getItem("lang"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GLOBAL_LANGUAGE:
      localStorage.setItem("lang", action.payload);
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};
