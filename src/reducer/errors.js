import { TYPES } from "../redux/types";

const initialState = {
  status: false,
  msg: undefined,
};

export const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ERROR_ACTIVE:
      return {
        status: action.payload.status,
        msg: action.payload.msg,
      };

    default:
      return state;
  }
};
