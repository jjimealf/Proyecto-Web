import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { FavoritesProvider } from "../context/FavoritesProvider";
import { FavoriteButton } from "./FavoriteButton";

describe("FavoriteButton", () => {
  it("alterna el estado y lo expone a tecnologías de asistencia", async () => {
    const user = userEvent.setup();
    render(
      <FavoritesProvider>
        <FavoriteButton kind="class" slug="barbaro" name="Bárbaro" />
      </FavoritesProvider>,
    );

    const button = screen.getByRole("button", {
      name: "Guardar Bárbaro en favoritos",
    });
    expect(button).toHaveAttribute("aria-pressed", "false");

    await user.click(button);

    expect(
      screen.getByRole("button", {
        name: "Quitar Bárbaro de favoritos",
      }),
    ).toHaveAttribute("aria-pressed", "true");
  });
});
