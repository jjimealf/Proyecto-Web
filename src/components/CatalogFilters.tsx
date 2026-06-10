type FilterOption = {
  value: string;
  label: string;
};

type CatalogFiltersProps = {
  query: string;
  primary: string;
  secondary: string;
  primaryLabel: string;
  secondaryLabel: string;
  primaryOptions: FilterOption[];
  secondaryOptions: FilterOption[];
  resultCount: number;
  onQueryChange: (value: string) => void;
  onPrimaryChange: (value: string) => void;
  onSecondaryChange: (value: string) => void;
  onReset: () => void;
};

export function CatalogFilters({
  query,
  primary,
  secondary,
  primaryLabel,
  secondaryLabel,
  primaryOptions,
  secondaryOptions,
  resultCount,
  onQueryChange,
  onPrimaryChange,
  onSecondaryChange,
  onReset,
}: CatalogFiltersProps) {
  const hasFilters = Boolean(query || primary || secondary);

  return (
    <section className="catalog-tools" aria-label="Filtros del catálogo">
      <label className="search-field">
        <span>Buscar por nombre o concepto</span>
        <span className="search-field__control">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            placeholder="Ej. magia, resistencia, sigilo..."
            onChange={(event) => onQueryChange(event.target.value)}
          />
        </span>
      </label>
      <label>
        <span>{primaryLabel}</span>
        <select
          value={primary}
          onChange={(event) => onPrimaryChange(event.target.value)}
        >
          <option value="">Todos</option>
          {primaryOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>{secondaryLabel}</span>
        <select
          value={secondary}
          onChange={(event) => onSecondaryChange(event.target.value)}
        >
          <option value="">Todos</option>
          {secondaryOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <div className="catalog-tools__status" aria-live="polite">
        <strong>{resultCount}</strong>
        <span>{resultCount === 1 ? "resultado" : "resultados"}</span>
        {hasFilters ? (
          <button type="button" className="quiet-button" onClick={onReset}>
            Limpiar
          </button>
        ) : null}
      </div>
    </section>
  );
}
