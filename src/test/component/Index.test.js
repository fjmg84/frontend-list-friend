import React from "react";
import { Index } from "../../components/Index";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("testing component <Index/>", () => {
  test("shallow component <Index/>", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Index />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("mount component <Index/>", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Index />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
