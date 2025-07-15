const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

export function registerSW() {
  if ('serviceWorker' in navigator) {
    const publicUrl = new URL(import.meta.env.BASE_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${import.meta.env.BASE_URL}sw.js`;

      if (isLocalhost) {
        checkValidServiceWorker(swUrl);
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA'
          );
        });
      } else {
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl: string) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      console.log('SW registered: ', registration);

      // Check for updates
      registration.addEventListener('updatefound', () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }

        installingWorker.addEventListener('statechange', () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log(
                'New content is available and will be used when all tabs for this page are closed.'
              );

              // Show update notification to user
              showUpdateNotification();
            } else {
              console.log('Content is cached for offline use.');
              showOfflineReadyNotification();
            }
          }
        });
      });
    })
    .catch(error => {
      console.error('SW registration failed: ', error);
    });
}

function checkValidServiceWorker(swUrl: string) {
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then(response => {
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log('No internet connection found. App is running in offline mode.');
    });
}

function showUpdateNotification() {
  // Create a simple notification for updates
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #2E7D60;
    color: white;
    padding: 16px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    font-family: system-ui, sans-serif;
    font-size: 14px;
    max-width: 300px;
  `;

  notification.innerHTML = `
    <div style="margin-bottom: 8px; font-weight: 600;">App Updated!</div>
    <div style="margin-bottom: 12px; opacity: 0.9;">Close all tabs to use the latest version.</div>
    <button onclick="this.parentElement.remove()" style="
      background: rgba(255,255,255,0.2);
      border: none;
      color: white;
      padding: 4px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
    ">Dismiss</button>
  `;

  document.body.appendChild(notification);

  // Auto remove after 10 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 10000);
}

function showOfflineReadyNotification() {
  console.log('App is ready for offline use!');
  // Could show a toast notification here
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}

// PWA install prompt handling
let deferredPrompt: any;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallButton();
});

function showInstallButton() {
  // Create install button
  const installButton = document.createElement('button');
  installButton.textContent = 'Install App';
  installButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #2E7D60;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-family: system-ui, sans-serif;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 9999;
  `;

  installButton.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      deferredPrompt = null;
      installButton.remove();
    }
  });

  document.body.appendChild(installButton);

  // Auto hide after 30 seconds
  setTimeout(() => {
    if (installButton.parentElement) {
      installButton.remove();
    }
  }, 30000);
}

window.addEventListener('appinstalled', () => {
  console.log('PWA was installed');
  deferredPrompt = null;
});
