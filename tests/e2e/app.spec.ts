import { expect, test, type Page } from "@playwright/test";

async function openMobileNavigation(page: Page) {
  const toggle = page.locator(".menu-toggle");
  if (await toggle.isVisible()) {
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
  }
}

test("navega entre el inicio, catálogo y detalle", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /Toda leyenda/i }),
  ).toBeVisible();

  await openMobileNavigation(page);
  await page.getByRole("link", { name: "Clases", exact: true }).click();
  await expect(page).toHaveURL(/\/clases$/);
  await expect(page.getByRole("heading", { name: "Clases" })).toBeVisible();

  await page.getByRole("link", { name: "Bárbaro" }).first().click();
  await expect(page).toHaveURL(/\/clases\/barbaro$/);
  await expect(page.getByRole("heading", { name: "Bárbaro" })).toBeVisible();
});

test("sincroniza búsqueda con la URL y filtra resultados", async ({ page }) => {
  await page.goto("/clases");
  const search = page.getByRole("searchbox");

  await search.fill("sigilo");

  await expect(page).toHaveURL(/q=sigilo/);
  await expect(page.getByRole("heading", { name: "Pícaro" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Bárbaro" })).toHaveCount(0);
});

test("persiste favoritos después de recargar", async ({ page }) => {
  await page.goto("/clases/barbaro");
  await page
    .getByRole("button", { name: "Guardar Bárbaro en favoritos" })
    .click();

  await page.reload();

  await expect(
    page.getByRole("button", { name: "Quitar Bárbaro de favoritos" }),
  ).toBeVisible();
  await openMobileNavigation(page);
  await page.getByRole("link", { name: /Favoritos/ }).click();
  await expect(page.getByRole("heading", { name: "Bárbaro" })).toBeVisible();
});

test("la forja bloquea una elección y guarda el resultado", async ({
  page,
}) => {
  await page.goto("/forja");
  const cards = page.locator(".forge-card");
  const initialSpecies = await cards.nth(0).getByRole("heading").textContent();

  await cards.nth(0).getByRole("button", { name: "Bloquear" }).click();
  await page.getByRole("button", { name: "Volver a lanzar" }).click();

  await expect(cards.nth(0).getByRole("heading")).toHaveText(initialSpecies!);
  await page.getByRole("button", { name: "Guardar combinación" }).click();
  await expect(
    page.getByRole("heading", { name: "Combinaciones guardadas" }),
  ).toBeVisible();
});

test("el menú móvil permite llegar a especies", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes("mobile"), "Solo viewport móvil");
  await page.goto("/");

  const menu = page.locator(".menu-toggle");
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.getByRole("link", { name: "Especies", exact: true }).click();

  await expect(page).toHaveURL(/\/especies$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
});
