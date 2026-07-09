import { useEffect, useRef, useState } from "react";
import "./Lightbox.css";

/**
 * A dependency-free stand in for antd's <Image preview /> zoom effect.
 * Call `open(media, index, originRect)` from a thumbnail's onClick,
 * passing the clicked element's getBoundingClientRect() so the image
 * can visually expand outward from where it was clicked.
 */
export default function Lightbox({ media, index, originRect, onClose, onNavigate }) {
  const [phase, setPhase] = useState("entering"); // entering | open | closing
  const frameRef = useRef(null);

  const isOpen = index !== null && media && media[index];

  useEffect(() => {
    if (!isOpen) return;
    setPhase("entering");
    const id = requestAnimationFrame(() => setPhase("open"));
    return () => cancelAnimationFrame(id);
  }, [isOpen, index]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setPhase("closing");
    window.setTimeout(onClose, 180);
  };

  const item = media[index];

  const originStyle =
    originRect && phase !== "open"
      ? {
          top: originRect.top,
          left: originRect.left,
          width: originRect.width,
          height: originRect.height,
          transform: "none",
          borderRadius: 0,
        }
      : null;

  return (
    <div
      className={`lightbox lightbox--${phase}`}
      role="dialog"
      aria-modal="true"
      aria-label={item.alt || "Project media preview"}
      onClick={handleClose}
    >
      <div className="lightbox__backdrop" />

      <button
        className="lightbox__close"
        onClick={handleClose}
        aria-label="Close preview"
      >
        CLOSE [X]
      </button>

      {media.length > 1 && (
        <>
          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(-1);
            }}
          >
            &#8592;
          </button>
          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(1);
            }}
          >
            &#8594;
          </button>
        </>
      )}

      <figure
        ref={frameRef}
        className="lightbox__frame"
        style={originStyle ?? undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.src} alt={item.alt || ""} />
      </figure>

      {media.length > 1 && (
        <p className="lightbox__counter">
          {index + 1} / {media.length}
        </p>
      )}
    </div>
  );
}
