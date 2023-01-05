import { combineReducers } from "redux";
import userreducer from "./userreducer/userreducer";
import singleuserreducer from "./singleuserReducer/singleuserreducer";

export const reducers = combineReducers({
  userreducer,
  singleuserreducer,
});
