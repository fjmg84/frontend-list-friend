import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardBackspace } from "react-icons/md";
import { findOneFriend } from "../redux/actions/friends";
import { setAlert } from "../redux/actions/alerts";
import img from "../photo.jpg";
import { Info } from "./infoFriend/Info";
import { Photos } from "./infoFriend/Photos";

export const Show = () => {
  let { id, status: statusOfFriend } = useParams();
  const dispatch = useDispatch();
  const { status, msg, classAlert } = useSelector(
    (state) => state.alertsReducer
  );

  const [view, setView] = useState(true);
  const [friend, setFriend] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setAlert(true, "Loading...", "loading"));
    findOneFriend(id)
      .then((friend) => {
        setFriend(friend);
        dispatch(setAlert(false, undefined));
      })
      .catch((err) => {
        console.error(err);
        dispatch(
          setAlert(true, "Up!!! Sorry. Not Found data of this friend.", "error")
        );
      });
  }, [id, dispatch]);

  const handleView = () => {
    setView(!view);
  };

  const handleNavegation = () => {
    navigate("/");
  };

  return (
    <div className="box">
      <div className="icons icons-blue arrow">
        <span className="fill vector" onClick={() => handleNavegation()}>
          <MdKeyboardBackspace size={24} />
        </span>
      </div>

      <div className="body">
        <div className="header">
          <h1>Friend</h1>
          {status && <div className={classAlert}>{msg}</div>}
        </div>

        <div className="main">
          <div className="show-card">
            <div className="show-card-img">
              <img src={img} alt={friend.img} className="medium" />
              <span className="availability eclipse available"></span>
            </div>
            <div className="show-card-content">
              <p>{`${friend.first_name} ${friend?.last_name}`}</p>
              <div className="show-card-header-status">
                <span>{statusOfFriend}</span>
              </div>

              <div className="show-card-box-data">
                <div className="nav">
                  <div className={`tab1 ${view ? "active" : "inactive"}`}>
                    <span onClick={() => handleView()}>Info</span>
                    <span className={`${view ? "line" : ""}`}></span>
                  </div>
                  <div className={`tab2 ${!view ? "active" : "inactive"}`}>
                    <span onClick={() => handleView()}>Photos</span>
                    <span className={`${!view ? "line" : ""}`}></span>
                  </div>
                </div>

                <div className="section">
                  {view ? (
                    <Info friend={friend} />
                  ) : (
                    <Photos photos={friend.photos} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
