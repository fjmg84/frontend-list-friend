import { TYPES } from "../types";

export const setAlert = (status, msg) => {
  return {
    type: TYPES.CREATE_ALERT,
    payload: {
      status,
      msg,
    },
  };
};
