import { TYPES } from "../types";

/**
 * It returns an object with a type and a payload
 * @param username - The username of the user who sent the message.
 * @param message - The message that the user has typed in the input field.
 * @param channel - The channel that the message is being sent to.
 * @returns An object with a type and a payload.
 */
export const addMessage = (username, message, channel) => {
  let id = new Date().getTime();
  return {
    type: TYPES.ADD_MESSAGE,
    payload: {
      id,
      who: "me",
      username,
      message,
      channel,
      dateMessage: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
    },
  };
};

/**
 * It returns an object with a type property and a payload property
 * @param id - The id of the message to edit.
 * @returns An object with a type and a payload.
 */
export const editMessage = (id) => {
  return {
    type: TYPES.EDIT_MESSAGE,
    payload: { id },
  };
};

/**
 * It returns an object with a type and a payload
 * @param channel - The channel that the message was sent to.
 * @returns An object with a type and a payload.
 */
export const removeMessageThisChannel = (channel) => {
  return {
    type: TYPES.REMOVE_MESSAGE_THIS_CHANNEL,
    payload: { channel },
  };
};

/**
 * It returns an object with a type and a payload
 * @param id - The id of the message to remove.
 * @returns An object with a type and a payload.
 */
export const removeMessage = (id) => {
  return {
    type: TYPES.REMOVE_MESSAGE,
    payload: { id },
  };
};

/**
 * It returns a promise that resolves to an object with a type and a payload
 * @param channel - The channel to which the message belongs.
 * @returns A promise that resolves to an object with a type and payload.
 */
export const loadMessage = (channel) => {
  return new Promise((resolve, reject) => {
    resolve({
      type: TYPES.ADD_MESSAGE,
      payload: {
        id: new Date().getTime(),
        who: "he",
        username: "leo",
        channel,
        message:
          "Body Message Body MessageBody MessageBody MessageBody Message Body Message Body MessageBody MessageBody MessageBody Message",
        dateMessage: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      },
    });
    reject("error loading message");
  });
};
