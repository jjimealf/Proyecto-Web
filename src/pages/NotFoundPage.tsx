import { Link } from "react-router-dom";
import { D20Mark } from "../components/D20Mark";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

type NotFoundPageProps = {
  embedded?: boolean;
};

export default function NotFoundPage({ embedded = false }: NotFoundPageProps) {
  useDocumentMeta(
    "Página no encontrada",
    "La página solicitada no forma parte del archivo.",
  );

  return (
    <section className={`not-found${embedded ? " is-embedded" : ""}`}>
      <D20Mark label="1" large />
      <p className="eyebrow">Fallo crítico</p>
      <h1>El mapa termina aquí.</h1>
      <p>
        La ruta que buscas no existe o fue trasladada a otra parte del archivo.
      </p>
      <Link className="button" to="/">
        Volver al inicio
      </Link>
    </section>
  );
}
