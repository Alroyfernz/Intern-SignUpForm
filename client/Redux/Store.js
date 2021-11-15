import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./Reducer/userReducer";
const reducer = combineReducers({
  userLogin: userReducer,
});
const midleware = [thunk];
const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...midleware))
);
export default store;
