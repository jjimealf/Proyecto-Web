import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { D20Mark } from "./components/D20Mark";
import { Layout } from "./components/Layout";
import { FavoritesProvider } from "./context/FavoritesProvider";

const HomePage = lazy(() => import("./pages/HomePage"));
const IntroductionPage = lazy(() => import("./pages/IntroductionPage"));
const WorldPage = lazy(() => import("./pages/WorldPage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const ForgePage = lazy(() => import("./pages/ForgePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function PageLoader() {
  return (
    <div className="page-loader" aria-label="Cargando página">
      <D20Mark label="…" large />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="introduccion" element={<IntroductionPage />} />
              <Route path="mundo" element={<WorldPage />} />
              <Route path="clases" element={<CatalogPage type="classes" />} />
              <Route
                path="clases/:slug"
                element={<DetailPage type="class" />}
              />
              <Route path="especies" element={<CatalogPage type="species" />} />
              <Route
                path="especies/:slug"
                element={<DetailPage type="species" />}
              />
              <Route
                path="razas"
                element={<Navigate replace to="/especies" />}
              />
              <Route path="forja" element={<ForgePage />} />
              <Route path="favoritos" element={<FavoritesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </FavoritesProvider>
      <Analytics />
    </BrowserRouter>
  );
}
