import { useState } from "react";
import timeline from "../data/timeline.js";
import "./Timeline.css";

// Level numbers are derived from each entry's position in the
// original oldest-to-newest data file, so "LVL 01" always means
// the same real milestone even though the columns below display
// current to old.
const withLevels = timeline.map((entry, i) => ({ ...entry, level: i + 1 }));

const educationEntries = withLevels
  .filter((entry) => entry.type === "education")
  .slice()
  .reverse();

const workEntries = withLevels
  .filter((entry) => entry.type === "work")
  .slice()
  .reverse();

function TimelineCard({ entry }) {
  return (
    <div className="timeline-card pixel-border">
      <div className="timeline-card__meta">
        <span className="timeline-card__level">
          LVL {String(entry.level).padStart(2, "0")}
        </span>
        <span
          className={`timeline-card__tag timeline-card__tag--${entry.type}`}
        >
          {entry.type === "work" ? "WORK" : "EDU"}
        </span>
        <span className="timeline-card__range">{entry.range}</span>
      </div>
      <h3 className="timeline-card__title">{entry.title}</h3>
      <p className="timeline-card__place">{entry.place}</p>
      <p className="timeline-card__desc">{entry.description}</p>
    </div>
  );
}

export default function Timeline() {
  const [showEducation, setShowEducation] = useState(true);
  const [showWork, setShowWork] = useState(true);

  // Neither side can be switched off if it's the only one left on,
  // there always has to be at least one visible column.
  const toggleEducation = () => {
    setShowEducation((prev) => (prev && !showWork ? prev : !prev));
  };
  const toggleWork = () => {
    setShowWork((prev) => (prev && !showEducation ? prev : !prev));
  };

  const gridClass = [
    "dual-timeline",
    !showEducation && "dual-timeline--hide-edu",
    !showWork && "dual-timeline--hide-work",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id="experience">
      <div className="container">
        <p className="eyebrow">Level Path</p>
        <h2 className="section-title">Experience &amp; Education</h2>

        <div className="timeline-toggles">
          <button
            type="button"
            className={`timeline-toggle timeline-toggle--edu ${
              showEducation ? "is-active" : ""
            }`}
            aria-pressed={showEducation}
            onClick={toggleEducation}
          >
            Education {showEducation ? "[ON]" : "[OFF]"}
          </button>
          <button
            type="button"
            className={`timeline-toggle timeline-toggle--work ${
              showWork ? "is-active" : ""
            }`}
            aria-pressed={showWork}
            onClick={toggleWork}
          >
            Work {showWork ? "[ON]" : "[OFF]"}
          </button>
        </div>

        <div className={gridClass}>
          <div className="dual-timeline__col dual-timeline__col--edu">
            {showEducation &&
              educationEntries.map((entry) => (
                <TimelineCard key={entry.title} entry={entry} />
              ))}
          </div>

          <div className="dual-timeline__line" aria-hidden="true" />

          <div className="dual-timeline__col dual-timeline__col--work">
            {showWork &&
              workEntries.map((entry) => (
                <TimelineCard key={entry.title} entry={entry} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
