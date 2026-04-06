// ──────────────────────────────────────────────────────────
// app.js — Bilingual engine & dynamic rendering
// All content lives in content.js (loaded before this file).
// ──────────────────────────────────────────────────────────

let revealObserver;

// ── Helpers ──────────────────────────────────────────────

function resolvePath(obj, dotPath) {
  return dotPath.split(".").reduce((acc, segment) => {
    if (acc == null) return undefined;
    const index = Number(segment);
    return Number.isInteger(index) ? acc[index] : acc[segment];
  }, obj);
}

function textFor(value, lang) {
  if (typeof value === "string") return value;
  return value?.[lang] ?? "";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function withYouTubeClientIdentity(url) {
  if (typeof url !== "string" || !url.includes("youtube.com/embed/")) return url;
  if (window.location.protocol === "file:") return url;

  const pageOrigin = window.location.origin;
  if (!pageOrigin || pageOrigin === "null") return url;

  try {
    const embedUrl = new URL(url, window.location.href);
    embedUrl.searchParams.set("origin", pageOrigin);
    return embedUrl.toString();
  } catch {
    return url;
  }
}

function hardenYouTubeEmbeds(scope = document) {
  scope.querySelectorAll('iframe[src*="youtube.com/embed/"]').forEach((frame) => {
    const currentSrc = frame.getAttribute("src");
    const nextSrc = withYouTubeClientIdentity(currentSrc);

    if (nextSrc !== currentSrc) {
      frame.setAttribute("src", nextSrc);
    }

    if (!frame.hasAttribute("referrerpolicy")) {
      frame.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    }
  });
}

// ── Status markup ───────────────────────────────────────

function statusMarkup(status, tag, lang) {
  const statusObj = content.status[status];
  const statusLabel = statusObj ? textFor(statusObj, lang) : "";
  const tagText = textFor(tag, lang);
  const statusClass = content.statusClasses[status] ?? "note";

  return `
    <div class="card-head">
      <span class="status status-${statusClass}">${escapeHtml(statusLabel)}</span>
      <span class="card-tag">${escapeHtml(tagText)}</span>
    </div>
  `;
}

// ── Render functions ────────────────────────────────────

function renderPills(containerSelector, items, pillClass, lang) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = items
    .map((item) => `<span class="${pillClass}">${escapeHtml(textFor(item, lang))}</span>`)
    .join("");
}

function renderMediaGrid(containerSelector, items, lang) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = items
    .map((item) => {
      const media = item.embed
        ? `
          <iframe
            src="${escapeHtml(withYouTubeClientIdentity(item.embed))}"
            title="${escapeHtml(textFor(item.title, lang))}"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        `
        : `<video controls preload="metadata" playsinline src="${escapeHtml(item.src)}"></video>`;

      const button = item.href
        ? `
          <div class="panel-actions">
              <a
                class="button button-secondary"
                href="${escapeHtml(item.href)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                ${escapeHtml(textFor(content.labels.openLink, lang))}
              </a>
          </div>
        `
        : "";

      return `
        <article class="media-card reveal">
          ${statusMarkup(item.status, item.tag, lang)}
          <h3>${escapeHtml(textFor(item.title, lang))}</h3>
          <p>${escapeHtml(textFor(item.copy, lang))}</p>
          ${media}
          ${button}
          <p class="asset-note">${escapeHtml(item.note)}</p>
        </article>
      `;
    })
    .join("");
}

function renderPlaceholderGrid(containerSelector, items, lang) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = items
    .map((item) => {
      const visual = item.image
        ? `
          <div class="placeholder-art placeholder-art-image">
            <img
              src="${escapeHtml(item.image)}"
              alt="${escapeHtml(textFor(item.title, lang))}"
              loading="lazy"
            />
          </div>
        `
        : `
          <div class="placeholder-art">
            <span>${escapeHtml(textFor(item.art, lang))}</span>
          </div>
        `;

      return `
        <article class="placeholder-card reveal">
          ${statusMarkup(item.status || "placeholder", item.tag, lang)}
          <h3>${escapeHtml(textFor(item.title, lang))}</h3>
          <p>${escapeHtml(textFor(item.copy, lang))}</p>
          ${visual}
        </article>
      `;
    })
    .join("");
}

function renderToolGrid(lang) {
  const container = document.querySelector("#tool-grid");
  if (!container) return;

  const fieldKeys = Object.keys(content.tools.fieldLabels);

  container.innerHTML = content.tools.items
    .map((item) => {
      const rows = fieldKeys
        .map(
          (key) => `
            <div class="tool-row">
              <strong>${escapeHtml(textFor(content.tools.fieldLabels[key], lang))}</strong>
              <p>${escapeHtml(textFor(item.fields[key], lang))}</p>
            </div>
          `,
        )
        .join("");

      return `
        <article class="tool-card reveal">
          ${statusMarkup(item.status, item.tag, lang)}
          <h3>${escapeHtml(textFor(item.title, lang))}</h3>
          <p>${escapeHtml(textFor(item.copy, lang))}</p>
          <div class="tool-meta">${rows}</div>
        </article>
      `;
    })
    .join("");
}

