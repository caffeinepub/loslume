import { createRootRoute, createRoute } from "@tanstack/react-router";
import RootLayout from "./layouts/RootLayout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SocialsPage from "./pages/SocialsPage";

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const shopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
  component: ShopPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const socialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/socials",
  component: SocialsPage,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  shopRoute,
  aboutRoute,
  socialsRoute,
]);
