const CACHE_NAME = 'natalya-shakh-v1';
const STATIC_CACHE_NAME = 'natalya-shakh-static-v1';
const DYNAMIC_CACHE_NAME = 'natalya-shakh-dynamic-v1';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/about',
  '/services', 
  '/contact',
  '/favicon/favicon-96x96.png',
  '/favicon/favicon.svg',
  '/favicon/apple-touch-icon.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets...');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache with fallback strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and moz-extension requests
  if (url.protocol === 'chrome-extension:' || url.protocol === 'moz-extension:') {
    return;
  }

  // Handle navigation requests (pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(request)
            .then((response) => {
              // Don't cache non-successful responses
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              const responseToCache = response.clone();
              caches.open(DYNAMIC_CACHE_NAME)
                .then((cache) => {
                  cache.put(request, responseToCache);
                });

              return response;
            })
            .catch(() => {
              // Return offline page if available
              return caches.match('/') || new Response(
                `<!DOCTYPE html>
                <html>
                <head>
                  <title>Offline - Natalya Shakh</title>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <style>
                    body { 
                      font-family: system-ui, sans-serif; 
                      text-align: center; 
                      padding: 50px 20px;
                      background: #f9fafb;
                    }
                    .container {
                      max-width: 400px;
                      margin: 0 auto;
                      background: white;
                      padding: 40px;
                      border-radius: 12px;
                      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    }
                    h1 { color: #2E7D60; margin-bottom: 16px; }
                    p { color: #6b7280; line-height: 1.6; }
                    .retry-btn {
                      background: #2E7D60;
                      color: white;
                      border: none;
                      padding: 12px 24px;
                      border-radius: 6px;
                      cursor: pointer;
                      margin-top: 20px;
                    }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <h1>Offline</h1>
                    <p>You're currently offline. Please check your internet connection and try again.</p>
                    <button class="retry-btn" onclick="window.location.reload()">
                      Try Again
                    </button>
                  </div>
                </body>
                </html>`,
                {
                  headers: { 'Content-Type': 'text/html' }
                }
              );
            });
        })
    );
    return;
  }

  // Handle static assets (images, fonts, etc.)
  if (request.destination === 'image' || request.destination === 'font') {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(request)
            .then((response) => {
              if (!response || response.status !== 200) {
                return response;
              }

              const responseToCache = response.clone();
              caches.open(STATIC_CACHE_NAME)
                .then((cache) => {
                  cache.put(request, responseToCache);
                });

              return response;
            })
            .catch(() => {
              // Return placeholder for failed images
              if (request.destination === 'image') {
                return new Response(
                  '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f3f4f6"/><text x="50%" y="50%" font-family="sans-serif" font-size="18" fill="#9ca3af" text-anchor="middle" dy=".3em">Image Offline</text></svg>',
                  { headers: { 'Content-Type': 'image/svg+xml' } }
                );
              }
              return new Response('', { status: 404 });
            });
        })
    );
    return;
  }

  // Handle other requests with network first strategy
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(DYNAMIC_CACHE_NAME)
          .then((cache) => {
            cache.put(request, responseToCache);
          });

        return response;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});

// Background sync for form submissions (if supported)
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle background sync for contact form submissions
      console.log('Background sync triggered for contact form')
    );
  }
});

// Push notification handling (for future use)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New notification',
    icon: '/favicon/favicon-96x96.png',
    badge: '/favicon/favicon-96x96.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: '/favicon/favicon-96x96.png'
      },
      {
        action: 'close', 
        title: 'Close',
        icon: '/favicon/favicon-96x96.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Natalya Shakh', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
}); 