import { alertsReducer } from "../../reducer/alerts";
import { TYPES } from "../../redux/types";
import { setAlert } from "../../redux/actions/alerts";

describe("testing errorsReducer", () => {
  test("testing reducer alerts", () => {
    let action = {
      type: TYPES.CREATE_ALERT,
      payload: {
        status: true,
        msg: "Up!!!!!! Error",
        classAlert: "error",
      },
    };
    const state = alertsReducer({}, action);
    expect(state).toEqual(action.payload);
  });

  test("testing action alerts", () => {
    const createAlert = setAlert(true, "loading alert", "loading");
    expect(createAlert).toEqual({
      type: TYPES.CREATE_ALERT,
      payload: {
        status: true,
        msg: "loading alert",
        classAlert: "loading",
      },
    });
  });
});
