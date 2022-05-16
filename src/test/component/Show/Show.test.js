import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "enzyme";
import { Show } from "../../../components/Show/Show";
import { store } from "../../../redux/store";
import { TYPES } from "../../../redux/types";
import { findOneFriend } from "../../../redux/actions/friends.js";
import data from "../../../data/data.json";
import { waitFor } from "@testing-library/react";
jest.mock("../../../redux/actions/friends.js");

describe("testing component <Show/>", () => {
  test("snapshot to component", async () => {
    store.dispatch({
      type: TYPES.LOAD,
      payload: data,
    });

    const wrapper = render(
      <MemoryRouter initialEntries={["/show/1"]}>
        <Provider store={store}>
          <Routes>
            <Route path="/show/:id" element={<Show />}></Route>
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    await waitFor(() => findOneFriend(1));

    expect(wrapper).toMatchSnapshot();
  });

  test("render tag alert in component", async () => {
    store.dispatch({
      type: TYPES.CREATE_ALERT,
      payload: {
        status: true,
        msg: "Testing to component",
        classAlert: "loading",
      },
    });

    const wrapper = render(
      <MemoryRouter>
        <Provider store={store}>
          <Show />
        </Provider>
      </MemoryRouter>
    );

    await waitFor(() => findOneFriend(1));

    expect(wrapper.find(".loading").text()).toEqual("Testing to component");
  });
});
