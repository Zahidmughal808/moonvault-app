import React from "react";

export default function VaultCard({ vaultCards }) {
  console.log("vaultCards", vaultCards);

  return (
    <div className="d-flex gap-5">
      {vaultCards?.map((card, index) => {
        return (
          <div key={index} className="vault-card-content d-flex flex-column gap-3 border-blue p-4 w-33 justify-content-between">
            <div className="d-flex flex-column gap-3">
              <h2 className="text-light-grey">{card.subHeading}</h2>
              <h1 className="text-menu-text">{card.heading}</h1>
              <p className="text-dull-grey">{card.description}</p>
            </div>
            <div className="video-holder">
              <video
                loop
                playsInline
                autoPlay
                muted
                preload="auto"
                width="100%"
                height="100%"
                className="object-cover w-full h-full pointer-events-none select-none"
                src={card.videoUrl}
                type="video/mp4"
              ></video>
            </div>
          </div>
        );
      })}
    </div>
  );
}
