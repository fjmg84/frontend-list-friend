import { TYPES } from "../types";

/**
 * It returns an object with a type property and a payload property
 * @param name - The name of the channel
 * @returns An object with a type and a payload.
 */
export const addChannel = (name) => {
  let id = new Date().getTime();
  return {
    type: TYPES.ADD_CHANNEL,
    payload: { id, name },
  };
};

/**
 * It returns an object with a type and a payload
 * @param id - The id of the channel that we want to set as active.
 * @returns An object with a type and a payload.
 */
export const activeChannel = (id) => {
  return {
    type: TYPES.ACTIVE_CHANNEL,
    payload: { id },
  };
};

/**
 * It returns an object with a type and a payload
 * @param id - The id of the channel that we want to set as active.
 * @returns An object with a type and a payload.
 */
export const removeChannel = (id) => {
  return {
    type: TYPES.REMOVE_CHANNEL,
    payload: { id },
  };
};
