import { Link } from "react-router-dom";
import { D20Mark } from "./D20Mark";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionTo?: string;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  actionTo,
}: EmptyStateProps) {
  return (
    <section className="empty-state">
      <D20Mark label="?" large />
      <p className="eyebrow">La niebla no revela nada</p>
      <h2>{title}</h2>
      <p>{description}</p>
      {actionLabel && actionTo ? (
        <Link className="button" to={actionTo}>
          {actionLabel}
        </Link>
      ) : null}
    </section>
  );
}
