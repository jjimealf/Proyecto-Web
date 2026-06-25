import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { worldRegions } from "../../data/world";
import { WorldMap } from "./WorldMap";

describe("WorldMap", () => {
  it("expone las seis regiones como controles accesibles", () => {
    render(
      <WorldMap
        regions={worldRegions}
        selectedSlug="valdoria"
        onSelect={() => undefined}
      />,
    );
    expect(screen.getAllByRole("button", { name: /Explorar/ })).toHaveLength(6);
    expect(
      screen.getByRole("button", { name: "Explorar Valdoria" }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("informa de la región seleccionada", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <WorldMap
        regions={worldRegions}
        selectedSlug="valdoria"
        onSelect={onSelect}
      />,
    );
    await user.click(screen.getByRole("button", { name: "Explorar Sylvaran" }));
    expect(onSelect).toHaveBeenCalledWith("sylvaran");
  });
});
