import { errorsReducer } from "../../reducer/errors";
import { TYPES } from "../../redux/types";
describe("testing errors Reducer", () => {
  test("return error", () => {
    let initial = {
      loading: false,
      msgError: undefined,
    };
    let action = {
      type: TYPES.ERROR_ACTIVE,
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
