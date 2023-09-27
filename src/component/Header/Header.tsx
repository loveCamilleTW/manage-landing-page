import LogoSVG from "../../images/logo.svg";

export function Header() {
  return (
    <header className="primary-header">
      <div>
        <Logo />
        <Navigation />
        <button>Get Started</button>
      </div>
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
    </nav>
  );
}
