import React from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { mount, render, shallow } from "enzyme";

import { Show } from "../../components/Show";
import { store } from "../../redux/store";
import { TYPES } from "../../redux/types";
import data_user from "../../data_user.json";
import data from "../../data.json";

describe("testing component <Show/>", () => {
  test("snapshot to component <Show/>", () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Provider store={store}>
          <Show />
        </Provider>
      </MemoryRouter>
    );
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
    await act(async () => {
      const wrapper = mount(
        <MemoryRouter>
          <Provider store={store}>
            <Show />
          </Provider>
        </MemoryRouter>
      );

      expect(wrapper.find(".loading").text()).toEqual("Testing to component");
    });
  });

  /* test("show data in component", async () => {
    const wrapper = render(
      <MemoryRouter>
        <Provider store={store}>
          <Show />
        </Provider>
      </MemoryRouter>
    );

    console.log(store.getState());
  }); */
});
