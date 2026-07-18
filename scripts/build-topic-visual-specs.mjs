import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const specDir = resolve(root, "content", "visual-specs");
const files = readdirSync(specDir).filter((file) => file.endsWith(".json")).sort();
const specs = files.flatMap((file) => {
  const data = JSON.parse(readFileSync(resolve(specDir, file), "utf8"));
  return Array.isArray(data) ? data : data.specs || [];
});
const byTitle = Object.fromEntries(specs.map((spec) => [spec.title, spec]));
const output = `// Generated from content/visual-specs/*.json. Edit the JSON sources, then run npm run build:specs.\nwindow.GEOSTORY_TOPIC_VISUAL_SPECS = Object.freeze(${JSON.stringify(byTitle, null, 2)});\n`;
writeFileSync(resolve(root, "topic-visual-specs.js"), output, "utf8");
console.log(`Built topic-visual-specs.js with ${specs.length} topics.`);
