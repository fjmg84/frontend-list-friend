import { TYPES } from "../redux/types";

const initialState = {
  status: false,
  msg: undefined,
};

export const alertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_ALERT:
      return {
        status: action.payload.status,
        msg: action.payload.msg,
      };

    default:
      return state;
  }
};
