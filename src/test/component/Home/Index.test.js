import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "enzyme";
import { Provider } from "react-redux";
import { Index } from "../../../components/Home/Index";
import { store } from "../../../redux/store";
import data from "../../../data/data.json";
import { TYPES } from "../../../redux/types";

describe("testing component <Index/>", () => {
  test("snapshot to component <Index/>", () => {
    store.dispatch({
      type: TYPES.LOAD,
      payload: data,
    });

    const wrapper = render(
      <MemoryRouter>
        <Provider store={store}>
          <Index />
        </Provider>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
