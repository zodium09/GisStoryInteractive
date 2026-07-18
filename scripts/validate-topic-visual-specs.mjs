import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import vm from "node:vm";

const root = resolve(import.meta.dirname, "..");
const specDir = resolve(root, "content", "visual-specs");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(readFileSync(resolve(root, "subtopic-content.js"), "utf8"), sandbox, {
  filename: "subtopic-content.js",
});

const catalog = Object.keys(sandbox.window.SUBTOPIC_DETAILS || {});
const catalogSet = new Set(catalog);
const errors = [];
const allowedModes = new Set(["gpt-raster", "deterministic-svg", "gis-map", "hybrid"]);

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function nonEmptyStrings(items) {
  return Array.isArray(items) && items.every((item) => typeof item === "string" && item.trim());
}

const files = readdirSync(specDir).filter((file) => file.endsWith(".json")).sort();
const specs = files.flatMap((file) => {
  const data = JSON.parse(readFileSync(resolve(specDir, file), "utf8"));
  const items = Array.isArray(data) ? data : data.specs;
  assert(Array.isArray(items), `${file}: root must be an array or contain a specs array`);
  return (items || []).map((item) => ({ ...item, sourceFile: file }));
});

const seen = new Set();
for (const spec of specs) {
  const label = `${spec.sourceFile}: ${spec.title || "<untitled>"}`;
  assert(typeof spec.title === "string" && spec.title.trim(), `${label}: missing title`);
  assert(catalogSet.has(spec.title), `${label}: title is not in the 96-topic catalog`);
  assert(!seen.has(spec.title), `${label}: duplicate title`);
  seen.add(spec.title);
  assert(typeof spec.visualKind === "string" && spec.visualKind.trim(), `${label}: missing visualKind`);
  assert(allowedModes.has(spec.productionMode), `${label}: invalid productionMode '${spec.productionMode}'`);
  assert(typeof spec.lessonObjective === "string" && spec.lessonObjective.trim(), `${label}: missing lessonObjective`);
  assert(nonEmptyStrings(spec.mustShow) && spec.mustShow.length >= 3 && spec.mustShow.length <= 6, `${label}: mustShow needs 3-6 items`);
  assert(nonEmptyStrings(spec.labelsTH) && spec.labelsTH.length >= 3 && spec.labelsTH.length <= 8, `${label}: labelsTH needs 3-8 items`);
  assert(typeof spec.inImageExplanationTH === "string" && [...spec.inImageExplanationTH.trim()].length >= 10 && [...spec.inImageExplanationTH.trim()].length <= 90, `${label}: inImageExplanationTH needs 10-90 characters`);
  assert(nonEmptyStrings(spec.mustAvoid) && spec.mustAvoid.length >= 2 && spec.mustAvoid.length <= 5, `${label}: mustAvoid needs 2-5 items`);
  assert(typeof spec.spatialScale === "string" && spec.spatialScale.trim(), `${label}: missing spatialScale`);
  assert(typeof spec.timeScale === "string" && spec.timeScale.trim(), `${label}: missing timeScale`);
  assert(spec.reviewStatus === "draft", `${label}: new specs must remain draft until independent review`);
}

assert(catalog.length === 96, `expected 96 catalog topics, found ${catalog.length}`);
assert(specs.length === 96, `expected 96 visual specifications, found ${specs.length}`);
for (const title of catalog) assert(seen.has(title), `missing visual specification: ${title}`);

if (errors.length) {
  console.error(`Topic visual specification validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

const modeCounts = Object.fromEntries(
  [...allowedModes].map((mode) => [mode, specs.filter((spec) => spec.productionMode === mode).length]),
);
console.log(`Topic visual specifications valid: ${specs.length} topics across ${files.length} files.`);
console.log(`Production modes: ${JSON.stringify(modeCounts)}.`);
