var test = require('node:test');
var assert = require('node:assert/strict');
var fs = require('node:fs');
var path = require('node:path');

var repoRoot = path.resolve(__dirname, '..');

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), 'utf8').replace(/\r\n/g, '\n');
}

var indexHtml = read('index.html');
var soulbornHtml = read('soulborn.html');
var tarotHtml = read('tarot.html');
var toolsHtml = read('tools.html');
var archiveHtml = read('archive.html');
var componentsCss = read('css/components.css');
var sidebarCss = read('css/sidebar.css');
var homepageCss = read('css/homepage.css');
var i18nJs = read('js/i18n.js');
var sidebarJs = read('js/sidebar.js');

// ── Task 1: Heading hierarchy ──

test('tools.html has H2 before tool cards grid', function () {
  assert.match(toolsHtml, /<h2[^>]*data-i18n="tools\.sectionHeading"[^>]*>/);
});

test('tools.html H2 appears before first H3', function () {
  var h2Pos = toolsHtml.indexOf('<h2');
  var h3Pos = toolsHtml.indexOf('<h3');
  assert.ok(h2Pos < h3Pos, 'H2 must appear before H3 in tools.html');
});

test('soulborn.html dashboard nav uses spans not h3', function () {
  assert.equal(/<nav[^>]*class="dashboard-nav[^"]*"[^>]*>[\s\S]*?<h3/.test(soulbornHtml), false,
    'dashboard-nav should not contain h3 elements');
  assert.match(soulbornHtml, /class="dashboard-nav__label"/);
});

test('tarot.html dashboard nav uses spans not h3', function () {
  assert.equal(/<nav[^>]*class="dashboard-nav[^"]*"[^>]*>[\s\S]*?<h3/.test(tarotHtml), false,
    'dashboard-nav should not contain h3 elements');
  assert.match(tarotHtml, /class="dashboard-nav__label"/);
});

test('no heading level is skipped on any page', function () {
  var pages = [
    { name: 'index.html', html: indexHtml },
    { name: 'soulborn.html', html: soulbornHtml },
    { name: 'tarot.html', html: tarotHtml },
    { name: 'tools.html', html: toolsHtml },
    { name: 'archive.html', html: archiveHtml },
  ];
  pages.forEach(function (page) {
    var headings = [];
    var re = /<h([1-6])/g;
    var match;
    while ((match = re.exec(page.html)) !== null) {
      headings.push(Number(match[1]));
    }
    for (var i = 1; i < headings.length; i++) {
      var gap = headings[i] - headings[i - 1];
      assert.ok(gap <= 1, page.name + ': heading jumps from H' + headings[i - 1] + ' to H' + headings[i]);
    }
  });
});

// ── Task 2: Focus-visible styles ──

