import type { CSSProperties } from "react";
import mapImage from "../../assets/eryndor-map.png";
import type { WorldRegion } from "../../types/content";

type WorldMapProps = {
  regions: WorldRegion[];
  selectedSlug: string;
  onSelect: (slug: string) => void;
};

export function WorldMap({ regions, selectedSlug, onSelect }: WorldMapProps) {
  return (
    <div className="world-map">
      <div className="world-map__canvas">
        <img
          src={mapImage}
          alt=""
          className="world-map__image"
          aria-hidden="true"
        />
        {regions.map((region) => (
          <button
            key={region.slug}
            type="button"
            className="world-map__marker"
            style={
              {
                "--marker-color": region.color,
                left: `${region.mapPosition.x}%`,
                top: `${region.mapPosition.y}%`,
              } as CSSProperties
            }
            aria-label={`Explorar ${region.name}`}
            aria-pressed={region.slug === selectedSlug}
            onClick={() => onSelect(region.slug)}
          >
            <span aria-hidden="true" />
            <strong>{region.name}</strong>
          </button>
        ))}
      </div>
      <p className="world-map__hint">
        Selecciona un territorio para abrir su crónica.
      </p>
    </div>
  );
}
