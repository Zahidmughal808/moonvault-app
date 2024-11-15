import React from "react";

export default function OverviewCard({ overviewCardItems }) {
  return (
    <div className="overview-card-item">
      {overviewCardItems?.map((item, index) => {
        return (
          <div key={index} className="d-flex overview-card-item flex-column align-content-center gap-2 position-relative">
            <img
              src="/images/overiew-card.svg"
              alt="Overview card"
            ></img>
           <div className="position-absolute start-0 end-0 mx-auto top-70 overview-card-content text-center d-flex flex-column gap-1 px-5">
           <h2 className="text-white mb-2">{item.title}</h2>
           <p className="text-dull-grey">{item.description}</p>
           </div>
          </div>
        );
      })}
    </div>
  );
}
