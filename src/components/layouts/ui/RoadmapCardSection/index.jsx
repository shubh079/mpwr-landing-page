import React from "react";
import circle_roadmap1 from "../../../../assets/images/circle_roadmap1.png";
import './roadmapacardsection.scss'

const RoadmapCardSection = ({ heading, data, className }) => {
  return (
    <>
      <div className={`card_wrp ${className}`}>
        <img src={circle_roadmap1} className="img_roadmap_mobile" alt="img" />
        <div className="container">
          <div
            className="card"
            style={{ background: "transparent", border: "none" }}
          >
            <h4>{heading}</h4>
            <ul class="list-group list-group-flush" style={{ width: "100%" }}>
              {data.map((item, index) => {
                return (
                  <li
                    style={{ width: "100%" }}
                    key={new Date().getTime() + index}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadmapCardSection;
