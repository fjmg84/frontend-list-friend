import React from "react";
import { List } from "../../components/List";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { TYPES } from "../../redux/types";
import { MemoryRouter } from "react-router-dom";

describe("testing component <List/>", () => {
  test("snapshot to component <List/>", () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Provider store={store}>
          <List />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("exists data list of user in component <List/>", async () => {
    const state = [
      {
        id: 1,
        img: "https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg",
        first_name: "Jeremy",
        last_name: "Davis",
        status: "At work...",
        available: true,
      },
    ];

    store.dispatch({
      type: TYPES.LOAD,
      payload: state,
    });

    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <List />
        </Provider>
      </MemoryRouter>
    );

    const btn = wrapper.find("li").at(0);
    expect(btn.exists()).toEqual(true);
  });
});
//https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/Dev-Test?node-id=1%3A2
