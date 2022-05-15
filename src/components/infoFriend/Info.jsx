import React from "react";

export const Info = ({ friend }) => {
  console.log(friend);
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
