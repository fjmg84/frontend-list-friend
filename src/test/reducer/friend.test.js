import { getFriends } from "../../redux/actions/friends";
import { friendsReducer } from "../../reducer/friends";
import { TYPES } from "../../redux/types";
import data from "../../data.json";

describe("Testing Friend Action", () => {
  test("return an array of object with list of friends", (done) => {
    getFriends().then((friend) => expect(friend).toEqual(data));
    done();
  });

  test("create store with list of friends", () => {
    const action = { type: TYPES.LOAD, payload: data };
    const store = friendsReducer({}, action);

    expect(store.length).toEqual(data.length);
  });
});
