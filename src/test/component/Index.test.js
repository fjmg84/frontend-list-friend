import React from "react";
import { Index } from "../../components/Index";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { MemoryRouter } from "react-router-dom";

describe("testing component <Index/>", () => {
  test("shallow component <Index/>", () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Provider store={store}>
          <Index />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("mount component <Index/>", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <Index />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
