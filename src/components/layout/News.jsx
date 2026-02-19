import React, { useState, useMemo, useRef } from "react";
import "../../styles/components/News.css";
import NewsItem from "../ui/NewsItem";
import newsData from "../../data/news";

const INITIAL = 3;
const PAGE = 6;

const News = () => {
  const sorted = useMemo(() => {
    return [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  const [visible, setVisible] = useState(INITIAL);
  const listRef = useRef(null);

  const total = sorted.length;

  const handleLoadMore = () => {
    const start = visible; // first newly revealed index
    const next = Math.min(total, visible + PAGE);
    setVisible(next);

    // after render, move focus to the first newly revealed item
    setTimeout(() => {
      const el = document.querySelector(`[data-index="${start}"]`);
      if (el) {
        el.tabIndex = -1;
        el.focus();
      }
    }, 220);
  };

  const handleShowLess = () => {
    setVisible(INITIAL);
  };

  return (
    <section id="news" aria-labelledby="news-title">
      <h2 id="news-title">News Update</h2>
      <div
        className={`news-list revealed ${visible > INITIAL ? "expanded" : ""}`}
        id="news-list"
        ref={listRef}
        aria-live="polite"
      >
        {sorted.slice(0, visible).map((n, i) => (
          <NewsItem
            key={n.id}
            index={i}
            date={n.date}
            text={n.text}
            images={n.images}
            compact
          />
        ))}
      </div>

      <div className="news-controls">
        {visible < total ? (
          <button
            className="news-button"
            onClick={handleLoadMore}
            aria-expanded={false}
            aria-controls="news-list"
          >
            Load more
          </button>
        ) : (
          <button
            className="news-button"
            onClick={handleShowLess}
            aria-expanded={true}
            aria-controls="news-list"
          >
            Show less
          </button>
        )}

        <a
          className="news-follow"
          href="https://x.com/kwartlerlab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow kwartlerlab on X"
        >
          Follow us on X
        </a>
      </div>
    </section>
  );
};

export default News;
