import { profile } from "../content";
import { navigation } from "../navigation";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <Logo />
        <nav aria-label="Footer navigation">
          {navigation.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#home">Back to top ↑</a>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Data. Curiosity. Possibility.</span>
      </div>
    </footer>
  );
}
