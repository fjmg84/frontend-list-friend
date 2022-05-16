import { Provider } from "react-redux";
import { render } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../../../redux/store";
import { TYPES } from "../../../../redux/types";
import data_user from "../../../../data/data_user.json";
import data from "../../../../data/data.json";
import { Info } from "../../../../components/Show/Details/Info";

describe("testing to component <Info/>", () => {
  test("snapshot to component", () => {
    store.dispatch({
      type: TYPES.LOAD,
      payload: data,
    });

    const wrapper = render(
      <MemoryRouter>
        <Provider store={store}>
          <Info friend={data_user} />
        </Provider>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
