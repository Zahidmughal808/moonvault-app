import React from "react";

export default function StarrEngine() {
  return (
    <div className="d-flex p-5 gap-3">
      <div className="starr-banner position-relative w-66">
       
        <div className="content w-100 d-flex position-absolute start-0 mx-auto top-0 bottom-0 text-center justify-content-center align-items-center flex-column">
          <div className="d-flex justify-content-center align-items-center flex-column  gap-3">
          <h2 className="text-white">The S.T.A.R.R. Engine</h2>
          <p className="text-dull-grey">
            (Self-Triggered Automatic Regeneration and Redistribution)
          </p>
          </div>
        </div>
      
        <img src="/images/starr-loop.png" alt="starr" className="starr-loop" />
        <img
          src="/images/earth-shape.svg"
          alt="earth-shape"
          className="d-flex position-absolute top-0 start-0 end-0 z-0 earth-shape"
        />
      </div>
      <div className="starr-content w-33 d-flex justify-content-start align-items-center position-relative">
        <div className="d-flex flex-column starr-content-card border-white p-4">
          <h2 className="text-white mb-4">Overview</h2>
          <p className="text-dull-grey">
            The $VAULT token features first-of-its-kind technology that
            implements automatic rotational tokenomic functionality featuring:
            Buyback-and-Reflect in $VAULT, $ETH rewards (as $WETH), Supply
            Reductions, and Decentralized Liquidity Infusions.
          </p>
          <br></br>
          <br></br>
          <p>This is all made possible, with minimal gas fees, by the S.T.A.R.R. Engine.</p>
        </div>
      </div>
    </div>
  );
}
