var test = require('node:test');
var assert = require('node:assert/strict');
var fs = require('node:fs');
var path = require('node:path');

var repoRoot = path.resolve(__dirname, '..');

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), 'utf8').replace(/\r\n/g, '\n');
}

var appJs = read('app.js');
var serveLocalPs1 = read('serve-local.ps1');
var sidebarCss = read('css/sidebar.css');
var indexHtml = read('index.html');
var soulbornHtml = read('soulborn.html');
var tarotHtml = read('tarot.html');
var toolsHtml = read('tools.html');
var archiveHtml = read('archive.html');

var htmlFiles = [
  { name: 'index.html', content: indexHtml },
  { name: 'soulborn.html', content: soulbornHtml },
  { name: 'tarot.html', content: tarotHtml },
  { name: 'tools.html', content: toolsHtml },
  { name: 'archive.html', content: archiveHtml },
];

// ── Task 1: No replaceAll in app.js ──

test('app.js does not use String.replaceAll()', function () {
  assert.ok(!appJs.includes('.replaceAll('), 'app.js should not contain .replaceAll()');
});

test('app.js escapeHtml uses .replace() with global regex for &', function () {
  assert.ok(appJs.includes('.replace(/&/g, "&amp;")'), 'should use .replace(/&/g, "&amp;")');
});

test('app.js escapeHtml uses .replace() with global regex for <', function () {
  assert.ok(appJs.includes('.replace(/</g, "&lt;")'), 'should use .replace(/</g, "&lt;")');
});

test('app.js escapeHtml uses .replace() with global regex for >', function () {
  assert.ok(appJs.includes('.replace(/>/g, "&gt;")'), 'should use .replace(/>/g, "&gt;")');
});

test('app.js escapeHtml uses .replace() with global regex for "', function () {
  assert.ok(appJs.includes('.replace(/"/g, "&quot;")'), 'should use .replace(/"/g, "&quot;")');
});

// ── Task 2: CSS inset fallback ──

test('sidebar.css has top/right/bottom/left fallback before inset on overlay', function () {
  var overlayBlock = sidebarCss.substring(sidebarCss.indexOf('.sidebar-overlay {'));
  var topPos = overlayBlock.indexOf('top: 0');
  var rightPos = overlayBlock.indexOf('right: 0');
  var bottomPos = overlayBlock.indexOf('bottom: 0');
  var leftPos = overlayBlock.indexOf('left: 0');
  var insetPos = overlayBlock.indexOf('inset: 0');

  assert.ok(topPos > 0, 'should have top: 0');
  assert.ok(rightPos > 0, 'should have right: 0');
  assert.ok(bottomPos > 0, 'should have bottom: 0');
  assert.ok(leftPos > 0, 'should have left: 0');
  assert.ok(insetPos > 0, 'should still have inset: 0');
  assert.ok(topPos < insetPos, 'top should come before inset');
});

// ── Task 3: noscript blocks ──

htmlFiles.forEach(function (file) {
  test(file.name + ' has <noscript> block with .reveal opacity fix', function () {
    assert.match(file.content, /<noscript>\s*<style>\.reveal\s*\{\s*opacity:\s*1\s*!important;/);
  });

  test(file.name + ' <noscript> block includes transform: none', function () {
    assert.match(file.content, /<noscript>\s*<style>[^<]*transform:\s*none\s*!important;/);
  });
});

// ── Task 6: External links ──

htmlFiles.forEach(function (file) {
  test(file.name + ' external links have target="_blank" and rel with noopener noreferrer', function () {
    var externalLinkRegex = /href="https?:\/\/[^"]+"/g;
    var match;
    while ((match = externalLinkRegex.exec(file.content)) !== null) {
      var pos = match.index;
      var tagStart = file.content.lastIndexOf('<', pos);
      var tagEnd = file.content.indexOf('>', pos);
      var tag = file.content.substring(tagStart, tagEnd + 1);

      if (tag.startsWith('<meta') || tag.startsWith('<link')) continue;

      assert.ok(
        tag.includes('target="_blank"'),
        file.name + ' external link missing target="_blank": ' + tag.substring(0, 80)
      );
      assert.ok(
        tag.includes('noopener') && tag.includes('noreferrer'),
        file.name + ' external link missing noopener/noreferrer: ' + tag.substring(0, 80)
      );
    }
  });
});

// ── Task 6: Internal links ──

htmlFiles.forEach(function (file) {
  test(file.name + ' has sidebar navigation with all 5 page links', function () {
    assert.ok(file.content.includes('href="index.html"'), 'missing index.html link');
    assert.ok(file.content.includes('href="soulborn.html"'), 'missing soulborn.html link');
    assert.ok(file.content.includes('href="tarot.html"'), 'missing tarot.html link');
    assert.ok(file.content.includes('href="tools.html"'), 'missing tools.html link');
    assert.ok(file.content.includes('href="archive.html"'), 'missing archive.html link');
  });
});

// ── Task 7: No experimental APIs ──

test('app.js does not use experimental APIs (replaceAll, at, structuredClone)', function () {
  assert.ok(!appJs.includes('.replaceAll('), 'should not use replaceAll');
  assert.ok(!appJs.includes('.at('), 'should not use .at()');
  assert.ok(!appJs.includes('structuredClone('), 'should not use structuredClone');
});

test('app.js generated external links use noopener noreferrer', function () {
  assert.ok(appJs.includes('rel="noopener noreferrer"'), 'generated links should include noopener noreferrer');
  assert.ok(!appJs.includes('rel="noreferrer"'), 'generated links should not use bare noreferrer');
});

test('app.js hardens YouTube embeds with origin outside file protocol', function () {
  assert.match(appJs, /window\.location\.protocol === "file:"/);
  assert.match(appJs, /searchParams\.set\("origin", pageOrigin\)/);
  assert.match(appJs, /querySelectorAll\('iframe\[src\*="youtube\.com\/embed\/"\]'\)/);
});

test('serve-local.ps1 starts a local Python http server', function () {
  assert.match(serveLocalPs1, /python -m http\.server/);
  assert.match(serveLocalPs1, /py -m http\.server/);
  assert.match(serveLocalPs1, /http:\/\/localhost:/);
});

test('Soulborn and shared content use optimized Obsidian asset paths', function () {
  var contentJs = read('content.js');

  assert.ok(!soulbornHtml.includes('src="obsidian.png"'), 'Soulborn should not reference the root PNG anymore');
  assert.ok(soulbornHtml.includes('assets/images/obsidian.webp'), 'Soulborn should provide the WebP asset');
  assert.ok(!contentJs.includes('image: "obsidian.png"'), 'shared content should not reference the root PNG anymore');
  assert.ok(contentJs.includes('image: "assets/images/obsidian.webp"'), 'shared content should use the optimized WebP asset');
});
