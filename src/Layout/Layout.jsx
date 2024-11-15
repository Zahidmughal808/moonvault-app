import React from "react";
import Header from "../components/Header";
import HeaderMarquee from "../components/HeaderMarquee/HeaderMarquee";
import Footer from "../components/Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="layout-content">
      <HeaderMarquee marqueeList={HEADER_MARQEE_ITEMS} />
      <Header />
      {children}
      <div className="footer-section pb-1 mb-4 m-auto mt-5">
        <Footer />
      </div>
    </div>
  );
}

const HEADER_MARQEE_ITEMS = [
  {
    label: "Socials:",
    description: `Stay tuned to our social media channels for the most recent
                updates.`,
  },
  {
    label: "Our token is now live:",
    description: `Buy $VAULT now on Uniswap.`,
  },
  {
    label: "Contract Address:",
    description: `Our contract address is "0x220125AF9DA649e368813733eC8702A4145F996b".`,
  },
];
