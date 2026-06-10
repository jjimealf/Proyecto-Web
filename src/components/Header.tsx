import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useFavorites } from "../context/favorites-context";
import { D20Mark } from "./D20Mark";

const navigation = [
  { to: "/", label: "Inicio", end: true },
  { to: "/introduccion", label: "Introducción" },
  { to: "/clases", label: "Clases" },
  { to: "/especies", label: "Especies" },
  { to: "/forja", label: "Forja" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useFavorites();

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink
          className="brand"
          to="/"
          aria-label="Crónicas del Dragón, inicio"
        >
          <D20Mark />
          <span className="brand__copy">
            <strong>Crónicas</strong>
            <small>del Dragón</small>
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span aria-hidden="true" className="menu-toggle__lines" />
          <span>{open ? "Cerrar" : "Menú"}</span>
        </button>

        <nav
          className={`main-navigation${open ? " is-open" : ""}`}
          id="main-navigation"
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/favoritos"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `favorites-link${isActive ? " is-active" : ""}`
            }
          >
            Favoritos
            <span aria-label={`${count} favoritos guardados`}>{count}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
