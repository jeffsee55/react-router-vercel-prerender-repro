import {
  index,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("home", "routes/home.tsx"),
  route("terms", "routes/terms.tsx"),
  route("privacy", "routes/privacy.tsx"),
  route("mint-risks", "routes/mint-risks.tsx"),
  route("dynamic", "routes/dynamic.tsx"),
] satisfies RouteConfig;
