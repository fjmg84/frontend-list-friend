import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findOneFriend } from "../redux/actions/friends";
import { setAlert } from "../redux/actions/alerts";
import img from "../photo.jpg";

export const Show = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { status, msg } = useSelector((state) => state.alertsReducer);
  const friends = useSelector((state) => state.friendsReducer);
  const [statusOfTheFriend, setStatusOfTheFriend] = useState(() => {
    return friends?.filter((f) => f.id === +id)[0].status;
  });

  const [view, setView] = useState(true);
  const [friend, setFriend] = useState({});
  const bio = "";
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setAlert(true, "loading..."));
    findOneFriend(id)
      .then((friend) => {
        setFriend(friend);
        dispatch(setAlert(false, undefined));
      })
      .catch((err) => {
        console.error(err);
        dispatch(setAlert(true, "Up!!! Sorry. Not Found data of this friend."));
      });
  }, [id, dispatch]);

  const handleView = () => {
    setView(!view);
  };

  const info = () => {
    return (
      <>
        <div className="article col">
          <p className="title">Bio:</p>
          <div className="text">{friend.bio}</div>
        </div>
        <div className="divider"></div>

        <div className="article row">
          <p className="title">Phone:</p>
          <div className="">{friend.phone}</div>
        </div>
        <div className="divider"></div>

        <div>
          <div className="article row">
            <p className="title">Address</p>
            <div>{friend.address_1}</div>
          </div>

          <div className="article row">
            <p className="title">City</p>
            <div>{friend.city}</div>
          </div>

          <div className="article row">
            <p className="title">Zipcode</p>
            <div>{friend.zipcode}</div>
          </div>

          <div className="article row">
            <p className="title">State</p>
            <div>{friend.state}</div>
          </div>
        </div>
      </>
    );
  };

  const photos = () => {
    return (
      <div className="article">
        <div className="gallery">
          <img src={img} />
          <img src={img} />
          <img src={img} />

          <img src={img} />
          <img src={img} />
          <img src={img} />

          <img src={img} />
          <img src={img} />
          <img src={img} />
        </div>
      </div>
    );
  };

  const handleNavegation = () => {
    navigate(-1);
  };

  return (
    <div className="box">
      <div className="arrow">
        <span className="fill vector" onClick={() => handleNavegation()}></span>
      </div>

      <div className="body">
        <div className="header">
          <h1>Friend</h1>
          {status && <div className="error">{msg}</div>}
        </div>

        <div className="main">
          <div className="show-card">
            <div className="show-card-img">
              <img src={img} alt={friend.img} className="medium" />
              <span className="availability eclipse available"></span>
            </div>
            <div className="show-card-content">
              <p>{`${friend.first_name} ${friend.last_name}`}</p>
              <div className="show-card-header-status">
                <span>{statusOfTheFriend}</span>
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

                <div className="section">{view ? info() : photos()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