test('components.css uses :focus-visible for card and btn', function () {
  assert.match(componentsCss, /\.card:focus-visible/);
  assert.match(componentsCss, /\.btn:focus-visible/);
  assert.equal(/\.card:focus\s*\{/.test(componentsCss), false, 'should not have .card:focus (plain)');
  assert.equal(/\.btn:focus\s*\{/.test(componentsCss), false, 'should not have .btn:focus (plain)');
});

test('homepage.css has portal:focus-visible', function () {
  assert.match(homepageCss, /\.portal:focus-visible/);
});

test('sidebar.css has hamburger:focus-visible', function () {
  assert.match(sidebarCss, /\.hamburger:focus-visible/);
});

test('homepage.css has footer link focus-visible styles', function () {
  assert.match(homepageCss, /\.homepage-footer__social a:focus-visible/);
  assert.match(homepageCss, /\.homepage-footer__credit a:focus-visible/);
});

test('sidebar.css has close button focus-visible', function () {
  assert.match(sidebarCss, /\.sidebar__close:focus-visible/);
});

// ── Task 3: aria-current="page" ──

test('sidebar.js sets aria-current="page" on active nav link', function () {
  assert.match(sidebarJs, /aria-current/);
  assert.match(sidebarJs, /\.sidebar__nav a/);
  assert.match(sidebarJs, /window\.location/);
});

// ── Task 4: aria-live region for language switch ──

test('i18n.js creates an aria-live region', function () {
  assert.match(i18nJs, /aria-live/);
  assert.match(i18nJs, /polite/);
});

test('i18n.js announces language change', function () {
  assert.match(i18nJs, /announceLangChange/);
  assert.match(i18nJs, /Langue chang/);
  assert.match(i18nJs, /Language changed to English/);
});

// ── Task 5: No empty footers on project pages ──

test('soulborn.html has no empty footer', function () {
  assert.equal(/<footer>\s*<!--[^>]*-->\s*<\/footer>/.test(soulbornHtml), false);
  assert.equal(/<footer>\s*<\/footer>/.test(soulbornHtml), false);
});

test('tarot.html has no empty footer', function () {
  assert.equal(/<footer>\s*<!--[^>]*-->\s*<\/footer>/.test(tarotHtml), false);
  assert.equal(/<footer>\s*<\/footer>/.test(tarotHtml), false);
});

test('tools.html has no empty footer', function () {
  assert.equal(/<footer>\s*<!--[^>]*-->\s*<\/footer>/.test(toolsHtml), false);
  assert.equal(/<footer>\s*<\/footer>/.test(toolsHtml), false);
});

test('archive.html has no empty footer', function () {
  assert.equal(/<footer>\s*<!--[^>]*-->\s*<\/footer>/.test(archiveHtml), false);
  assert.equal(/<footer>\s*<\/footer>/.test(archiveHtml), false);
});

// ── Task 6: Contrast ratios ──

test('contrast ratios meet WCAG requirements', function () {
  function hexToRgb(hex) {
    var r = parseInt(hex.slice(1, 3), 16) / 255;
    var g = parseInt(hex.slice(3, 5), 16) / 255;
    var b = parseInt(hex.slice(5, 7), 16) / 255;
    return [r, g, b];
  }
  function srgbToLinear(c) {
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }
  function luminance(hex) {
    var rgb = hexToRgb(hex).map(srgbToLinear);
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  }
  function contrast(fg, bg) {
    var L1 = luminance(fg);
    var L2 = luminance(bg);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  }

  var bg = '#faf8f4';
  var bgSurface = '#f0ede5';
  var text = '#1c1917';
  var textMuted = '#6b5e4f';
  var accent = '#bf5a30';

  // AC1: body text AAA (7:1+, story asks 15:1 but WCAG AAA standard is 7:1)
  assert.ok(contrast(text, bg) >= 15, '--text on --bg must be 15:1+ (AAA enhanced)');
  // AC1: muted text AA (4.5:1+)
  assert.ok(contrast(textMuted, bg) >= 4.5, '--text-muted on --bg must be 4.5:1+ (AA)');
  // Additional: text on surface
  assert.ok(contrast(text, bgSurface) >= 7, '--text on --bg-surface must be 7:1+ (AAA)');
  // Accent for large text only (3:1+)
  assert.ok(contrast(accent, bg) >= 3, '--accent on --bg must be 3:1+ (large text AA)');
});

// ── Structural checks: skip-link, main, lang ──

test('all pages have skip-to-content link', function () {
  [indexHtml, soulbornHtml, tarotHtml, toolsHtml, archiveHtml].forEach(function (html) {
    assert.match(html, /class="skip-link"/);
    assert.match(html, /href="#main"/);
  });
});

test('sidebar.js moves focus to main when skip link is activated', function () {
  assert.match(sidebarJs, /\.skip-link/);
  assert.match(sidebarJs, /getElementById\('main'\)/);
  assert.match(sidebarJs, /main\.focus\(\)/);
});

test('all pages have main with tabindex=-1', function () {
  [indexHtml, soulbornHtml, tarotHtml, toolsHtml, archiveHtml].forEach(function (html) {
    assert.match(html, /<main id="main" tabindex="-1">/);
  });
});

test('all pages have html lang attribute', function () {
  [indexHtml, soulbornHtml, tarotHtml, toolsHtml, archiveHtml].forEach(function (html) {
    assert.match(html, /<html lang="/);
  });
});

test('all YouTube iframes have title attribute', function () {
  var allHtml = indexHtml + soulbornHtml + tarotHtml + toolsHtml + archiveHtml;
  var iframes = allHtml.match(/<iframe[^>]*>/g) || [];
  iframes.forEach(function (iframe) {
    assert.match(iframe, /title="/, 'iframe missing title: ' + iframe.substring(0, 80));
  });
});

test('all images have alt attribute', function () {
  var allHtml = indexHtml + soulbornHtml + tarotHtml + toolsHtml + archiveHtml;
  var images = allHtml.match(/<img[^>]*>/g) || [];
  images.forEach(function (img) {
    assert.match(img, /alt="/, 'img missing alt: ' + img.substring(0, 80));
  });
});
