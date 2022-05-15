import React, { useState } from "react";
import { MdClear } from "react-icons/md";

export const Photos = ({ photos = [] }) => {
  const [modal, setModal] = useState({
    view: false,
    url: undefined,
  });

  return (
    <>
      <div className="article">
        <div className="gallery">
          {photos.map((photo, index) => {
            return (
              <a
                key={index}
                onClick={() =>
                  setModal({
                    view: true,
                    url: photo,
                  })
                }
              >
                <img src={photo} alt={photo} />
              </a>
            );
          })}
        </div>
      </div>

      {modal.view && (
        <div id="miModal" className="modal">
          <div className="icons icons-white close">
            <span
              className="fill vector"
              onClick={() => setModal({ view: false })}
            >
              <MdClear size={24} />
            </span>
          </div>

          <div className="modal-content">
            <img src={modal.url} alt={modal.url} />
          </div>
        </div>
      )}
    </>
  );
};
