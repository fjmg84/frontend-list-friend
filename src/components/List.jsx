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
  /**
   *
   */
  return (
    <>
      <ul>
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
              <div className="card">
                <div className="card-img">
                  <img src={image} alt={friend.img} className="small" />
                  <span
                    className={`availability eclipse ${
                      friend.available ? "available" : "not-available"
                    }`}
                  ></span>
                </div>

                <div className="card-header ">
                  <div className="card-header-name">
                    <span>{`${friend.first_name} ${friend.last_name}`}</span>
                  </div>
                  <div className="card-header-status">
                    <span>{friend.status}</span>
                  </div>
                </div>

                <div className="card-actions">
                  <button
                    className="details-button"
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
    </>
  );
};
