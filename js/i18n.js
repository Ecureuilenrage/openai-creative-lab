// js/i18n.js — Language switching engine
// Reads the global `content` object from content.js (loaded before this file).
// No dependencies. Vanilla JS only. No module bundler.

(function () {
  function normalizeLang(lang) {
    return lang === 'fr' ? 'fr' : 'en';
  }

  function resolvePath(obj, path) {
    return path.split('.').reduce(function (acc, segment) {
      if (acc == null) return undefined;
      var index = Number(segment);
      return Number.isNaN(index) ? acc[segment] : acc[index];
    }, obj);
  }

  function textFor(resolved, lang) {
    return typeof resolved === 'string' ? resolved : resolved[lang];
  }

  function applyAttributeTranslations(lang) {
    var nodes = document.querySelectorAll('[data-i18n-attr]');
    nodes.forEach(function (node) {
      var raw = node.getAttribute('data-i18n-attr');
      if (!raw) return;

      raw.split(';').forEach(function (mapping) {
        var trimmed = mapping.trim();
        if (!trimmed) return;

        var separatorIndex = trimmed.indexOf(':');
        if (separatorIndex === -1) return;

        var attributeName = trimmed.slice(0, separatorIndex).trim();
        var key = trimmed.slice(separatorIndex + 1).trim();
        if (!attributeName || !key) return;

        var resolved = resolvePath(content, key);
        if (resolved == null) return;

        var text = textFor(resolved, lang);
        if (text != null) node.setAttribute(attributeName, text);
      });
    });
  }

  function applyTranslations(lang) {
    var nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach(function (node) {
      var key = node.getAttribute('data-i18n');
      var resolved = resolvePath(content, key);
      if (resolved == null) return;
      var text = textFor(resolved, lang);
      if (text != null) node.textContent = text;
    });

    applyAttributeTranslations(lang);
  }

  function updateHtmlLang(lang) {
    document.documentElement.lang = lang;
  }

  function storeLang(lang) {
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {}
  }

  function readLang() {
    try {
      return localStorage.getItem('lang');
    } catch (e) {
      return null;
    }
  }

  function updateToggleUI(lang) {
    var buttons = document.querySelectorAll('.lang-pill');
    buttons.forEach(function (button) {
      var isActive = button.dataset.lang === lang;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-checked', String(isActive));
    });
  }

  // Create aria-live region for language switch announcements
  var liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('role', 'status');
  liveRegion.className = 'sr-only';
  liveRegion.style.cssText = 'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0';
  document.body.appendChild(liveRegion);

  function announceLangChange(lang) {
    var message = lang === 'fr' ? 'Langue changée en français' : 'Language changed to English';
    liveRegion.textContent = message;
  }

  function switchLang(lang, options) {
    var safeLang = normalizeLang(lang);
    applyTranslations(safeLang);
    updateHtmlLang(safeLang);
    updateToggleUI(safeLang);
    storeLang(safeLang);
    if (!options || options.announce !== false) {
      announceLangChange(safeLang);
    }
  }

  function init() {
    var lang = normalizeLang(readLang());
    switchLang(lang, { announce: false });

    var buttons = document.querySelectorAll('.lang-pill');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        switchLang(button.dataset.lang);
      });
    });
  }

  init();
})();
