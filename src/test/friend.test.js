import { getFriends } from "../redux/actions/friends";
import { friendsReducer } from "../reducer/friends";
import { TYPES } from "../redux/types";
import data from "../data.json";

describe("Testing Friend Action", () => {
  test("return an array of object with list of friends", (done) => {
    getFriends().then((friend) => expect(friend).toEqual(data));
    done();
  });

  test("return new store. add new friend to store", () => {
    const newFriends = {
      id: 7,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg",
      first_name: "Jeremy",
      last_name: "Davis",
      status: "At work...",
      available: false,
    };
    const action = { type: TYPES.LOAD, payload: newFriends };
    const store = friendsReducer(data, action);
    expect(store.length).toEqual(7);
  });
});
