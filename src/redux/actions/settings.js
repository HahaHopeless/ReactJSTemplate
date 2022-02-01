//All actions for the language are here. You can create a new file in the actions folder for another page.

export const SET_GLOBAL_LANGUAGE = "SET_GLOBAL_LANGUAGE";

export const setGlobalLanguage = (payload) => {
  console.log(navigator.language);
  return {
    type: "SET_GLOBAL_LANGUAGE",
    payload,
  };
};
