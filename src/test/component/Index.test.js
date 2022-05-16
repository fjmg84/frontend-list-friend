import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount, shallow, render } from "enzyme";
import { Provider } from "react-redux";
import { Index } from "../../components/Index";
import { store } from "../../redux/store";
import { getFriends } from "../../redux/actions/friends";
import data from "../../data.json";
import { TYPES } from "../../redux/types";
jest.mock("../../redux/actions/friends");

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
