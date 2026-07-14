import Header from "./components/Header.jsx";
import Timeline from "./components/Timeline.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";

export default function App() {
  return (
    <div id="top">
      <div className="crt-overlay" aria-hidden="true" />
      <Header name="Feri Ginanjar" />

      <main>
        <section className="hero">
          <div className="container hero__inner">
            <p className="eyebrow">Player Select</p>
            <h1 className="hero__title">
              Building anything
              <br />
              worth pressing start on.
            </h1>
            <p className="hero__subtitle">
              Software engineer focused on fast, sturdy, good looking web
              products. Scroll down for the level path, the project cartridges,
              and a way to reach me.
            </p>
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-value">
                  {new Date().getFullYear() - 2022}+
                </span>
                <span className="hero__stat-label">Years shipping</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-value">20+</span>
                <span className="hero__stat-label">Projects launched</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-value">1</span>
                <span className="hero__stat-label">Coin required</span>
              </div>
            </div>
          </div>
        </section>
        <Projects />
        <Timeline />

        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>GAME OVER -- INSERT COIN TO CONTINUE SCROLLING</p>
        </div>
      </footer>
    </div>
  );
}
