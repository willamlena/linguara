// Offline-Speicher. Bei jeder neuen Version VERSION erhöhen – dann holt sich die App
// die neuen Dateien und zeigt „Neue Version verfügbar".
const VERSION = 'linguara-v11';
const FILES = [
  './', 'index.html', 'style.css', 'manifest.webmanifest',
  'vocab.js', 'vocab2.js', 'vocab.en.js', 'vocab2.en.js', 'grammar.js', 'grammar2.js', 'grammar.en.js', 'grammar2.en.js',
  'dialogs.js', 'dialogs.en.js', 'english-vocab.js', 'english-vocab2.js', 'english-grammar.js', 'english-grammar2.js', 'english-dialogs.js', 'german-vocab.js', 'german-vocab2.js', 'german-grammar.js', 'german-grammar2.js', 'german-dialogs.js', 'i18n.id.js',
  'i18n.en.js', 'util.js', 'srs.js', 'store.js', 'examples.js',
  'session.js', 'trainer.js', 'talk.js', 'garden.js', 'app.js',
  'icon.svg', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png',
];

self.addEventListener('install', e => {
  // Jede Datei frisch vom Server holen (nicht aus einem Zwischenspeicher), damit
  // die neue Version wirklich die neuen Dateien bekommt.
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(FILES.map(f => {
    const bust = (f === './' ? 'index.html' : f) + (f.includes('?') ? '&' : '?') + 'sw=' + VERSION;
    return fetch(bust, { cache: 'reload' }).then(res => {
      if (!res.ok) throw new Error('Laden fehlgeschlagen: ' + f);
      return c.put(f, res);
    });
  }))));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res.ok && res.type === 'basic') {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => (req.mode === 'navigate' ? caches.match('index.html') : Response.error())))
  );
});
