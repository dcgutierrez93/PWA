// Service Worker
// =============================================================================
// A => No Service Worker
// B => Install Service Worker
// C => Activate Service Worker
// D => Idle
// E => Fetch / Message
// =============================================================================

// TODO: Install Service Worker
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
});

// TODO: Acitcate Service Worker
self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
  return self.clients.claim();
});

// TODO: Fetch Service Worker
self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetching something ....', event);
  event.respondWith(fetch(event.request));
});