function renderArchiveGrid(lang) {
  const container = document.querySelector("#archive-grid");
  if (!container) return;

  container.innerHTML = content.archive.items
    .map((item) => {
      const media = item.image
        ? `
          <div class="archive-media">
            <img
              src="${escapeHtml(item.image)}"
              alt="${escapeHtml(textFor(item.title, lang))}"
              loading="lazy"
            />
          </div>
        `
        : "";

      const button = item.href
        ? `
            <a
              class="button button-secondary"
              href="${escapeHtml(item.href)}"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${escapeHtml(textFor(item.button, lang) || textFor(content.labels.openLink, lang))}
            </a>
        `
        : "";

      const note = item.note
        ? `<p class="meta-line">${escapeHtml(textFor(item.note, lang))}</p>`
        : "";

      return `
        <article class="archive-card reveal">
          ${statusMarkup(item.status, item.tag, lang)}
          <h3>${escapeHtml(textFor(item.title, lang))}</h3>
          <p>${escapeHtml(textFor(item.copy, lang))}</p>
          ${media}
          ${note}
          ${button}
        </article>
      `;
    })
    .join("");
}

// ── Static translations (data-i18n) ────────────────────

function applyStaticTranslations(lang) {
  document.documentElement.lang = lang;

  const titleKey = document.querySelector("title")?.dataset?.i18nTitle;
  if (titleKey) {
    const resolved = resolvePath(content, titleKey);
    if (resolved) document.title = textFor(resolved, lang);
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const resolved = resolvePath(content, key);
    if (resolved != null) {
      node.textContent = textFor(resolved, lang);
    }
  });
}

function updateArchiveCount(lang) {
  const el = document.querySelector("#archive-count");
  if (!el || !content.archive) return;
  const a = content.archive;
  let count = (a.items || []).length;
  if (a.sections) {
    for (const sec of Object.values(a.sections)) {
      if (Array.isArray(sec.items)) count += sec.items.length;
    }
  }
  const tpl = textFor(content.homepage?.previews?.archive?.stat, lang) || "";
  el.textContent = tpl.replace("{count}", count);
}

// ── Dynamic content ─────────────────────────────────────

function renderDynamicContent(lang) {
  renderPills("#soulborn-worlds", content.soulborn?.worlds, "world-tag", lang);
  renderPills("#tarot-cards", content.tarot?.cards, "card-tag-pill", lang);
  renderMediaGrid("#soulborn-media", [content.soulborn?.sections?.iterations, content.soulborn?.sections?.production].filter(Boolean), lang);
  renderPlaceholderGrid("#soulborn-placeholders", content.soulborn?.sections?.iterations?.placeholders || [], lang);
  renderMediaGrid("#tarot-media", content.tarot?.sections?.bulkGeneration?.media || [], lang);
  renderPlaceholderGrid("#tarot-placeholders", content.tarot?.sections?.placeholders || [], lang);
  renderToolGrid(lang);
  renderArchiveGrid(lang);
  updateArchiveCount(lang);
  hardenYouTubeEmbeds();
  bindRevealTargets();
}

// ── Language management ─────────────────────────────────

function updateLanguageButtons(lang) {
  document.querySelectorAll(".lang-pill").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
    button.setAttribute("aria-checked", button.dataset.lang === lang);
  });
}

function storeLanguage(lang) {
  try {
    localStorage.setItem("ocl-language", lang);
  } catch {}
}

function readStoredLanguage() {
  try {
    return localStorage.getItem("ocl-language");
  } catch {
    return null;
  }
}

function applyLanguage(lang) {
  const safeLang = lang === "en" ? "en" : "fr";
  applyStaticTranslations(safeLang);
  renderDynamicContent(safeLang);
  updateLanguageButtons(safeLang);
  storeLanguage(safeLang);
}

function setupLanguageSwitcher() {
  document.querySelectorAll(".lang-pill").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
    });
  });
}

// ── Scroll & reveal ─────────────────────────────────────

function bindRevealTargets() {
  const targets = document.querySelectorAll(".reveal:not([data-reveal-bound])");

  if (!revealObserver) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  targets.forEach((target) => {
    target.dataset.revealBound = "true";
    revealObserver.observe(target);
  });
}

function setupRevealObserver() {
  if (!("IntersectionObserver" in window)) {
    revealObserver = null;
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px",
    },
  );
}

function updateActiveNav(sectionId) {
  document.querySelectorAll(".topnav a").forEach((link) => {
    const target = link.getAttribute("href")?.slice(1);
    link.classList.toggle("is-active", target === sectionId);
  });
}

function setupSectionObserver() {
  if (!("IntersectionObserver" in window)) return;

  const sections = ["soulborn", "tarot", "toolchain", "archive"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

      if (visible?.target?.id) {
        updateActiveNav(visible.target.id);
      }
    },
    {
      threshold: [0.2, 0.45, 0.7],
      rootMargin: "-35% 0px -45% 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
}

// ── Init ────────────────────────────────────────────────

function init() {
  setupRevealObserver();
  setupSectionObserver();
  hardenYouTubeEmbeds();
}

init();
