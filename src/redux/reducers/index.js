/*
Before coming here, make sure you have created a new reducer and then add it below in combineReducers({ })
The redux store will pick up all reducers for the app from this file. If you dont include a reducer here, it won't work.
*/

import { combineReducers } from "redux";
import settings from "./settings";
import home from "./home";

const rootReducer = combineReducers({ settings, home });

export default rootReducer;
