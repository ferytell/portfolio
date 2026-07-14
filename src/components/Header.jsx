import { useEffect, useState } from "react";
import "./Header.css";

const NAV_ITEMS = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Header({ name = "YOUR NAME" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__inner">
        <a
          className="site-header__brand"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="site-header__dot" aria-hidden="true" />
          {name}
        </a>

        <nav className="site-header__nav site-header__nav--desktop">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              className="site-header__link"
              onClick={() => handleNavClick(item.id)}
            >
              <span className="site-header__link-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {menuOpen && (
        <nav className="site-header__nav site-header__nav--mobile">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              className="site-header__link"
              onClick={() => handleNavClick(item.id)}
            >
              <span className="site-header__link-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
