import { existsSync } from "node:fs";
import { join } from "node:path";

const prerenderedRoutes = ["home", "terms", "privacy", "mint-risks"];
const missing = [];

for (const route of prerenderedRoutes) {
  const htmlPath = join("build", "client", route, "index.html");
  const dataPath = join("build", "client", `${route}.data`);

  if (!existsSync(htmlPath)) missing.push(htmlPath);
  if (!existsSync(dataPath)) missing.push(dataPath);
}

const dynamicHtmlPath = join("build", "client", "dynamic", "index.html");

if (existsSync(dynamicHtmlPath)) {
  missing.push(`unexpected prerendered control route: ${dynamicHtmlPath}`);
}

if (missing.length > 0) {
  console.error("Prerender verification failed:");
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log("Prerender verification passed.");
console.log("Static routes generated:", prerenderedRoutes.join(", "));
console.log("Dynamic control route was not prerendered.");
