import { useState } from "react";
import { navigation } from "../navigation";
import Logo from "./Logo";
import Arrow from "./Arrow";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header container">
      <Logo />
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav
        id="main-nav"
        className={open ? "nav is-open" : "nav"}
        aria-label="Main navigation"
      >
        {navigation.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="button nav-contact" href="#contact">
        Let’s talk <Arrow />
      </a>
    </header>
  );
}
