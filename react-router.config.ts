import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export const prerenderedRoutes = [
  "/terms",
  "/privacy",
  "/mint-risks",
  "/home",
] as const;

export default {
  ssr: true,
  presets: [vercelPreset()],
  future: {
    v8_middleware: false,
    v8_splitRouteModules: false,
  },
  async prerender() {
    console.log(
      "React Router prerender() returning:",
      prerenderedRoutes.join(", "),
    );

    return [...prerenderedRoutes];
  },
} satisfies Config;
