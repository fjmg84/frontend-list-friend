import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import image from "../photo.jpg";

export const List = () => {
  const friends = useSelector((state) => state.friendsReducer) || [];
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`./show/${id}`);
  };

  return (
    <ul>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <div className="row">
              <div className="card">
                <img
                  src={image}
                  alt={friend.img}
                  className="rectangle1 avatar"
                />
                <span
                  className={`availability eclipse ${
                    friend.available ? "available" : "not-available"
                  }`}
                ></span>
                <div className="frame">
                  <div className="name-friend">
                    <span>{`${friend.first_name} ${friend.last_name}`}</span>
                  </div>
                  <div className="status-friend">
                    <span>{friend.status}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleClick(friend.id)}
                  disabled={!friend.available}
                >
                  Details
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
