import React from "react";

export default function HeaderMarquee({ marqueeList }) {
  console.log("marqueeList", marqueeList);
  return (
    <div className="d-flex align-items-center border-blue">
    <p className="nowlive d-flex italic flex-row p-2 align-items-center justify-content-center border-blue">Now live<span class="blinker">  •</span></p>
   <marquee>
    <div className="marquee-holder">
      {marqueeList?.map((item, index) => {
        return (
            <div className="mrquee-body" key={index}>
              <div>
                <p>{item?.label}</p>
              </div>
              <div>
                <p className="description">{item?.description}</p>
              </div>
            </div>
        );
      })}
    </div>
   </marquee>
   </div>
  );
}
