import React from "react";
import VaultCard from "./Home/VaultCard";
import burn from "../assets/videos/burn.mp4";
import reflect from "../assets/videos/reflect.mp4";
import lp from "../assets/videos/lp.mp4";
import StarrEngine from "./Home/StarrEngine";
import OverviewCard from "./Home/OverviewCard";
import TokenCard from "./Home/TokenCard";
import logo from "../assets/images/app-logo.png";
import MarqueeContainer from "./Home/MarqueeContainer";

export default function HomePage() {
  return (
    <div className="home-page-wrapper">
      <div className="main-content">
        <section className="top-section w-100 vh-100 position-relative pb-4">
          <div
            className="position-absolute w-100 h-100 z-22 background-no-repeat background-cover background-pos-0 bottom-10"
            style={{ backgroundImage: `url(/images/gifComputers.gif)` }}
          ></div>
          <div
            className="position-absolute w-100 h-100 z-0 background-no-repeat background-cover background-pos-0 bottom-0"
            style={{ backgroundImage: `url(/images/moonbase-earth.png)` }}
          ></div>
          <div
            className="position-absolute w-100 h-100 z-20 background-no-repeat background-cover background-pos-0"
            style={{ backgroundImage: `url(/images/heroSection.png)` }}
          ></div>
        </section>

        <section className="section-container mb-5">
          <div className="summary-section d-flex flex-column gap-3 py-5 w-50">
            <h2 className="text-light-grey text-uppercase mb-4">
              / ABOUT MOONVAULT
            </h2>
            <h1 className="text-white mb-4">POWERED BY S.T.A.R.R.</h1>
            <p className="text-dull-grey">
              MoonVault is a user-centric blockchain platform that seamlessly
              integrates advanced on-chain solutions with innovative financial
              tools, alongside a robust decentralized rewards system via $VAULT,
              to deliver a seamless user experience.
            </p>
            <br></br>
            <p className="text-dull-grey">
              Built on the Ethereum network, MoonVault supports the $VAULT
              token. The S.T.A.R.R. Engine rotates through multiple functions,
              including liquidity infusions, token burns, token buybacks, and a
              decentralized rewards system which offers substantial potential
              earnings in both Ether ($ETH) and $VAULT tokens.
            </p>
            <br></br>
            <p className="text-dull-grey">
              By balancing cutting-edge technology with decentralized
              tokenomics, MoonVault provides users with both real-world utility
              and a superior financial experience, all within a secure and
              efficient ecosystem.
            </p>
          </div>
        </section>

        <section className="section-container mb-5">
          <MarqueeContainer />
        </section>

        <section className="section-container mb-5">
          <StarrEngine />
        </section>

        <section className="section-container mb-5">
          <OverviewCard overviewCardItems={overviewCardItems} />
        </section>

        <section className="section-container mb-5">
          <div className="summary-section d-flex flex-column gap-3 py-5">
            <h2 className="text-light-grey text-uppercase mb-4">/ FRAMEWORK</h2>
            <h1 className="text-white mb-4">
              Unveiling the MoonVault Ecosystem
            </h1>
            <p className="text-dull-grey">
              Discover the power of MoonVault’s advanced Telegram Bots and
              automated systems, designed to enhance your experience:
            </p>
            <div className="d-flex py-3 mb-4 px-2">
              <a
                class="medium-link position-relative text-green text-decoration-none"
                href="https://t.me/MoonVaultETH"
                target="_blank"
                rel="noopener noreferrer"
              >
                MEDIUM
              </a>
            </div>
          </div>
          <TokenCard
            tokenCardItemsTop={tokenCardItemsTop}
            tokenCardItemsBottom={tokenCardItemsBottom}
          />
        </section>

        <section className="section-container mb-5">
          <VaultCard vaultCards={vaultCardItems} />
        </section>

        <section className="invite-community-section">
          <div className="d-flex">
            <div className="d-flex p-5 border-blue">
              <div className="d-flex flex-column gap-3">
                <h4 className="text-menu-text">You’re Invited</h4>
                <h2 className="text-light-grey ">COMMUNITY</h2>
                <p className="text-dull-grey">
                  The $VAULT token is built to drive decentralized engagement
                  across the globe. MoonVault acts as a hub where users can
                  connect, collaborate, and navigate their journey in the crypto
                  space securely.
                </p>
                <div className="d-flex invite-links align-items-center gap-5">
                  <a
                    className="position-relative text-green text-decoration-none"
                    href="https://t.me/MoonVaultETH"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TELEGRAM
                  </a>
                  <a
                    className="position-relative text-green text-decoration-none"
                    href="https://x.com/MoonVaultETH"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X/TWITTER
                  </a>
                  <a
                    className="position-relative text-green text-decoration-none"
                    href="_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DISCORD
                  </a>
                </div>
              </div>
              <div className="community-banner">
                <img src="/images/moonbase-earth.png" alt="Community" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const vaultCardItems = [
  {
    heading: "Liquidity Infusions",
    subHeading: "Replenish",
    description: `Initial liquidity for $VAULT is burned. The replenishment functions
       trigger decentralized liquidity infusions, enhancing market stability
       and reducing price impact for future trades. These infusions grow LP
       depth without causing sells on the chart, ensuring a stable and
       resilient liquidity pool.`,
    videoUrl: lp,
  },
  {
    heading: "Dual Dividends, Auto Buybacks",
    subHeading: "Redistribute",
    description: `The redistribution functions rotate between automatic $ETH rewards as $WETH and auto-buyback-and-reflect as $VAULT. 
    This mechanism promotes long-term engagement and value growth by distributing both $ETH and $VAULT to holders, 
    while supporting $VAULT's market price through buybacks.`,
    videoUrl: burn,
  },
  {
    heading: "Auto Burn",
    subHeading: "Rebalance",
    description: `The rebalancing mechanism reduces the total supply of $VAULT tokens through randomized True burns, 
    ensuring a stable and appreciating token value while balancing the growing reserves accumulated through LP Infusions.`,
    videoUrl: reflect,
  },
];

const overviewCardItems = [
  {
    title: "Replenish",
    description: `Automated liquidity pool infusions help mitigate the price impact of future trades and stabilize the market, 
    providing direct LP rewards while boosting pool depth, all without triggering chart sales.`,
  },
  {
    title: "Redistribute",
    description: `Auto dividends alternate between distributing $ETH rewards as $WETH and performing auto-buybacks, reflecting as $VAULT. 
    This system drives long-term growth by rewarding holders with both $ETH and $VAULT tokens.`,
  },
  {
    title: "Rebalance",
    description: `An automatic rebalancing process that reduces the total supply of $VAULT tokens via automated burns, 
    supporting long-term stability and value appreciation.`,
  },
];

const tokenCardItemsTop = [
  {
    title: "Function Alerts: Real-Time Updates",
    description: `Our Token BuyBot keeps you informed with instant notifications of S.T.A.R.R. Engine function changes.`,
    thumbnail: logo,
  },
  {
    title: "Tokenomics Insights: Stay Informed",
    description: `The Statistics Bot provides easy access to the latest tokenomics data, allowing you to track $VAULT’s performance directly in the chat.`,
    thumbnail: logo,
  },
];

const tokenCardItemsBottom = [
  {
    title: "Seamless Rewards: Automated & Gas-Free*",
    description: `The $VAULT Rewards Telegram Bot streamlines reward checking and claiming, alongside the dApp. Legacy Protocol, an automated claims processing system funded by the project, 
    processes rewards iteratively through a script ensuring long-term holders benefit without additional costs.`,
    thumbnail: logo,
  },
  {
    title: "Tech Innovations: Beyond the Bots",
    description: `MoonVault is committed to releasing new tools and features that will further enhance the user experience and ecosystem functionality.`,
    thumbnail: logo,
  },
];
