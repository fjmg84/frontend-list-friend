import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "../redux/actions/friends";
import { TYPES } from "../redux/types";

import { List } from "./List";

export const Index = () => {
  const dispatch = useDispatch();
  const { status, msg } = useSelector((state) => state.errorsReducer);

  useEffect(() => {
    getFriends()
      .then((friends) => {
        dispatch({ type: TYPES.LOAD, payload: friends });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: TYPES.ERROR_ACTIVE,
          payload: {
            status: true,
            msg: "Up!! Sorry. Not loading Friends :(",
          },
        });
      });
  }, [dispatch]);

  return (
    <>
      <div className="body">
        <h1>Friends</h1>
        {status && <div className="error">{msg}</div>}
        <div className="box">
          <List />
        </div>
      </div>
    </>
  );
};
