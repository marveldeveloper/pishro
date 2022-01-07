import { combineReducers, createStore } from "redux";
import loading from "./reducers/loading";
import isLogin from "./reducers/isLogin";
import showSidebar from "./reducers/showSidebar";
const rootReducer = combineReducers({
  loading,
  isLogin,
  showSidebar,
});
const store = createStore(rootReducer);
export default store;
