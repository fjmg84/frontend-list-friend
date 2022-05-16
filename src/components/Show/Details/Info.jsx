import React from "react";
import PropTypes from "prop-types";

export const Info = ({ friend = {} }) => {
  return (
    <>
      <div className="article col">
        <p className="details-title">Bio:</p>
        <div className="details-text">{friend.bio}</div>
      </div>
      <div className="divider"></div>

      <div className="article row">
        <p className="details-title">Phone:</p>
        <div className="details-text">{friend.phone}</div>
      </div>
      <div className="divider"></div>

      <div>
        <div className="article row">
          <p className="details-title">Address</p>
          <div className="details-text">{friend.address_1}</div>
        </div>

        <div className="article row">
          <p className="details-title">City</p>
          <div className="details-text">{friend.city}</div>
        </div>

        <div className="article row">
          <p className="details-title">Zipcode</p>
          <div className="details-text">{friend.zipcode}</div>
        </div>

        <div className="article row">
          <p className="details-title">State</p>
          <div className="details-text">{friend.state}</div>
        </div>
      </div>
    </>
  );
};

Info.protoTypes = {
  friend: PropTypes.object,
};

Info.propTypes = {
  friend: PropTypes.object.isRequired,
};
