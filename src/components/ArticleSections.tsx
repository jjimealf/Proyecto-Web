import { useState } from "react";
import type { ArticleSection } from "../types/content";

type ArticleSectionsProps = {
  sections: ArticleSection[];
};

export function ArticleSections({ sections }: ArticleSectionsProps) {
  const [allOpen, setAllOpen] = useState(false);
  const controlKey = allOpen ? "open" : "closed";

  return (
    <section className="reading-layout" aria-labelledby="reading-title">
      <aside className="reading-index">
        <p className="eyebrow" id="reading-title">
          En esta crónica
        </p>
        <ol>
          {sections.map((section, index) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section.title}
              </a>
            </li>
          ))}
        </ol>
        <button
          className="quiet-button"
          type="button"
          onClick={() => setAllOpen((current) => !current)}
        >
          {allOpen ? "Recoger capítulos" : "Desplegar capítulos"}
        </button>
      </aside>
      <div className="reading-sections" key={controlKey}>
        {sections.map((section, index) => (
          <details
            className="reading-section"
            id={section.id}
            key={section.id}
            open={allOpen || index === 0}
          >
            <summary>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{section.title}</strong>
              <i aria-hidden="true" />
            </summary>
            <div className="reading-section__content">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
