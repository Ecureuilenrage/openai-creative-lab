const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), 'utf8').replace(/\r\n/g, '\n');
}

const animationsCss = read('css/animations.css');
const componentsCss = read('css/components.css');
const sidebarCss = read('css/sidebar.css');
const homepageCss = read('css/homepage.css');
const indexHtml = read('index.html');
const allActiveCss = [animationsCss, componentsCss, sidebarCss, homepageCss].join('\n');

test('scoped inline content links receive hover and focus styles', function () {
  assert.match(
    animationsCss,
    /main a:not\(\.btn\):not\(\.card\):not\(\.skip-link\)\s*\{[\s\S]*?color:\s*var\(--accent\);[\s\S]*?text-decoration-line:\s*underline;[\s\S]*?text-decoration-color:\s*transparent;[\s\S]*?transition:\s*color 0\.15s var\(--ease\), text-decoration-color 0\.15s var\(--ease\);/
  );

  assert.match(
    animationsCss,
    /main a:not\(\.btn\):not\(\.card\):not\(\.skip-link\):hover,\s*main a:not\(\.btn\):not\(\.card\):not\(\.skip-link\):focus-visible\s*\{[\s\S]*?color:\s*var\(--accent-hover\);[\s\S]*?text-decoration-color:\s*var\(--accent\);/
  );
});

test('reduced motion overrides make hover transitions instant without removing hover states', function () {
  assert.match(
    animationsCss,
    /@media \(prefers-reduced-motion: reduce\)\s*\{[\s\S]*?\.card,\s*\.btn,\s*\.sidebar__nav a,\s*\.sidebar__social a,\s*\.sidebar__credit a,\s*\.sidebar__portfolio a,\s*\.lang-pill,\s*main a:not\(\.btn\):not\(\.card\):not\(\.skip-link\)\s*\{[\s\S]*?transition-duration:\s*0s;/
  );
});

test('cards and buttons keep the specified hover and active offsets', function () {
  assert.match(
    componentsCss,
    /\.card:hover\s*\{[\s\S]*?transform:\s*translate\(-2px,\s*-2px\);[\s\S]*?box-shadow:\s*8px 8px 0 var\(--shadow-color\);/
  );
  assert.match(
    componentsCss,
    /\.card:active\s*\{[\s\S]*?transform:\s*translate\(0,\s*0\);[\s\S]*?box-shadow:\s*4px 4px 0 var\(--shadow-color\);/
  );
  assert.match(
    componentsCss,
    /\.btn:hover\s*\{[\s\S]*?transform:\s*translate\(-1px,\s*-1px\);[\s\S]*?box-shadow:\s*5px 5px 0 var\(--shadow-color\);/
  );
  assert.match(
    componentsCss,
    /\.btn:active\s*\{[\s\S]*?transform:\s*translate\(1px,\s*1px\);[\s\S]*?box-shadow:\s*3px 3px 0 var\(--shadow-color\);/
  );
});

test('sidebar links retain visual hover feedback', function () {
  assert.match(
    sidebarCss,
    /\.sidebar__nav a\s*\{[\s\S]*?transition:\s*color 0\.15s var\(--ease\), border-color 0\.15s var\(--ease\), background-color 0\.15s var\(--ease\);/
  );
  assert.match(
    sidebarCss,
    /\.sidebar__nav a:hover\s*\{[\s\S]*?background:\s*rgba\(191,\s*90,\s*48,\s*0\.05\);[\s\S]*?color:\s*var\(--accent\);/
  );
});

test('language toggle is covered by reduced-motion override', function () {
  assert.match(
    sidebarCss,
    /\.lang-pill\s*\{[\s\S]*?transition:\s*color var\(--duration\) var\(--ease\), font-weight var\(--duration\) var\(--ease\);/
  );
  assert.match(animationsCss, /\.lang-pill,/);
});

test('homepage portals inherit card hover behavior through card classes', function () {
  assert.ok(indexHtml.includes('class="card card--lg portal"'));
});

test('tag elements remain non-interactive with no hover styling', function () {
  assert.equal(/\.tag(?:[\w-]|__[A-Za-z0-9-]+|--[A-Za-z0-9-]+)*:hover\b/.test(allActiveCss), false);
});
