import { Provider } from "react-redux";
import { render } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../../../redux/store";
import { TYPES } from "../../../../redux/types";
import data_user from "../../../../data/data_user.json";
import data from "../../../../data/data.json";
import { Photos } from "../../../../components/Show/Details/Photos";

describe("testing to component <Photos/>", () => {
  test("snapshot to component", () => {
    store.dispatch({
      type: TYPES.LOAD,
      payload: data,
    });

    const wrapper = render(
      <MemoryRouter>
        <Provider store={store}>
          <Photos photos={data_user.photos} />
        </Provider>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
