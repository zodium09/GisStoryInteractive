import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import vm from "node:vm";

const root = resolve(import.meta.dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);

function runBrowserData(file) {
  const source = readFileSync(resolve(root, file), "utf8");
  vm.runInContext(source, sandbox, { filename: file });
}

runBrowserData("subtopic-content.js");
runBrowserData("visual-manifest.js");

const topics = Object.keys(sandbox.window.SUBTOPIC_DETAILS || {});
const manifest = sandbox.window.GEOSTORY_VISUALS;
const errors = [];
const warnings = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

assert(topics.length === 96, `expected 96 topics, found ${topics.length}`);
assert(Boolean(manifest), "GEOSTORY_VISUALS was not created");

if (manifest) {
  const topicSet = new Set(topics);
  for (const [title, plan] of Object.entries(manifest.directPlans)) {
    assert(topicSet.has(title), `direct visual points to an unknown topic: ${title}`);
    assert(Boolean(manifest.assets[plan.primary]), `missing primary asset '${plan.primary}' for ${title}`);
    if (plan.secondary) assert(Boolean(manifest.assets[plan.secondary]), `missing secondary asset '${plan.secondary}' for ${title}`);
    assert(Boolean(plan.caption?.trim()), `missing reviewed caption for ${title}`);
  }

  for (const [key, item] of Object.entries(manifest.assets)) {
    assert(Boolean(item.id && item.src && item.alt), `asset '${key}' is missing id, src, or alt`);
    assert(item.width > 0 && item.height > 0, `asset '${key}' has invalid dimensions`);
    assert(Boolean(item.limitation?.trim()), `asset '${key}' has no limitation statement`);
    assert(existsSync(resolve(root, item.src)), `asset file does not exist: ${item.src}`);
    if (item.qaStatus !== "approved") warnings.push(`${item.id}: ${item.qaStatus}`);
  }
  assert(manifest.assets.plateBoundaries.sourceRefs.length >= 2, "plate-boundary pilot must name authoritative scientific sources");

  assert(manifest.sectionModels.length === 6, `expected 6 process chapters, found ${manifest.sectionModels.length}`);
  manifest.sectionModels.forEach((chapter, chapterIndex) => {
    assert(chapter.length === 4, `chapter ${chapterIndex + 1} must have 4 section models`);
    chapter.forEach((model, sectionIndex) => {
      const label = `chapter ${chapterIndex + 1}, section ${sectionIndex + 1}`;
      assert(model.steps?.length === 4, `${label} must have exactly 4 explicit steps`);
      assert(Boolean(model.title && model.spatialScale && model.timeScale && model.mode && model.evidence), `${label} is missing process metadata`);
    });
  });

  topics.forEach((title, index) => {
    const chapterIndex = Math.floor(index / 16);
    const plan = manifest.getLessonVisual(title, chapterIndex);
    assert(Boolean(plan?.primary), `no visual plan for ${title}`);
    assert(["direct", "context"].includes(plan?.fit), `invalid visual fit for ${title}`);
    assert(Boolean(plan?.caption && plan?.disclaimer), `caption or disclaimer missing for ${title}`);
    if (plan?.fit === "context") assert(plan.secondary === null, `context fallback must not invent secondary evidence for ${title}`);
  });
}

if (errors.length) {
  console.error(`Visual manifest failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Visual manifest valid: ${topics.length} topics, ${Object.keys(manifest.directPlans).length} direct plans, ${Object.keys(manifest.assets).length} assets, 24 section process models.`);
console.log(`${warnings.length} asset(s) remain explicitly marked for expert review.`);
