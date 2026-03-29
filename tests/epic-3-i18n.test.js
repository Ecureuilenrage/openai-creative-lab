const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const repoRoot = path.resolve(__dirname, '..');

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), 'utf8').replace(/\r\n/g, '\n');
}

function createNode(attrs, textContent) {
  const classes = new Set(String(attrs.class || '').split(/\s+/).filter(Boolean));
  const node = {
    attrs: { ...attrs },
    textContent: textContent || '',
    dataset: {},
    listeners: {},
    style: {},
    classList: {
      toggle(name, force) {
        if (force) {
          classes.add(name);
        } else {
          classes.delete(name);
        }
      },
      contains(name) {
        return classes.has(name);
      },
    },
    getAttribute(name) {
      return Object.prototype.hasOwnProperty.call(this.attrs, name) ? this.attrs[name] : null;
    },
    setAttribute(name, value) {
      this.attrs[name] = String(value);
      if (name === 'data-lang') {
        this.dataset.lang = String(value);
      }
    },
    addEventListener(type, handler) {
      this.listeners[type] = handler;
    },
    click() {
      if (this.listeners.click) {
        this.listeners.click();
      }
    },
  };

  if (attrs['data-lang']) {
    node.dataset.lang = attrs['data-lang'];
  }

  return node;
}

function createStorage(initialValue) {
  const store = new Map();
  if (initialValue !== undefined) {
    store.set('lang', initialValue);
  }

  return {
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      store.set(key, String(value));
    },
  };
}

function runI18n(initialLang) {
  const title = createNode({ 'data-i18n': 'homepage.metaTitle' }, 'Fallback title');
  const skipLink = createNode({ 'data-i18n': 'shared.a11y.skipToContent' }, 'Skip to content');
  const hamburger = createNode({
    'data-i18n-attr': 'aria-label:shared.a11y.openMenu',
    'aria-label': 'Open menu',
  });
  const logo = createNode({
    'data-i18n-attr': 'aria-label:shared.a11y.homeLink',
    'aria-label': 'Creative Lab home',
  });
  const image = createNode({
    'data-i18n-attr': 'alt:homepage.portals.soulborn.alt',
    alt: 'Soulborn - AI-generated animated world',
  });
  const frButton = createNode({
    class: 'lang-pill',
    'data-lang': 'fr',
    'data-i18n-attr': 'aria-label:shared.a11y.languageFrench',
    'aria-label': 'French',
    'aria-checked': 'false',
  }, 'FR');
  const enButton = createNode({
    class: 'lang-pill',
    'data-lang': 'en',
    'data-i18n-attr': 'aria-label:shared.a11y.languageEnglish',
    'aria-label': 'English',
    'aria-checked': 'false',
  }, 'EN');

  const nodes = [title, skipLink, hamburger, logo, image, frButton, enButton];
  const document = {
    documentElement: { lang: '' },
    body: {
      appendChild(node) {
        document.liveRegion = node;
      },
    },
    createElement() {
      return createNode({});
    },
    querySelectorAll(selector) {
      if (selector === '[data-i18n]') {
        return nodes.filter(function (node) {
          return node.getAttribute('data-i18n') !== null;
        });
      }

      if (selector === '[data-i18n-attr]') {
        return nodes.filter(function (node) {
          return node.getAttribute('data-i18n-attr') !== null;
        });
      }

      if (selector === '.lang-pill') {
        return nodes.filter(function (node) {
          return node.classList.contains('lang-pill');
        });
      }

      return [];
    },
  };

  const localStorage = createStorage(initialLang);
  const content = {
    shared: {
      a11y: {
        skipToContent: { fr: 'Aller au contenu', en: 'Skip to content' },
        openMenu: { fr: 'Ouvrir le menu', en: 'Open menu' },
        homeLink: { fr: 'Accueil Creative Lab', en: 'Creative Lab home' },
        languageFrench: { fr: 'Français', en: 'French' },
        languageEnglish: { fr: 'Anglais', en: 'English' },
      },
    },
    homepage: {
      metaTitle: { fr: 'Creative Lab FR', en: 'Creative Lab EN' },
      portals: {
        soulborn: {
          alt: {
            fr: 'Soulborn - monde animé généré par IA',
            en: 'Soulborn - AI-generated animated world',
          },
        },
      },
    },
  };

  vm.runInNewContext(read('js/i18n.js'), {
    content,
    document,
    localStorage,
    console,
  });

  return { title, skipLink, hamburger, logo, image, frButton, enButton, document, localStorage };
}

