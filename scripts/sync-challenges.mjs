import fs from "node:fs";
import path from "node:path";

const REPO_OWNER = "cristianfloyd";
const REPO_NAME = "Coding-Challenges-Showcase";
const STANDALONE_REPOS = ["GildedRose-Refactoring-Kata-python", "sicoss_backend", "ABC-dataset"];

const OUTPUT_PATH = path.join(process.cwd(), "src/data/challenges.json");

async function fetchGitHub(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Portfolio-Sync-Script",
    },
  });
  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

function extractMetadata(content, defaultData) {
  const titleMatch = content.match(/^# (.*)/m);
  const title = titleMatch ? titleMatch[1].trim() : defaultData.title;

  // Extract first real paragraph after title and badges
  const afterTitle = content.split(/^# .*/m)[1] || content;
  const paragraphs = afterTitle
    .split("\n\n")
    .map((p) => p.trim())
    .filter((p) => p.length > 0 && !p.startsWith("[!") && !p.startsWith("<"));

  const description = paragraphs[0]?.replace(/[*#`_]/g, "").trim() || "Desafío técnico implementado con altos estándares de calidad.";

  const tagsSet = new Set(defaultData.tags || []);
  const lowerContent = content.toLowerCase();

  if (lowerContent.includes("python")) tagsSet.add("Python");
  if (lowerContent.includes("javascript") || lowerContent.includes(" js ")) tagsSet.add("JS");
  if (lowerContent.includes("typescript") || lowerContent.includes(" ts ")) tagsSet.add("TS");
  if (lowerContent.includes("react")) tagsSet.add("React");
  if (lowerContent.includes("algorithm") || lowerContent.includes("algoritmo")) tagsSet.add("Algorithms");
  if (lowerContent.includes("refactoring") || lowerContent.includes("refactorización")) tagsSet.add("Refactoring");
  if (lowerContent.includes("testing") || lowerContent.includes(" tdd ")) tagsSet.add("Testing");
  if (lowerContent.includes("pandas") || lowerContent.includes("data science")) tagsSet.add("Data");
  if (lowerContent.includes("bash") || lowerContent.includes("linux")) tagsSet.add("Linux");

  // Pick a sensible icon
  let icon = "Code";
  if (tagsSet.has("Algorithms") || tagsSet.has("Refactoring")) icon = "Cpu";
  if (tagsSet.has("React") || tagsSet.has("TS")) icon = "Layout";
  if (tagsSet.has("Linux")) icon = "Terminal";
  if (tagsSet.has("Data")) icon = "Database";

  return {
    title,
    description: description.length > 150 ? description.substring(0, 147) + "..." : description,
    tags: Array.from(tagsSet),
    icon,
  };
}

async function sync() {
  console.log("🚀 Iniciando sincronización de retos desde GitHub...");
  const challenges = [];

  // 1. Fetch from Coding-Challenges-Showcase subdirectories
  try {
    const contents = await fetchGitHub(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/`);
    if (contents) {
      const directories = contents.filter((item) => item.type === "dir" && !item.name.startsWith(".") && item.name !== "02-portfolio-web");

      for (const dir of directories) {
        console.log(`  - Procesando carpeta: ${dir.name}`);
        const readmeData = await fetchGitHub(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${dir.path}/README.md`);
        if (readmeData) {
          const content = Buffer.from(readmeData.content, "base64").toString("utf-8");
          const metadata = extractMetadata(content, { title: dir.name, tags: [] });
          challenges.push({
            ...metadata,
            link: dir.html_url,
          });
        }
      }
    }
  } catch (e) {
    console.error(`❌ Error en repo principal: ${e.message}`);
  }

  // 2. Fetch from standalone repos
  for (const repoName of STANDALONE_REPOS) {
    console.log(`  - Procesando repositorio standalone: ${repoName}`);
    try {
      const repoData = await fetchGitHub(`https://api.github.com/repos/${REPO_OWNER}/${repoName}`);
      if (repoData) {
        const readmeData = await fetchGitHub(`https://api.github.com/repos/${REPO_OWNER}/${repoName}/contents/README.md`);
        let metadata;
        if (readmeData) {
          const content = Buffer.from(readmeData.content, "base64").toString("utf-8");
          metadata = extractMetadata(content, { title: repoData.name, tags: [repoData.language].filter(Boolean) });
        } else {
          metadata = {
            title: repoData.name,
            description: repoData.description || "Proyecto en el repositorio de GitHub.",
            tags: [repoData.language].filter(Boolean),
            icon: "Code",
          };
        }
        challenges.push({
          ...metadata,
          link: repoData.html_url,
        });
      }
    } catch (e) {
      console.error(`❌ Error en repo ${repoName}: ${e.message}`);
    }
  }

  // Sort challenges (Title alphabetically or by number)
  challenges.sort((a, b) => a.title.localeCompare(b.title));

  // Save to file
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(challenges, null, 2));
  console.log(`\n✅ Sincronización completada. Se encontraron ${challenges.length} retos.`);
  console.log(`📂 Datos guardados en: ${OUTPUT_PATH}`);
}

sync().catch((err) => {
  console.error("💥 Error fatal:", err);
  process.exit(1);
});
