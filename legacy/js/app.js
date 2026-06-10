const pages = [
  ["Principal.html", "Inicio"],
  ["introduccion.html", "Introducción"],
  ["razas.html", "Razas"],
  ["clases.html", "Clases"],
  ["en_construccion.html", "Trasfondos"],
];

const currentPage = location.pathname.split("/").pop() || "Principal.html";
const activePage = {
  "enano.html": "razas.html",
  "razas_intro.html": "razas.html",
  "barbaro.html": "clases.html",
  "clases_intro.html": "clases.html",
}[currentPage] || currentPage;
const header = document.createElement("header");
header.className = "site-header";
header.innerHTML = `
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <nav class="site-nav" aria-label="Navegación principal">
    <a class="brand" href="Principal.html">
      <span class="brand-mark" aria-hidden="true">D20</span>
      <span>Crónicas del Dragón</span>
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links">
      Menú
    </button>
    <ul class="nav-links" id="nav-links">
      ${pages.map(([href, label]) => `
        <li><a href="${href}" ${activePage === href ? 'aria-current="page"' : ""}>${label}</a></li>
      `).join("")}
    </ul>
  </nav>
`;

document.body.prepend(header);

const mainTarget = document.querySelector("main, .columnas, .construction, body > h1");
if (mainTarget && !mainTarget.id) {
  mainTarget.id = "contenido";
}

const toggle = header.querySelector(".menu-toggle");
const navLinks = header.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  if (!header.contains(event.target) && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

const article = document.querySelector(".article-page");
if (article) {
  const headings = [...article.querySelectorAll(":scope > h1")];

  headings.forEach((heading, index) => {
    const nextHeading = headings[index + 1] || null;
    const section = document.createElement("details");
    section.className = "article-section";
    section.open = index === 0;

    const summary = document.createElement("summary");
    summary.innerHTML = `<span>${heading.textContent.trim()}</span><span class="summary-icon" aria-hidden="true"></span>`;

    const content = document.createElement("div");
    content.className = "section-content";

    article.insertBefore(section, heading);
    section.append(summary, content);

    let node = heading.nextSibling;
    while (node && node !== nextHeading) {
      const nextNode = node.nextSibling;
      content.append(node);
      node = nextNode;
    }
    heading.remove();
  });

  if (headings.length) {
    const controls = document.createElement("div");
    controls.className = "section-controls";
    controls.innerHTML = `
      <span>Lectura por capítulos</span>
      <div>
        <button type="button" data-section-action="open">Abrir todo</button>
        <button type="button" data-section-action="close">Cerrar todo</button>
      </div>
    `;
    article.insertBefore(controls, article.querySelector(".article-section"));

    controls.addEventListener("click", (event) => {
      const action = event.target.dataset.sectionAction;
      if (!action) return;
      article.querySelectorAll(".article-section").forEach((section) => {
        section.open = action === "open";
      });
    });
  }
}

const footer = document.createElement("footer");
footer.className = "site-footer";
footer.innerHTML = `<p>Crónicas del Dragón · Guía de juego creada para aventureros</p>`;
document.body.append(footer);
