import { TYPES } from "../types";

/**
 * It takes a username, creates a payload object, saves the payload to localStorage, and returns an
 * action object with the payload.
 * @param username - The username of the user that is logging in.
 * @returns An object with a type and a payload.
 */
export const login = (username) => {
  const payload = {
    username: username,
    avatar: "ok",
  };
  window.localStorage.setItem("login", JSON.stringify(payload));
  return {
    type: TYPES.LOGIN,
    payload,
  };
};

/**
 * It removes the login key from localStorage and returns an action object with the type LOGOUT and a
 * payload of an object with username and avatar keys set to empty strings
 * @returns An object with a type and a payload.
 */
export const logout = () => {
  window.localStorage.removeItem("login");
  return {
    type: TYPES.LOGOUT,
    payload: {
      username: "",
      avatar: "",
    },
  };
};
