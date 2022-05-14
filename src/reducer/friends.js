import { TYPES } from "../redux/types";
const initialState = [];

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOAD:
      return action.payload;
    default:
      return state;
  }
};
