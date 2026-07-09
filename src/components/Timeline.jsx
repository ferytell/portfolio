import timeline from "../data/timeline.js";
import "./Timeline.css";

const TYPE_LABEL = {
  work: "WORK",
  education: "EDU",
};

export default function Timeline() {
  return (
    <section id="experience">
      <div className="container">
        <p className="eyebrow">Level Path</p>
        <h2 className="section-title">Experience &amp; Education</h2>

        <ol className="level-path">
          {timeline.map((entry, i) => (
            <li className="level-path__item" key={`${entry.title}-${i}`}>
              <div className="level-path__marker" aria-hidden="true">
                <span className="level-path__marker-inner" />
              </div>

              <div className="level-path__card pixel-border">
                <div className="level-path__meta">
                  <span className="level-path__level">
                    LVL {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`level-path__tag level-path__tag--${entry.type}`}
                  >
                    {TYPE_LABEL[entry.type] ?? entry.type}
                  </span>
                  <span className="level-path__range">{entry.range}</span>
                </div>
                <h3 className="level-path__title">{entry.title}</h3>
                <p className="level-path__place">{entry.place}</p>
                <p className="level-path__desc">{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
