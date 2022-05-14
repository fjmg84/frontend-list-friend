import { createStore, combineReducers } from "redux";
import { friendsReducer } from "../reducer/friends";
import { alertsReducer } from "../reducer/alerts";

const rootReducers = combineReducers({
  friendsReducer,
  alertsReducer,
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
