import { combineReducers } from "redux";
import assetReducer from "./assetReducer";
import errorReducer from "./errorReducer";
import securityReducer from "./securityReducer";

export default combineReducers({
  errors: errorReducer,
  asset: assetReducer,
  security: securityReducer,
});
