import React from "react";
import coinGecko from "../../assets/images/up/coinGecko.svg";
import dexCleaner from "../../assets/images/up/dexCleaner.svg";
import dextools from "../../assets/images/up/dextools.svg";
import geckoTerminal from "../../assets/images/up/gecko-terminal.svg";
import uniswap from "../../assets/images/up/uniswap.svg";

import CoinMarketCap from "../../assets/images/down/CoinMarketCap.svg";
import etherScan from "../../assets/images/down/etherScan.svg";
import hostinger from "../../assets/images/down/hostinger.svg";
import infura from "../../assets/images/down/infura.svg";
import metaMask from "../../assets/images/down/metaMask.svg";

export default function MarqueeContainer() {
  return (
   <div className="d-flex flex-column gap-4 mb-4">
   <marquee>
   <div className="coin-marquee-holder">
     <div className="coin-mrquee-body border-blue p-2 w-100 d-flex justify-content-center overflow-hidden">
       <img src={coinGecko} alt="coinGecko" />
     </div>
     <div className="coin-mrquee-body border-blue p-2 w-100 d-flex justify-content-center overflow-hidden">
       <img src={dexCleaner} alt="dexCleaner" />
     </div>
     <div className="coin-mrquee-body border-blue p-2 w-100 d-flex justify-content-center overflow-hidden">
       <img src={dextools} alt="dextools" />
     </div>
     <div className="coin-mrquee-body border-blue p-2 w-100 d-flex justify-content-center overflow-hidden">
       <img src={dextools} alt="dextools" />
     </div>
     <div className="coin-mrquee-body border-blue p-2 w-100 d-flex justify-content-center overflow-hidden">
       <img src={geckoTerminal} alt="geckoTerminal" />
     </div>
     <div className="coin-mrquee-body border-blue p-2 w-100 d-flex justify-content-center overflow-hidden">
       <img src={uniswap} alt="uniswap" />
     </div>
   </div>
 </marquee>

 <marquee direction="right">
 <div className="coin-marquee-holder">
   <div className="coin-mrquee-body border-blue p-2 w-100 d-flex justify-content-center overflow-hidden">
     <img src={CoinMarketCap} alt="CoinMarketCap" />
   </div>
   <div className="coin-mrquee-body border-blue p-2 w-100 d-flex justify-content-center overflow-hidden">
     <img src={metaMask} alt="metaMask" />
   </div>
   <div className="coin-mrquee-body border-blue p-2 w-100 d-flex justify-content-center overflow-hidden">
     <img src={etherScan} alt="etherScan" />
   </div>
   <div className="coin-mrquee-body border-blue p-2 w-100 d-flex justify-content-center overflow-hidden">
     <img src={hostinger} alt="hostinger" />
   </div>
   <div className="coin-mrquee-body border-blue p-2 w-100 d-flex justify-content-center overflow-hidden">
     <img src={infura} alt="infura" />
   </div>
 </div>
</marquee>
   </div>
  );
}
