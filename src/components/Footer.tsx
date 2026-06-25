import { Link } from "react-router-dom";
import { D20Mark } from "./D20Mark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="footer-brand">
          <D20Mark label="20" />
          <div>
            <strong>Crónicas del Dragón</strong>
            <p>Un atlas de worldbuilding y una guía para crear héroes.</p>
          </div>
        </div>
        <div className="footer-links" aria-label="Enlaces de pie de página">
          <Link to="/mundo">Atlas de Eryndor</Link>
          <Link to="/introduccion">Cómo se juega</Link>
          <Link to="/clases">Catálogo de clases</Link>
          <Link to="/especies">Catálogo de especies</Link>
          <Link to="/forja">Forja tu leyenda</Link>
        </div>
      </div>
      <div className="site-footer__legal">
        <p>
          Contenido de reglas adaptado del SRD 5.2.1 bajo licencia{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            rel="noreferrer"
            target="_blank"
          >
            CC BY 4.0
          </a>
          . Proyecto no afiliado con Wizards of the Coast.
        </p>
        <a
          href="https://www.dndbeyond.com/srd"
          rel="noreferrer"
          target="_blank"
        >
          Consultar SRD oficial
        </a>
      </div>
    </footer>
  );
}
