// js/sidebar.js — Hamburger menu toggle for mobile
// No dependencies. Vanilla JS only. No module bundler.

(function () {
  var skipLink = document.querySelector('.skip-link');
  var main = document.getElementById('main');
  var hamburger = document.querySelector('.hamburger');
  var sidebar = document.querySelector('.sidebar');
  var closeBtn = document.querySelector('.sidebar__close');

  if (skipLink && main) {
    skipLink.addEventListener('click', function () {
      window.setTimeout(function () {
        main.focus();
      }, 0);
    });
  }

  if (!hamburger || !sidebar) return;

  // Create overlay element
  var overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  function openMenu() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Move focus to close button for accessibility
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    hamburger.focus();
  }

  hamburger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) closeMenu();
  });

  // Trap focus inside sidebar when open
  sidebar.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab' || !sidebar.classList.contains('open')) return;

    var focusable = sidebar.querySelectorAll(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Mark active nav link with aria-current="page"
  var navLinks = document.querySelectorAll('.sidebar__nav a');
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // Clean up on resize above mobile breakpoint
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768 && sidebar.classList.contains('open')) closeMenu();
  });
})();
