import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import img from "../photo.jpg";

export const Show = () => {
  let { id } = useParams();
  const [view, setView] = useState(true);
  const bio =
    "I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know.";
  const navigate = useNavigate();

  const handleView = () => {
    setView(!view);
  };

  const info = () => {
    return (
      <div className="section">
        <div className="rows">
          <p className="title">Bio:</p>
          <div className="">{bio}</div>
        </div>
        <div className="divider"></div>

        <div className="cols">
          <p className="title">Phone:</p>
          <div className="col">+54756652</div>
        </div>
        <div className="divider"></div>

        <div>
          <div className="cols">
            <p className="title">Address</p>
            <div>Velazques #71</div>
          </div>
          <div className="cols">
            <p className="title">City</p>
            <div>Cerro</div>
          </div>
          <div className="cols">
            <p className="title">Zipcode</p>
            <div>10400</div>
          </div>
          <div className="cols">
            <p className="title">State</p>
            <div>La Habana</div>
          </div>
        </div>
      </div>
    );
  };

  const photos = () => {
    return (
      <div className="section">
        <div className="gallery">
          <img src={img} />
          <img src={img} />
          <img src={img} />
        </div>
        <div className="gallery">
          <img src={img} />
          <img src={img} />
          <img src={img} />
        </div>
        <div className="gallery">
          <img src={img} />
          <img src={img} />
          <img src={img} />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="arrow">
        <span className="fill vector" onClick={() => navigate(-1)}></span>
      </div>
      <div className="body">
        <div className="frame-show">
          <div className="header">
            <img src={img} alt={img} className="" />
            <span className="availability eclipse available"></span>
            <div>
              <p>Fidel de Jesus Miranda Gallego</p>
              <div className="status">
                <span>At Work..</span>
              </div>
            </div>
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
          </div>
          <div className="main">{view ? info() : photos()}</div>
        </div>
      </div>
    </>
  );
};
