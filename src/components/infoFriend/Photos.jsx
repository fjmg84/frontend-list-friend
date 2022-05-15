import React from "react";

export const Photos = ({ photos }) => {
  console.log(photos);
  return (
    <>
      <div className="article">
        <div className="gallery">
          {photos.map((photo, index) => {
            return <img key={index} src={photo} alt={photo} />;
          })}
        </div>
      </div>
    </>
  );
};
