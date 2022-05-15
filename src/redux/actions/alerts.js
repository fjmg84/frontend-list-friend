import { TYPES } from "../types";

export const setAlert = (status, msg, classAlert) => {
  return {
    type: TYPES.CREATE_ALERT,
    payload: {
      status,
      msg,
      classAlert,
    },
  };
};