test('invalid stored languages normalize to english and keep toggle state coherent', function () {
  const runtime = runI18n('de');

  assert.equal(runtime.document.documentElement.lang, 'en');
  assert.equal(runtime.localStorage.getItem('lang'), 'en');
  assert.equal(runtime.title.textContent, 'Creative Lab EN');
  assert.equal(runtime.skipLink.textContent, 'Skip to content');
  assert.equal(runtime.hamburger.getAttribute('aria-label'), 'Open menu');
  assert.equal(runtime.logo.getAttribute('aria-label'), 'Creative Lab home');
  assert.equal(runtime.image.getAttribute('alt'), 'Soulborn - AI-generated animated world');
  assert.equal(runtime.frButton.getAttribute('aria-checked'), 'false');
  assert.equal(runtime.enButton.getAttribute('aria-checked'), 'true');
  assert.equal(runtime.frButton.classList.contains('is-active'), false);
  assert.equal(runtime.enButton.classList.contains('is-active'), true);
  assert.equal(runtime.document.liveRegion.textContent, '');
});

test('clicking the language toggle updates both text nodes and translated attributes', function () {
  const runtime = runI18n('en');

  runtime.frButton.click();

  assert.equal(runtime.document.documentElement.lang, 'fr');
  assert.equal(runtime.localStorage.getItem('lang'), 'fr');
  assert.equal(runtime.title.textContent, 'Creative Lab FR');
  assert.equal(runtime.skipLink.textContent, 'Aller au contenu');
  assert.equal(runtime.hamburger.getAttribute('aria-label'), 'Ouvrir le menu');
  assert.equal(runtime.logo.getAttribute('aria-label'), 'Accueil Creative Lab');
  assert.equal(runtime.image.getAttribute('alt'), 'Soulborn - monde animé généré par IA');
  assert.equal(runtime.frButton.getAttribute('aria-label'), 'Français');
  assert.equal(runtime.enButton.getAttribute('aria-label'), 'Anglais');
  assert.equal(runtime.frButton.getAttribute('aria-checked'), 'true');
  assert.equal(runtime.enButton.getAttribute('aria-checked'), 'false');
  assert.equal(runtime.document.liveRegion.textContent, 'Langue changée en français');
});

test('html pages keep translation hooks for the epic 3 review regressions', function () {
  const indexHtml = read('index.html');
  const toolsHtml = read('tools.html');
  const archiveHtml = read('archive.html');
  const soulbornHtml = read('soulborn.html');
  const tarotHtml = read('tarot.html');

  assert.match(indexHtml, /class="skip-link" data-i18n="shared\.a11y\.skipToContent"/);
  assert.match(indexHtml, /data-i18n-attr="aria-label:homepage\.hero\.primaryCta"/);
  assert.match(indexHtml, /data-i18n-attr="alt:homepage\.portals\.soulborn\.alt"/);
  assert.match(toolsHtml, /class="project-subtitle" data-i18n="tools\.subtitle"/);
  assert.match(archiveHtml, /data-i18n="archive\.sections\.downloads\.github\.tag"/);
  assert.match(archiveHtml, /data-i18n="archive\.sections\.downloads\.github\.tarotRepo"/);
  assert.match(archiveHtml, /data-i18n="archive\.sections\.downloads\.github\.creativeLabRepo"/);
  assert.match(soulbornHtml, /data-i18n-attr="title:soulborn\.trailer\.iframeTitle"/);
  assert.match(soulbornHtml, /data-i18n-attr="alt:soulborn\.sections\.iterations\.placeholders\.1\.alt"/);
  assert.match(tarotHtml, /data-i18n-attr="aria-label:shared\.a11y\.projectSections"/);
});

test('content source defines the new accessibility and alternate-text keys', function () {
  const source = read('content.js');

  assert.match(source, /projectSections:\s*\{\s*fr:\s*"Sections du projet",\s*en:\s*"Project sections"/);
  assert.match(source, /homepage:[\s\S]*?portals:[\s\S]*?soulborn:[\s\S]*?alt:/);
  assert.match(source, /soulborn:[\s\S]*?trailer:[\s\S]*?iframeTitle:/);
  assert.match(source, /archive:[\s\S]*?screenshots:[\s\S]*?items:[\s\S]*?alt:/);
  assert.match(source, /archive:[\s\S]*?legacy:[\s\S]*?items:[\s\S]*?alt:/);
  assert.match(source, /archive:[\s\S]*?research:[\s\S]*?alt:/);
});
