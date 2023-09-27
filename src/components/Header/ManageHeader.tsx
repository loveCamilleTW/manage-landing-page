import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import LogoSVG from "../../images/logo.svg";
import HamburgerSVG from "../../images/icon-hamburger.svg";
import CloseSVG from "../../images/icon-close.svg";

export function ManageHeader() {
  const { width, height: _height } = useWindowDimensions();

  return (
    <header className="primary-header">
      {width > 500 ? <Navigation /> : <NavigationMobile />}
    </header>
  );
}

function Logo() {
  return (
    <a href="#">
      <img src={LogoSVG} alt="Manage" />
    </a>
  );
}

function Navigation() {
  const NAV_ITEMS = ["Pricing", "Product", "About Us", "Careers", "Community"];

  return (
    <nav>
      <ul>
        {NAV_ITEMS.map((id) => (
          <li key={id}>
            <a href="#">{id}</a>
          </li>
        ))}
      </ul>
      <button>Get Started</button>
    </nav>
  );
}

function NavigationMobile() {
  const [isOpened, setIsOpened] = useState(false);
  const NAV_ITEMS = ["Pricing", "Product", "About Us", "Careers", "Community"];

  return (
    <>
      <Logo />
      <img
        src={!isOpened ? HamburgerSVG : CloseSVG}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      />

      <dialog open={isOpened}>
        <nav>
          <ul>
            {NAV_ITEMS.map((id) => (
              <li key={id}>
                <a href="#">{id}</a>
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </>
  );
}
