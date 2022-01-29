import { SET_GLOBAL_LANGUAGE } from "../actions/lang";

const initialState = {
  lang:
    localStorage.getItem("lang") === null ? "en" : localStorage.getItem("lang"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GLOBAL_LANGUAGE:
      console.log("Language set to:", action.payload);
      localStorage.setItem("lang", action.payload);
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};
