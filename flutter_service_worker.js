'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4c25eaf191f05af3850317e1752d7843",
"assets/AssetManifest.bin.json": "47a04ca21923af7dcbec1d429f93cf98",
"assets/AssetManifest.json": "5b485848e258431119c64914de54081a",
"assets/assets/Images/arm.png": "d6b712458015efaf4815b0a67f33ed47",
"assets/assets/Images/average_network.png": "42eadebc6cd5663ea6d685ff5501b663",
"assets/assets/Images/call.png": "ba62b5c8f92c03434f91717299ea802b",
"assets/assets/Images/cameraRefresh.png": "7657f8630f009a0b9203e9a20227c7fd",
"assets/assets/Images/charging_battery.png": "4700aee83317e94d7f4dcad1e23b48fa",
"assets/assets/Images/charging_eighty_percent.png": "b7c0c4a8d45b8bc7e5494cc352a0bfa4",
"assets/assets/Images/charging_fifty_percent.png": "a61ccc52352d38ac27c0fb7eaac9619a",
"assets/assets/Images/charging_forty_percent.png": "c2a3729dfb77f5ebaf4416c27863bc44",
"assets/assets/Images/charging_hundred_percent.png": "f2d5cdab762c1cbc81ca376023de4950",
"assets/assets/Images/charging_ninety_percent.png": "6ed37a12d2c5832d69fe25c681bceae8",
"assets/assets/Images/charging_seventy_percent.png": "de7745d933edbcf32c9dbe3570e92cb9",
"assets/assets/Images/charging_sign.png": "491f770b41ea975ae3237938d07a53a2",
"assets/assets/Images/charging_sixty_percent.png": "9f7e096dffae0fc1cfa294aeb931c27c",
"assets/assets/Images/charging_ten_percent.png": "493ccb4add2889df07271696e2effa25",
"assets/assets/Images/charging_thirty_percent.png": "a1e71bc13f6055f7bddea447979790c8",
"assets/assets/Images/eighty_percent.png": "28710891f6f5538f54cca1c362990447",
"assets/assets/Images/emergency_dialog.png": "a5c1378c33fc8e4a68fd6fe56a72f72f",
"assets/assets/Images/exit.png": "4170b99d8f1557fc0c760b0638c95f8a",
"assets/assets/Images/full_network.png": "6345df434f8bf7d167dd9c9245ba8282",
"assets/assets/Images/good_network.png": "48815778572ce7a8a6d0f0af185ccb89",
"assets/assets/Images/low_network.png": "2634026daf10f0b36c2591bdb66c7a37",
"assets/assets/Images/network.png": "eb2026c0bf9a005539ab310acddb4acc",
"assets/assets/Images/not_available.png": "ea63f6ff348b2752dd21f7d4c8496c95",
"assets/assets/Images/ping.png": "b1bceeed64c99512495451fc98c0f95b",
"assets/assets/Images/qr.png": "2de566e4989f9df009e78c39ba26c3bc",
"assets/assets/Images/refresh.png": "525bf60951855ec73f1f5974563c7de3",
"assets/assets/Images/ring_of_fire_on.png": "c6a6712cb435e74c27e8616065adae0a",
"assets/assets/Images/wachmeuser.png": "d430c40efe163f24d303bd68ed2faff8",
"assets/assets/Images/wifi_0_0.png": "19e56e627aaebf293e0e5b49087f8bc7",
"assets/assets/Images/wifi_0_25.png": "30a9e1487fb98cf026437e0f4e609561",
"assets/assets/Images/wifi_25_50.png": "b8fbba078e001a513f2fa86d6779f025",
"assets/assets/Images/wifi_50_75.png": "ead191b29ff2a280b89f82987043a5ee",
"assets/assets/Images/wifi_75_100.png": "ccc593b23e7ac8e6149479a5931a038f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e0905b3a2449ee2e9aa07af7e1359627",
"assets/NOTICES": "2d8f79238e8ac1423dd9c052ea5d2ed9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "015cc7c382db78a7b8824562c8afb643",
"/": "015cc7c382db78a7b8824562c8afb643",
"main.dart.js": "f2af97e50d705eb407393cc4b6be9b14",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"qr-scanner.html": "824381a95abad6453cc42d5378293534",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
