import { alertsReducer } from "../../reducer/alerts";
import { TYPES } from "../../redux/types";
import { setAlert } from "../../redux/actions/alerts";

describe("testing errors Reducer", () => {
  test("testing reducer alerts", () => {
    let initial = {
      status: false,
      msg: undefined,
    };
    let action = {
      type: TYPES.CREATE_ALERT,
      payload: {
        status: true,
        msg: "Up!!!!!! Error",
      },
    };
    const state = alertsReducer(initial, action);
    expect(state).toEqual(action.payload);
  });

  test("testing action alerts", () => {
    const alert = setAlert(true, "loading alert");
    const action = {
      type: "create/alert",
      payload: { status: true, msg: "loading alert" },
    };
    expect(alert).toEqual(action);
  });
});
