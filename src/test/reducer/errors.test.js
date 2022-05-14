import { errorsReducer } from "../../reducer/alerts";
import { TYPES } from "../../redux/types";
import { setAlert } from "../../redux/actions/error";

describe("testing errors Reducer", () => {
  test("return error", () => {
    let initial = {
      loading: false,
      msgError: undefined,
    };
    let action = {
      type: TYPES.CREATE_ALERT,
      payload: {
        status: true,
        msg: "Up!!!!!! Error",
      },
    };
    const state = errorsReducer(initial, action);
    console.log(state);
    expect(state).toEqual(action.payload);
  });
});
