// js/interactions.js — Scroll reveal via IntersectionObserver
// No dependencies. Vanilla JS only. No module bundler.

(function () {
  // Signal that JS is active — CSS uses .js class to hide .reveal elements
  document.documentElement.classList.add('js');

  // Respect reduced motion preference — skip observer entirely
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function revealElement(element) {
    if (!element || element.classList.contains('revealed')) return;
    element.classList.add('revealed');
    observer.unobserve(element);
  }

  function revealGridChildren(grid) {
    var children = grid.children;
    for (var i = 0; i < children.length; i++) {
      if (children[i].classList && children[i].classList.contains('reveal')) {
        revealElement(children[i]);
      }
    }
  }

  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        var target = entries[i].target;
        var grid = target.parentElement;

        if (grid && grid.classList.contains('grid')) {
          revealGridChildren(grid);
        } else {
          revealElement(target);
        }
      }
    }
  }, { threshold: 0.8 });

  var elements = document.querySelectorAll('.reveal');
  for (var i = 0; i < elements.length; i++) {
    observer.observe(elements[i]);
  }
})();

// Custom cursor — hover-aware branded circle
(function () {
  // Only activate on devices with mouse input
  if (!window.matchMedia('(hover: hover)').matches) return;

  var cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);
  cursor.style.opacity = '0';

  // Hide default browser cursor
  document.body.classList.add('cursor-active');

  function hideCursor() {
    cursor.style.opacity = '0';
  }

  function showCursor() {
    cursor.style.opacity = '1';
  }

  function suspendCustomCursor() {
    hideCursor();
    cursor.classList.remove('custom-cursor--expand');
    cursor.classList.remove('custom-cursor--shrink');
    document.body.classList.remove('cursor-active');
  }

  function resumeCustomCursor() {
    document.body.classList.add('cursor-active');
  }

  // Track mouse position
  document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    showCursor();
  });

  // Hover detection via event delegation
  document.addEventListener('mouseover', function (e) {
    // Check expand targets first — cards/buttons that are also <a> tags
    var expandTarget = e.target.closest('.card, .btn, .portal');
    var shrinkTarget = e.target.closest('a, .lang-pill');

    if (expandTarget) {
      cursor.classList.add('custom-cursor--expand');
      cursor.classList.remove('custom-cursor--shrink');
    } else if (shrinkTarget) {
      cursor.classList.add('custom-cursor--shrink');
      cursor.classList.remove('custom-cursor--expand');
    }
  });

  document.addEventListener('mouseout', function (e) {
    var expandTarget = e.target.closest('.card, .btn, .portal');
    var shrinkTarget = e.target.closest('a, .lang-pill');

    if (expandTarget || shrinkTarget) {
      // Check if we're entering another interactive target
      var related = e.relatedTarget;
      if (related) {
        var nextExpand = related.closest && related.closest('.card, .btn, .portal');
        var nextShrink = related.closest && related.closest('a, .lang-pill');
        if (nextExpand || nextShrink) return;
      }
      cursor.classList.remove('custom-cursor--expand');
      cursor.classList.remove('custom-cursor--shrink');
    }
  });

  // Hide cursor when mouse leaves viewport
  document.addEventListener('mouseleave', function () {
    hideCursor();
  });

  document.addEventListener('mouseenter', function () {
    showCursor();
  });

  // Native iframe content cannot report parent-level mousemove events.
  // Temporarily restore the native cursor while hovering embedded media.
  var frames = document.querySelectorAll('iframe');
  for (var i = 0; i < frames.length; i++) {
    frames[i].addEventListener('mouseenter', function () {
      suspendCustomCursor();
    });

    frames[i].addEventListener('mouseleave', function () {
      resumeCustomCursor();
      showCursor();
    });
  }
})();
