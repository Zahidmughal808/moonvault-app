import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/app-logo.png";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const DEFAULT_NAV_ITEMS = [
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Blueprint",
      link: "/blueprint",
    },
    {
      label: "Tokenomics",
      link: "/tokenomics",
    },
    {
      label: "Starr",
      link: "/starr",
    },
    {
      label: "Framework",
      link: "/framework",
    },
    {
      label: "Core values",
      link: "/code-values",
    },
    {
      label: "Faq's",
      link: "/faq",
    }
  ];

  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition])

  return (
    <div className={scrollPosition > 70 ? 'header-sticky top-header border-left border-right border-bottom px-4' : 'top-header border-left border-right border-bottom px-4'}>
      <div className="logo-holder">
        <Link to="/">
          <img src={siteLogo} alt="logo" />
        </Link>
        <h2>MOONVAULT</h2>
      </div>
      <div className="menu-holder">
        <ul className="menu-list">
          {DEFAULT_NAV_ITEMS?.map((navItem, index) => {
            return (
              <li key={index} className="menu-item">
                <Link to={navItem.link}>{navItem?.label}</Link>
              </li>
            );
          })}
        </ul>
        <></>
        <div className="auth-holder">
          <button className="login-btn common-btn py-3 px-2-5 text-white border-blue" type="button">
            Buy $Vault
          </button>
          <button className="common-btn border-0 py-3 px-2-5 background-blue text-white" type="button">
            Launch dApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
