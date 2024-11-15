import React from "react";

export default function TokenCard({ tokenCardItemsTop, tokenCardItemsBottom }) {
  return (
    <div>
      <div className="token-card-items d-flex w-100 gap-4 mb-5 justify-content-start">
        {tokenCardItemsTop?.map((item, index) => {
          return (
            <div
              key={index}
              className="d-flex token-card flex-column justify-content-between position-relative w-46 border-blue p-3"
            >
              <div className="token-card-content text-center d-flex flex-row justify-content-between gap-1 px-2">
                <h2 className="text-white mb-2">{item.title}</h2>
                <img src={item.thumbnail} alt="thumbnail" />
              </div>
              <p className="text-dull-grey">{item.description}</p>
            </div>
          );
        })}
      </div>
      <></>
      <div className="token-card-items bottom-side-cards d-flex w-100 gap-4 mb-5 justify-content-end">
        {tokenCardItemsBottom?.map((item, index) => {
          return (
            <div
              key={index}
              className="d-flex token-card flex-column justify-content-between position-relative w-46 border-blue p-3"
            >
              <div className="token-card-content text-center d-flex flex-row justify-content-between gap-1 px-2">
                <h2 className="text-white mb-2">{item.title}</h2>
                <img src={item.thumbnail} alt="thumbnail" />
              </div>
              <p className="text-dull-grey">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
