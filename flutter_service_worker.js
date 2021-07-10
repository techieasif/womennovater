'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5d8759f45b58b2249c93c85361e4b3dd",
"index.html": "319d9262ef8095f4071874b0bdf2d741",
"/": "319d9262ef8095f4071874b0bdf2d741",
"main.dart.js": "f188a92cbd88775437c649e53f879622",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c649e806b5c7b3b7f4e9c34fffa2e383",
"assets/AssetManifest.json": "13ae6dd56781da666d2d31150f03202b",
"assets/NOTICES": "bd3a7009c48cd3939ba170830d5329f6",
"assets/FontManifest.json": "c0d3ed38a17f3d6a958e621a42f4639b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/ASSETS/pragnent_woman.jpg": "19a506c4f1c6798b41477bc867112467",
"assets/ASSETS/kgs_konnect_logo.png": "11174f0bc78705010e00b72b537b6383",
"assets/ASSETS/email.png": "abe0c239f4bc707272687ed70f4f5bbb",
"assets/ASSETS/watch.png": "1c3815c4efbca52c927ec848607d75c8",
"assets/ASSETS/kgsomani_logo.png": "bc44b7116f345e594164775d2c50ccdd",
"assets/ASSETS/splash_image.gif": "79155694ae6b0f4025042f9ce01a46e1",
"assets/ASSETS/small_tilt_shoe_3.png": "1c4be47d6718e25c8ae4d4f7f6b9e84a",
"assets/ASSETS/jacket.png": "be5ce8d6f9a07cb26b276e4ebb303f77",
"assets/ASSETS/show_1.png": "08bb308cf16622b4253a0060ffa1cf5f",
"assets/ASSETS/small_tilt_shoe_2.png": "9ff0194d2d2f94d10d5c8c5b445b08b2",
"assets/ASSETS/small_tilt_shoe_1.png": "5371b4a4e3917b445ef4050a14abb377",
"assets/ASSETS/otp.png": "fa49b5cf3b5b989e34f031dc5fdcd717",
"assets/ASSETS/user.png": "0770252ca09af76850741f2cb2e5c06a",
"assets/ASSETS/shooe_tilt_1.png": "db258913940d39c245dcc6ee7f071a63",
"assets/ASSETS/shoe_thumb_1.png": "99d5195016bccef5fce5580ef7fdc0a2",
"assets/ASSETS/shoe_thumb_3.png": "466aa8793c17411a3206ab2a6199d36a",
"assets/ASSETS/shoe_thumb_2.png": "a1bcf8da270988941107f57ec931c794",
"assets/ASSETS/shoe_tilt_2.png": "e2b20edc778b9f667f0578babc3610e5",
"assets/ASSETS/shoe_thumb_5.png": "d500ef8d64f45d35704b18393324e339",
"assets/ASSETS/shoe_thumb_4.png": "5bb69dde7e2c2dd270c3cdcc521d1ec9",
"assets/ASSETS/fonts/splash_image.gif": "79155694ae6b0f4025042f9ce01a46e1",
"assets/ASSETS/fonts/sansation/Sansation-Regular.ttf": "b06ad7b83e55d7b3599a21635ab88644",
"assets/ASSETS/fonts/sansation/Sansation-Bold.ttf": "37c961d1db011f138962a4c60f356346",
"assets/ASSETS/fonts/Raleway/Raleway-BoldItalic.ttf": "2c6f0ac361f6a86d7e8d74f3d6737380",
"assets/ASSETS/fonts/Raleway/Raleway-MediumItalic.ttf": "a55ff2cd6e2cffc65817240e14da6813",
"assets/ASSETS/fonts/Raleway/Raleway-ThinItalic.ttf": "8fe060be26aca99ed4c879d41c3a8b6d",
"assets/ASSETS/fonts/Raleway/Raleway-ExtraLight.ttf": "3d22c4cbf0bbf560dbc16342b6bdccd4",
"assets/ASSETS/fonts/Raleway/Raleway-Medium.ttf": "2ec8557460d3a2cd7340b16ac84fce32",
"assets/ASSETS/fonts/Raleway/Raleway-SemiBold.ttf": "8a192102b50118c45033e53ce897f103",
"assets/ASSETS/fonts/Raleway/Raleway-ExtraBold.ttf": "c9503ab0f939e9d37fcfb59b25acf8b3",
"assets/ASSETS/fonts/Raleway/Raleway-ExtraBoldItalic.ttf": "db1ef2f98145c0429dbc90c817a3cfdf",
"assets/ASSETS/fonts/Raleway/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/ASSETS/fonts/Raleway/Raleway-ExtraLightItalic.ttf": "005cfa6da2e318c6e260b9a4118f4be4",
"assets/ASSETS/fonts/Raleway/Raleway-SemiBoldItalic.ttf": "2ed1e9696712eac2b9ec02ada1045fcb",
"assets/ASSETS/fonts/Raleway/Raleway-Black.ttf": "38b405eba92acbb5aef45d8152f2a736",
"assets/ASSETS/fonts/Raleway/Raleway-BlackItalic.ttf": "82163a0f87990e4f9d9ec2b7893e796a",
"assets/ASSETS/fonts/Raleway/Raleway-Thin.ttf": "07ac22f3d71e66a0799703116b533ac5",
"assets/ASSETS/fonts/Raleway/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
