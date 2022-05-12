import { createStore, combineReducers } from "redux";
/* import { authReducer } from "../reducers/authReducer";
import { channelReducer } from "../reducers/channelReducer";
import { messageReducer } from "../reducers/messageReducer"; */

const rootReducers = combineReducers({
  /*   authReducer,
  channelReducer,
  messageReducer, */
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
