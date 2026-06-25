import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { describe, expect, it } from "vitest";
import WorldPage from "./WorldPage";

function LocationProbe() {
  return <output data-testid="location">{useLocation().search}</output>;
}
function renderPage(initialEntry = "/mundo") {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>
        <Route
          path="/mundo"
          element={
            <>
              <WorldPage />
              <LocationProbe />
            </>
          }
        />
      </Routes>
    </MemoryRouter>,
  );
}

describe("WorldPage", () => {
  it("usa Valdoria para una región desconocida", () => {
    renderPage("/mundo?region=desconocida");
    expect(
      screen.getByRole("heading", { name: "Valdoria" }),
    ).toBeInTheDocument();
  });

  it("ordena el mapa, el selector y la ficha como una lectura panorámica", () => {
    const { container } = renderPage();
    const content = container.querySelector(".world-explorer__content");

    expect(content?.children[0]).toHaveClass("world-map");
    expect(content?.children[1]).toHaveClass("world-region-list");
    expect(content?.children[2]).toHaveClass("world-region");
  });
  it("actualiza la ficha y la URL al seleccionar una región", async () => {
    const user = userEvent.setup();
    renderPage();
    await user.click(screen.getByRole("button", { name: "Explorar Sylvaran" }));
    expect(
      screen.getByRole("heading", { name: "Sylvaran" }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("location")).toHaveTextContent(
      "?region=sylvaran",
    );
  });
});
