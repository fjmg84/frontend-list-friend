import { createStore, combineReducers } from "redux";
import { friendsReducer } from "../reducer/friends";
import { errorsReducer } from "../reducer/errors";

const rootReducers = combineReducers({
  friendsReducer,
  errorsReducer,
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
