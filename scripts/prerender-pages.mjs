import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const basePath = process.env.BASE_PATH ?? "/";
const server = await import(pathToFileURL(resolve("dist/server/assets/server.js")));
const response = await server.default.fetch(
  new Request(`https://team-imperios.local${basePath}`),
  {},
  {},
);

if (!response.ok) {
  throw new Error(`Could not prerender GitHub Pages entry: ${response.status}`);
}

await mkdir(resolve("dist/client"), { recursive: true });
await writeFile(resolve("dist/client/index.html"), await response.text());
