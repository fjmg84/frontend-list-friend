import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import image from "../photo.jpg";

export const List = ({ friends }) => {
  const navigate = useNavigate();

  return (
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
                  onClick={() => navigate(`./show/${friend.id}`)}
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

List.protoTypes = {
  friends: PropTypes.array,
};

List.propTypes = {
  friends: PropTypes.array.isRequired,
};
