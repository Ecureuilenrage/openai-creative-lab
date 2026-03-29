const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), 'utf8').replace(/\r\n/g, '\n');
}

const archiveHtml = read('archive.html');
const interactionsJs = read('js/interactions.js');

test('archive sections no longer use section-level reveal targets', function () {
  assert.equal(/<section class="section reveal" id="prompts">/.test(archiveHtml), false);
  assert.equal(/<section class="section reveal" id="screenshots">/.test(archiveHtml), false);
  assert.equal(/<section class="section reveal" id="legacy">/.test(archiveHtml), false);
  assert.equal(/<section class="section reveal" id="research">/.test(archiveHtml), false);
  assert.equal(/<section class="section reveal" id="downloads">/.test(archiveHtml), false);
});

test('archive keeps reveal hooks on section headings, intros, and cards', function () {
  assert.match(archiveHtml, /<h2 class="reveal" data-i18n="archive\.sections\.prompts\.title">/);
  assert.match(archiveHtml, /<p class="reveal" data-i18n="archive\.sections\.downloads\.intro">/);
  assert.match(archiveHtml, /<div class="card reveal">/);
});

test('scroll reveal batches grid children when one grid item intersects', function () {
  assert.match(interactionsJs, /var grid = target\.parentElement;/);
  assert.match(interactionsJs, /grid && grid\.classList\.contains\('grid'\)/);
  assert.match(interactionsJs, /function revealGridChildren\(grid\)/);
  assert.match(interactionsJs, /var children = grid\.children;/);
  assert.match(interactionsJs, /children\[i\]\.classList\.contains\('reveal'\)/);
});
