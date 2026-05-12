import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { spawn } from "node:child_process";

const serverRoot = join(process.cwd(), "build", "server");
const defaultBuild = join(serverRoot, "index.js");

let serverBuild = existsSync(defaultBuild) ? defaultBuild : undefined;

if (!serverBuild && existsSync(serverRoot)) {
  for (const entry of readdirSync(serverRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;

    const candidate = join(serverRoot, entry.name, "index.js");
    if (existsSync(candidate)) {
      serverBuild = candidate;
      break;
    }
  }
}

if (!serverBuild) {
  console.error("No server build found. Run `npm run build` first.");
  process.exit(1);
}

const bin = join(
  process.cwd(),
  "node_modules",
  ".bin",
  process.platform === "win32" ? "react-router-serve.cmd" : "react-router-serve",
);

const child = spawn(bin, [serverBuild], { stdio: "inherit" });
child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
