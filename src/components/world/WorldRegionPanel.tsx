import type { CSSProperties } from "react";
import type { WorldRegion } from "../../types/content";

export function WorldRegionPanel({ region }: { region: WorldRegion }) {
  return (
    <article
      className="world-region"
      aria-live="polite"
      style={{ "--region-color": region.color } as CSSProperties}
    >
      <div className="world-region__intro">
        <p className="eyebrow">{region.epithet}</p>
        <h2>{region.name}</h2>
        <p className="world-region__summary">{region.summary}</p>
        <dl className="world-region__facts">
          <div>
            <dt>Capital</dt>
            <dd>{region.capital}</dd>
          </div>
          <div>
            <dt>Pueblos</dt>
            <dd>{region.peoples}</dd>
          </div>
        </dl>
      </div>

      <div className="world-region__story">
        <div>
          <span>Identidad</span>
          <p>{region.identity}</p>
        </div>
        <div>
          <span>Conflicto actual</span>
          <p>{region.conflict}</p>
        </div>
      </div>

      <div className="world-region__landmarks">
        <h3>Lugares señalados</h3>
        {region.landmarks.map((landmark, index) => (
          <div key={landmark.name}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>
              <strong>{landmark.name}</strong>
              {landmark.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
