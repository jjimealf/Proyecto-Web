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
