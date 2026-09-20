// Thumb paging. Each route ships only its own panel so crawlers see one page.
// Once loaded, the sibling routes are fetched and slotted into the rail, which
// is a horizontal scroll snap container, so a thumb can drag between pages and
// the URL follows. With JS off none of this runs and normal links apply.
import { ROUTES } from '../data/site';

const rail = document.getElementById('rail');
if (rail && 'IntersectionObserver' in window) {
  const here = document.querySelector('.panel[data-current]')?.dataset.route;
  const titles = new Map([[here, document.title]]);
  let jumping = false;

  const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 200));

  idle(async () => {
    const wanted = ROUTES.filter((r) => r !== here);
    const docs = await Promise.all(
      wanted.map((r) =>
        fetch(r, { headers: { 'x-rail': '1' } })
          .then((res) => (res.ok ? res.text() : null))
          .then((html) => (html ? { route: r, html } : null))
          .catch(() => null)
      )
    );

    const parser = new DOMParser();
    const built = new Map();
    for (const d of docs) {
      if (!d) continue;
      const doc = parser.parseFromString(d.html, 'text/html');
      const panel = doc.querySelector('.panel[data-route]');
      if (!panel) continue;
      panel.removeAttribute('data-current');
      built.set(d.route, panel);
      titles.set(d.route, doc.title);
    }
    if (!built.size) return;

    // Re-lay the rail in route order, keeping the existing panel in place.
    const current = rail.querySelector('.panel[data-current]');
    const ordered = ROUTES.map((r) => (r === here ? current : built.get(r))).filter(Boolean);
    jumping = true;
    rail.replaceChildren(...ordered);
    current.scrollIntoView({ block: 'nearest', inline: 'start' });
    requestAnimationFrame(() => { jumping = false; });

    watch();
    document.documentElement.dataset.rail = 'on';
  });

  function settle(route) {
    if (!route || location.pathname === route) return;
    history.pushState({ route }, '', route);
    if (titles.has(route)) document.title = titles.get(route);
    document.querySelectorAll('.nav a').forEach((a) => {
      if (a.getAttribute('href') === route) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  function watch() {
    const io = new IntersectionObserver(
      (entries) => {
        if (jumping) return;
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio > 0.6) settle(e.target.dataset.route);
        }
      },
      { root: rail, threshold: [0.6] }
    );
    rail.querySelectorAll('.panel[data-route]').forEach((p) => io.observe(p));
  }

  function panelFor(route) {
    return rail.querySelector(`.panel[data-route="${CSS.escape(route)}"]`);
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="/"]');
    if (!a || a.target || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const panel = panelFor(a.getAttribute('href'));
    if (!panel) return;
    e.preventDefault();
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    settle(a.getAttribute('href'));
  });

  window.addEventListener('popstate', () => {
    const panel = panelFor(location.pathname);
    if (!panel) return;
    jumping = true;
    panel.scrollIntoView({ block: 'nearest', inline: 'start' });
    if (titles.has(location.pathname)) document.title = titles.get(location.pathname);
    requestAnimationFrame(() => { jumping = false; });
  });
}
