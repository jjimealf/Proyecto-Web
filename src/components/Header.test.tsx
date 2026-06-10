import axe from "axe-core";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { FavoritesProvider } from "../context/FavoritesProvider";
import { Header } from "./Header";

function renderHeader() {
  return render(
    <MemoryRouter>
      <FavoritesProvider>
        <Header />
      </FavoritesProvider>
    </MemoryRouter>,
  );
}

describe("Header", () => {
  it("abre y cierra la navegación móvil mediante un control accesible", async () => {
    const user = userEvent.setup();
    renderHeader();

    const toggle = screen.getByRole("button", { name: "Menú" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation")).toHaveClass("is-open");
  });

  it("no presenta infracciones automáticas de accesibilidad", async () => {
    const { container } = renderHeader();
    const results = await axe.run(container);

    expect(results.violations).toHaveLength(0);
  });
});
