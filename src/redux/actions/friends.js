import axios from "axios";

import data from "../../data.json";

export const getFriends = async () => {
  /* let url = "http://private-5bdb3-friendmock.apiary-mock.com/friends";
  const friends = await axios.get(url); */
  return data;
};
