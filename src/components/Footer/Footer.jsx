import React from "react";
import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/app-logo.png";

export default function Footer() {
  return (
    <div className="footer-body d-flex flex-column p-5 pb-1 border-blue">
      <div className="d-flex gap-10">
        <div className="footer-logo-holder d-flex flex-column gap-2">
          <div className="d-flex gap-4 align-items-center mb-3">
            <Link to="/">
              <img src={siteLogo} alt="logo" />
            </Link>
            <h2 className="text-menu-text">MOONVAULT</h2>
          </div>
          <h4 className="mb-2 text-menu-text">
            Transform Your Crypto Experience
          </h4>
          <p className="text-dull-grey lh-lg">
            Our core values reflect our mission to build a blockchain platform
            that merges cutting-edge technology with innovative solutions.
            <br></br>
            <br></br>
            <br></br>
            The unique framework, enhanced by dynamic scenarios and a suite of
            custom Telegram bots, unveils groundbreaking decentralized
            tokenomics designed for lasting impact.
          </p>
        </div>
        <div className="footer-menu d-flex gap-5 mt-8">
          <div className="d-flex flex-column gap-2">
            <h5>MoonVault</h5>
            <ul className="d-flex flex-column gap-3">
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  Blueprint
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  Tokenomics
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  STARR
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  Framework
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  Core Values
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-column gap-2">
            <h5>$VAULT</h5>
            <ul className="d-flex flex-column gap-3">
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  DEX Tools
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  DEX Screener
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  Gecko Terminal
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  Etherscan
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  CoinMarketCap (soon)
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  Coin Gecko (soon)
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-column gap-2">
            <h5>TELEGRAM BOTS</h5>
            <ul className="d-flex flex-column gap-3">
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  $VAULT RewardsBot
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  $VAULT StatsBot
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  $VAULT BuyBot
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-column gap-2">
            <h5>HELPFUL LINKS</h5>
            <ul className="d-flex flex-column gap-3">
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  Launch DAPP
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  BUY $VAULT
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  WhitePaper
                </a>
              </li>
              <li>
                <a
                  href="_"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  GitBook (soon)
                </a>
              </li>
              <li>
                <a
                  href="#STARR"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#FRAMEWORK"
                  class="text-light-grey text-decoration-none"
                  target="_blank"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row mt-4 social-links justify-content-center align-items-center border-top border-bottom py-3 gap-4">
        <h4 class="text-menu-text">Social Links:</h4>
        <div class="d-flex justify-content-center align-items-center gap-4">
          <a href="https://t.me/MoonVaultETH" target="__blank">
            <img
              src="images/telegram.svg"
              alt="Facebook"
              class="w-20 socialIcon"
            />
          </a>
          <a href="_" target="__blank">
            <img
              src="images/discord.svg"
              alt="Instagram"
              class="w-20 socialIcon"
            />
          </a>
          <a href="https://x.com/MoonVaultETH" target="__blank">
            <img
              src="images/twitter.svg"
              alt="Twitter"
              class="w-20 socialIcon"
            />
          </a>
          <a href="https://medium.com/@moonvaulteth" target="__blank">
            <img
              src="images/medium.svg"
              alt="Youtube"
              class="w-20 socialIcon"
            />
          </a>
        </div>
      </div>
      <div className="footer-end-bottom d-flex flex-column py-3 gap-2">
        <p className="mb-0 text-dull-grey">© All Rights Reserved</p>
        <p className="mb-0 text-dull-grey">
          Disclaimer: MoonVault is an experimental DeFi project and not intended
          as financial advice, an investment, or any form of security. MoonVault
          and $VAULT have no intrinsic value. Always conduct your own research
          before participating.
        </p>
        <p className="mb-0 text-dull-grey">
          * - claiming rewards via dApp or Telegram incurs nominal gas fees,
          iterative processing does not ensure selection.
        </p>
      </div>
    </div>
  );
}
