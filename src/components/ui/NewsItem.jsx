import React, { useState, useRef, useEffect } from "react";
import "../../styles/components/News.css";

const NewsItem = ({ date, text, images = [], compact = true, index }) => {
  const formatted = new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const hasMedia = images && images.length > 0;
  const [expanded, setExpanded] = useState(false);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (expanded && panelRef.current) {
      const el =
        panelRef.current.querySelector(".news-text") || panelRef.current;
      if (el && typeof el.focus === "function") el.focus();
    }
  }, [expanded]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && expanded) {
        setExpanded(false);
        if (triggerRef.current) triggerRef.current.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  const toggle = (e) => {
    e.preventDefault();
    setExpanded((s) => !s);
  };

  const articleClass = [
    "news-item",
    expanded ? "expanded" : "",
    hasMedia ? "has-media" : "",
    compact ? "compact" : "",
  ]
    .join(" ")
    .trim();

  return (
    <article
      className={articleClass}
      data-index={index}
      aria-labelledby={`${index}-news`}
    >
      {!expanded && (
        <div className="news-date" aria-hidden>
          <time dateTime={date}>{formatted}</time>
        </div>
      )}

      {hasMedia ? (
        <>
          {!expanded && (
            <div className="news-compact-row">
              <button
                className="news-expand-trigger"
                onClick={toggle}
                aria-expanded={expanded}
                aria-controls={`news-panel-${index}`}
                ref={triggerRef}
              >
                <img
                  src={images[0].thumb || images[0].src}
                  alt={images[0].alt || ""}
                  className="news-thumb"
                  loading="lazy"
                  decoding="async"
                />
                <div className="news-body">
                  <div id={`${index}-news`} className="news-text">
                    {text}
                  </div>
                </div>
              </button>
            </div>
          )}

          <div
            id={`news-panel-${index}`}
            className={`news-expanded-panel ${expanded ? "open" : ""}`}
            ref={panelRef}
            aria-hidden={!expanded}
            role="region"
            aria-labelledby={`${index}-news`}
          >
            {expanded && (
              <img
                src={images[0].src || images[0].thumb}
                alt={images[0].alt || ""}
                className="news-hero"
                loading="lazy"
                decoding="async"
              />
            )}

            <div className="news-date centered" aria-hidden>
              <time dateTime={date}>{formatted}</time>
            </div>

            <div className="news-body stacked">
              <div
                tabIndex={0}
                id={`${index}-news`}
                className="news-text centered"
              >
                {text}
              </div>
              <div className="news-expanded-controls">
                <button
                  className="news-close"
                  onClick={() => {
                    setExpanded(false);
                    if (triggerRef.current) triggerRef.current.focus();
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="news-body">
          <div id={`${index}-news`} className="news-text">
            {text}
          </div>
        </div>
      )}
    </article>
  );
};

export default NewsItem;
