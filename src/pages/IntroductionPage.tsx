import { Link } from "react-router-dom";
import { D20Mark } from "../components/D20Mark";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const rhythm = [
  {
    number: "01",
    title: "El mundo propone",
    copy: "La persona que dirige presenta un lugar, un conflicto y las consecuencias visibles de no actuar.",
  },
  {
    number: "02",
    title: "Tú decides",
    copy: "Describes lo que intenta tu personaje. La intención importa más que encontrar una acción perfecta.",
  },
  {
    number: "03",
    title: "Los dados responden",
    copy: "Cuando el resultado es incierto, una tirada introduce riesgo y abre una nueva situación.",
  },
  {
    number: "04",
    title: "La historia cambia",
    copy: "Éxito o fracaso, la ficción avanza. El grupo interpreta las consecuencias y vuelve a elegir.",
  },
];

const glossary = [
  [
    "DM",
    "La persona que presenta el mundo, interpreta sus habitantes y arbitra las reglas.",
  ],
  [
    "d20",
    "El dado de veinte caras utilizado para resolver la mayoría de acciones inciertas.",
  ],
  [
    "Campaña",
    "Una serie de aventuras conectadas en las que los personajes cambian con el tiempo.",
  ],
  [
    "Clase",
    "El conjunto principal de capacidades que define cómo afrontas los desafíos.",
  ],
  [
    "Especie",
    "Rasgos fantásticos y físicos que forman parte del origen de tu personaje.",
  ],
  [
    "Trasfondo",
    "Experiencias anteriores que aportan habilidades, relaciones y motivaciones.",
  ],
];

export default function IntroductionPage() {
  useDocumentMeta(
    "Introducción",
    "Una explicación clara del ritmo de juego, los dados y las decisiones que dan forma a una partida de rol.",
  );

  return (
    <>
      <header className="page-hero page-hero--editorial">
        <div>
          <p className="eyebrow">Antes de abrir la primera puerta</p>
          <h1>Una conversación donde cada decisión deja huella.</h1>
          <p>
            Jugar a rol consiste en imaginar una situación, elegir una acción y
            descubrir juntos qué ocurre después. Las reglas sostienen la
            incertidumbre; las personas construyen la historia.
          </p>
        </div>
        <aside className="quote-card">
          <D20Mark label="1" />
          <blockquote>
            “No necesitas conocer todas las reglas. Solo saber qué quiere
            intentar tu personaje.”
          </blockquote>
        </aside>
      </header>

      <section className="rhythm-section content-shell">
        <div className="section-heading">
          <p className="eyebrow">El ritmo de una escena</p>
          <h2>Cuatro movimientos que se repiten</h2>
        </div>
        <ol className="rhythm-grid">
          {rhythm.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="dice-explainer content-shell">
        <div className="dice-explainer__visual">
          <D20Mark label="14" large />
          <span>tirada</span>
          <b>+</b>
          <strong>3</strong>
          <span>aptitud</span>
          <b>=</b>
          <strong>17</strong>
          <span>resultado</span>
        </div>
        <div>
          <p className="eyebrow">Cuando existe riesgo</p>
          <h2>El dado no cuenta la historia por ti.</h2>
          <p>
            Solo responde a una pregunta concreta: ¿consigues lo que intentas
            antes de que aparezca una consecuencia? Las capacidades de tu
            personaje modifican la tirada; la escena explica el resultado.
          </p>
        </div>
      </section>

      <section className="glossary-section content-shell">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Vocabulario de viaje</p>
            <h2>Seis términos para orientarte</h2>
          </div>
          <p>No hace falta memorizar. Esta guía siempre estará aquí.</p>
        </div>
        <dl className="glossary-grid">
          {glossary.map(([term, definition]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{definition}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="next-step content-shell">
        <p className="eyebrow">Siguiente elección</p>
        <h2>Empieza por la forma en que quieres actuar.</h2>
        <div className="button-row">
          <Link className="button" to="/clases">
            Comparar clases
          </Link>
          <Link className="button button--ghost" to="/especies">
            Descubrir especies
          </Link>
        </div>
      </section>
    </>
  );
}
