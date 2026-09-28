/* AXIO Medical site — progressive enhancement only. Everything on the page is
   readable with this script disabled; it adds tabs, a lightbox, the mobile
   menu and nav highlighting. */
(function () {
  'use strict';

  /* ── mobile menu ─────────────────────────────────────────── */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('navLinks');
  if (toggle && nav) {
    var setOpen = function (open) {
      // Tailwind's `hidden` utility closes it; `flex` lays the links out.
      nav.classList.toggle('hidden', !open);
      nav.classList.toggle('flex', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && window.innerWidth < 768) setOpen(false);
    });
  }

  /* ── rendering tabs (WAI-ARIA tabs pattern) ──────────────── */
  var tablist = document.querySelector('[role="tablist"]');
  if (tablist) {
    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
    var select = function (tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
    };
    tablist.addEventListener('click', function (e) {
      var t = e.target.closest('[role="tab"]');
      if (t) select(t, false);
    });
    tablist.addEventListener('keydown', function (e) {
      var i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      var next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
      if (next === undefined) return;
      e.preventDefault();
      select(tabs[(next + tabs.length) % tabs.length], true);
    });
  }

  /* ── lightbox ────────────────────────────────────────────── */
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbClose = document.getElementById('lbClose');
  var opener = null;
  if (lb && lbImg) {
    var open = function (img) {
      opener = img;
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt;
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
      lbClose.focus();
    };
    var close = function () {
      lb.hidden = true;
      lbImg.removeAttribute('src');
      document.body.style.overflow = '';
      if (opener) opener.focus();
    };
    document.querySelectorAll('.figure-frame img').forEach(function (img) {
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', 'Enlarge: ' + img.alt);
      img.addEventListener('click', function () { open(img); });
      img.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img); }
      });
    });
    lb.addEventListener('click', function (e) { if (e.target !== lbImg) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) close(); });
  }

  /* ── nav highlighting ────────────────────────────────────── */
  var links = Array.prototype.slice.call(document.querySelectorAll('#navLinks a[href^="#"]'));
  if (links.length && 'IntersectionObserver' in window) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('active'); a.removeAttribute('aria-current'); });
        var a = byId[entry.target.id];
        if (a) { a.classList.add('active'); a.setAttribute('aria-current', 'true'); }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(byId).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) spy.observe(s);
    });
  }

  /* ── footer year ─────────────────────────────────────────── */
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = String(new Date().getFullYear());
})();
