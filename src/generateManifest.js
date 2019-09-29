const dynamicManifest = {
    'name': 'Jumia News',
    'short_name': 'Jumia News',
    'theme_color': '#ffffff',
    'background_color': '#ffffff',
    'display': 'standalone',
    'orientation': 'any',
    'scope': '/',
    'start_url': '/',
    'dir': 'ltr',
    'lang': 'en',
    'related_applications': [],
    'prefer_related_applications': false,
    'icons': [
      {
        'src': 'assets/wb-assets/manifest-icon-192.png',
        'sizes': '192x192',
        'type': 'image/png'
      },
      {
        'src': 'assets/wb-assets/manifest-icon-512.png',
        'sizes': '512x512',
        'type': 'image/png'
      }
    ]
  }
;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  dynamicManifest.background_color = '#000000';
  dynamicManifest.theme_color = '#000000';
}

const stringManifest = JSON.stringify(dynamicManifest);
const blob = new Blob([stringManifest], {type: 'application/json'});
const manifestURL = URL.createObjectURL(blob);
document.querySelector('#manifest-placeholder').setAttribute('href', manifestURL);
