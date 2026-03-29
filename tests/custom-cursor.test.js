const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), 'utf8').replace(/\r\n/g, '\n');
}

const animationsCss = read('css/animations.css');
const interactionsJs = read('js/interactions.js');

// ── CSS Tests ──

test('custom cursor base state has correct dimensions and styling', function () {
  assert.match(
    animationsCss,
    /\.custom-cursor\s*\{[\s\S]*?position:\s*fixed;[\s\S]*?width:\s*12px;[\s\S]*?height:\s*12px;[\s\S]*?opacity:\s*0;[\s\S]*?border-radius:\s*50%;[\s\S]*?border:\s*1\.5px solid var\(--shadow-color\);[\s\S]*?background:\s*transparent;[\s\S]*?pointer-events:\s*none;[\s\S]*?z-index:\s*9999;[\s\S]*?transform:\s*translate\(-50%,\s*-50%\);/
  );
});

test('custom cursor transitions use 0.15s ease', function () {
  assert.match(
    animationsCss,
    /\.custom-cursor\s*\{[\s\S]*?transition:\s*width 0\.15s var\(--ease\), height 0\.15s var\(--ease\), background 0\.15s var\(--ease\), border-color 0\.15s var\(--ease\);/
  );
});

test('expand state grows to 32px with accent tint and no border', function () {
  assert.match(
    animationsCss,
    /\.custom-cursor--expand\s*\{[\s\S]*?width:\s*32px;[\s\S]*?height:\s*32px;[\s\S]*?background:\s*rgba\(191,\s*90,\s*48,\s*0\.15\);[\s\S]*?border-color:\s*transparent;/
  );
});

test('shrink state reduces to 8px with accent fill and no border', function () {
  assert.match(
    animationsCss,
    /\.custom-cursor--shrink\s*\{[\s\S]*?width:\s*8px;[\s\S]*?height:\s*8px;[\s\S]*?background:\s*var\(--accent\);[\s\S]*?border-color:\s*transparent;/
  );
});

test('body.cursor-active hides default cursor on body and interactive elements', function () {
  assert.match(animationsCss, /body\.cursor-active[,\s]/);
  assert.match(animationsCss, /body\.cursor-active a[,\s]/);
  assert.match(animationsCss, /body\.cursor-active button[,\s]/);
  assert.match(animationsCss, /body\.cursor-active \.card[,\s]/);
  assert.match(animationsCss, /body\.cursor-active \.btn\s*\{[\s\S]*?cursor:\s*none;/);
});

test('prefers-reduced-motion sets cursor transition-duration to 0s', function () {
  assert.match(
    animationsCss,
    /@media \(prefers-reduced-motion: reduce\)\s*\{[\s\S]*?\.custom-cursor\s*\{[\s\S]*?transition-duration:\s*0s;/
  );
});

// ── JS Tests ──

test('cursor IIFE is separate from scroll-reveal IIFE', function () {
  var iifeCount = (interactionsJs.match(/\(function\s*\(\)\s*\{/g) || []).length;
  assert.ok(iifeCount >= 2, 'Expected at least 2 IIFEs, found ' + iifeCount);
});

test('cursor IIFE guards against touch devices with hover media query', function () {
  assert.match(interactionsJs, /matchMedia\(['"]?\(hover:\s*hover\)['"]?\)\.matches/);
});

test('cursor element is created dynamically with custom-cursor class', function () {
  assert.match(interactionsJs, /createElement\(['"]div['"]\)/);
  assert.match(interactionsJs, /className\s*=\s*['"]custom-cursor['"]/);
  assert.match(interactionsJs, /document\.body\.appendChild\(cursor\)/);
});

test('cursor-active class is added to body', function () {
  assert.match(interactionsJs, /document\.body\.classList\.add\(['"]cursor-active['"]\)/);
});

test('mousemove listener tracks cursor position via clientX and clientY', function () {
  assert.match(interactionsJs, /addEventListener\(['"]mousemove['"]/);
  assert.match(interactionsJs, /e\.clientX/);
  assert.match(interactionsJs, /e\.clientY/);
  assert.match(interactionsJs, /showCursor\(\)/);
});

test('expand targets use .card, .btn, .portal selector', function () {
  assert.match(interactionsJs, /closest\(['"]\.card,\s*\.btn,\s*\.portal['"]\)/);
});

test('shrink targets use a, .lang-pill selector', function () {
  assert.match(interactionsJs, /closest\(['"]a,\s*\.lang-pill['"]\)/);
});

test('expand check runs before shrink check for priority', function () {
  var expandIdx = interactionsJs.indexOf("closest('.card, .btn, .portal')");
  var shrinkIdx = interactionsJs.indexOf("closest('a, .lang-pill')");
  assert.ok(expandIdx < shrinkIdx, 'Expand selector must appear before shrink selector for priority');
});

test('mouseout resets cursor classes when leaving interactive targets', function () {
  assert.match(interactionsJs, /addEventListener\(['"]mouseout['"]/);
  assert.match(interactionsJs, /classList\.remove\(['"]custom-cursor--expand['"]\)/);
  assert.match(interactionsJs, /classList\.remove\(['"]custom-cursor--shrink['"]\)/);
});

test('cursor hides on mouseleave and shows on mouseenter', function () {
  assert.match(interactionsJs, /addEventListener\(['"]mouseleave['"]/);
  assert.match(interactionsJs, /addEventListener\(['"]mouseenter['"]/);
  assert.match(interactionsJs, /opacity\s*=\s*['"]0['"]/);
  assert.match(interactionsJs, /opacity\s*=\s*['"]1['"]/);
});

test('iframe hover temporarily restores the native cursor', function () {
  assert.match(interactionsJs, /querySelectorAll\(['"]iframe['"]\)/);
  assert.match(interactionsJs, /classList\.remove\(['"]cursor-active['"]\)/);
  assert.match(interactionsJs, /classList\.add\(['"]cursor-active['"]\)/);
  assert.match(interactionsJs, /addEventListener\(['"]mouseenter['"], function \(\) \{[\s\S]*?suspendCustomCursor\(\);/);
  assert.match(interactionsJs, /addEventListener\(['"]mouseleave['"], function \(\) \{[\s\S]*?resumeCustomCursor\(\);/);
});

test('uses var declarations (not let/const) per project convention', function () {
  // Extract only the cursor IIFE (second IIFE)
  var parts = interactionsJs.split('// Custom cursor');
  if (parts.length > 1) {
    var cursorBlock = parts[1];
    assert.equal(/\blet\b/.test(cursorBlock), false, 'Should not use let');
    assert.equal(/\bconst\b/.test(cursorBlock), false, 'Should not use const');
  }
});
