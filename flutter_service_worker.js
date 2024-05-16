'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c2ed5e75f1bbb436b9a0b9271044f79c",
".git/config": "01a0fb1b55521d0ff8c01d54f2861ae3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6b796a1704aa5d562c60c9a657775eaf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aad81e47044265a3dbdf1c0623effced",
".git/logs/refs/heads/master": "aad81e47044265a3dbdf1c0623effced",
".git/logs/refs/remotes/origin/master": "64aee9559a80a215f0bc8db5d20ef857",
".git/objects/00/f16c76a165370f5edc004a0096d47e051b080e": "56bc5bf34d590ccb5ad87dc1780ac894",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1c/257fe3550384e429256c80a000e5962f80a740": "d18dc0e3a41bb81cc2c3ada9227bf645",
".git/objects/1f/a4613b53c427fcd76ac210043a4159cbb682ff": "139e98ac2d514bf33dc60d34a2dc8400",
".git/objects/1f/b56980896a68dcb5430f6f2dc4f6f9da7281b0": "2f76c87f2c7effe73fb03b0a795fc014",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/52fb65cf12a77d22e0cf81b7e7465f3205015d": "3115d063dfe715e5c4d205c1d4f3658a",
".git/objects/2f/cebcf96308193141f07025a8569d6cf926d068": "ffd36a6bf1b5bb6affd654f50898507c",
".git/objects/31/47108fa93f906cc50567db09c2cab4ce608f7d": "20ac9d25c7dcbc8fabeb244ea43e8a03",
".git/objects/37/ee1f62e825a756a9214d40b904c319fe75879d": "bb3f55e14fc8e6060688b5cf243a9ba6",
".git/objects/38/893f07d9e0f45742ec9020264d348fa41058f0": "4a97c9f3518a4675227c2e75e1826378",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/52/fbfdde9f21bd6a7ad1ce368d3c6fbfa8663673": "48280234046483623d0d8f7af4805032",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/65/d7d30121f4586d1b4b87202cd4012b6b82b81c": "cf0680407628d68407c2206a498db423",
".git/objects/66/ed8597bfb0a287b25d26b75e75b1fa38e51093": "67e0f3b8e343fb2a417efb469b782206",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/79/67c88cd1fcad4d41b3cd48c3d7a9eb584d576a": "5fa60cc6c84ce292279d38372e6e78f3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/dafa3b93aea3ca95216ec00cab13b20a5a0c1e": "f38bbbf474c6ae736fcd149490ebdd8a",
".git/objects/91/1e9ddd0658ee90afa710d7e7c5493d70bc1a22": "a9e1950575e1234e6f1a168bf2b80443",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/8c4a9a57a84b8b06504f03dc458d7702a8b57b": "9572abd87954a35f3f1c96ef82ff317e",
".git/objects/98/adc184d0abc82bdb405005bc7b2349159af97f": "4723e5cd1808f2bd769d71eba8da4e26",
".git/objects/a6/c97c3c911962f4531fd1ceff93af69cbc2076c": "804fda3e410ea44a5f100e58deb55519",
".git/objects/a7/8becf8848750586413fa54d4faf9ecc3783a3e": "7cbece45414d2f0eeac437572c09a1ca",
".git/objects/ac/89ad139e5e395ba0c6b42c0333c123c8c8df0f": "699ee5646116758da3d2f2ca1856576f",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/4abbe75f05972cefe720f7479d8a839f2095fa": "6a9e6b9dabe7cb2af3f23befdb2d4bdc",
".git/objects/b4/d820cdf8e204dda796390da2320586c8d9489a": "229a32062371fec8e0cac61151b23cf8",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/639e4146525b6a3d76acc5564400d42e8773d5": "e718208fa9008858871420696caa5370",
".git/objects/b7/8aaab6bc127afee12039195024c9a6baf8e0cb": "c8e15641bf3c383d116495c962d070b6",
".git/objects/b8/d07be2813bd5ffbd829fdbc8eff44cbac42275": "b67fd5cbe60b94832770172a3df0e3b7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/2da59442afd93605ead1add65253946ff07b96": "f3a0c3cdaa1b8ab8529f1d9c00edca79",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/cc/d5335776d636efc4bbd8b41ff58ca83f7876ff": "c58f2933ce05e404194d91207832e259",
".git/objects/cf/de68e0994b8b876cd90c602f8c14e791eff123": "9101ee881d907fd84b3fa398910b6af4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/9618f41f5b158d9b718ef31ce4c6893d3e513a": "b3050985de1c328de2e1aa3d4e5c1124",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/83b2c8d3b388d29bbc76de0709caeeef00c533": "25c07a41d3787871bfa0808e16eff457",
".git/objects/e2/86f2d19b9d7cd8eff7be646bd1df7fb13c40e3": "3919dc352a930746fb757345070c7a18",
".git/objects/e5/1cc75861f07733e4c852d75b254ec56d188c85": "9ec145f3f6f4f96fe7eae18f69607819",
".git/objects/e5/6819c7b8bcdbc16708ecac5bb56bbd82d9b758": "19ad3c6ee620351c0dbb7f34016bfff0",
".git/objects/e7/575f9a85addcf723a6a059734a8d3eccdd285e": "b954009455d347653ac171d8332262a4",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/c10727b8dc1570bf3f8a8b9d357258c74de719": "c800633641e0e205adcad84182b88496",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/master": "6e64d7855ee628ff0dba1fe08430f738",
".git/refs/remotes/origin/master": "6e64d7855ee628ff0dba1fe08430f738",
"assets/AssetManifest.bin": "5451cb6389521c5a59f15970a2d3e2d4",
"assets/AssetManifest.bin.json": "263b4c00e34b188f17e3f144bc2152bc",
"assets/AssetManifest.json": "2aaa6f77af936757afef850bd510452b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "cf4771b3c087d1035138f33786e4c93f",
"assets/images/1f.png": "e7d7d2053e528f6cb050d3e271c87e64",
"assets/images/2f.png": "1a7aca4eb3249f418313cb398c5be83a",
"assets/images/3f.png": "b8eb63e2cd109f47230468e98a4f3c56",
"assets/images/4f.png": "341cc97ffa5b6d20b348babb4c9dc296",
"assets/images/a.svg": "19a8f7f1edd68ebea1b2e55a54559600",
"assets/images/b.svg": "d2e7fd559937747cbc8613fb2b7dbcf4",
"assets/images/baek.svg": "ad6041e0b345ddaf65ae86171658148e",
"assets/images/c.png": "898d8b4a9a0301baa7e18afe2e5afc91",
"assets/images/c.svg": "e61b472df2f743ffb03731afa20210bf",
"assets/images/d.png": "6f91182637c894bce2a0584a063868ab",
"assets/images/d.svg": "d812bfee4af15cb1fc27aec7b1e9d378",
"assets/images/def.png": "8ae30ca2052432bf1c3a7a424c6d7616",
"assets/images/e.png": "d8de795a70633f0feeed40f28f3d727d",
"assets/images/e.svg": "28634a6dbd55cdfda6ba474a9cbf4749",
"assets/images/h.png": "f40173fde5b31429eae80633b49d38bb",
"assets/images/h1.png": "37227882bc1ca258a50275c066319609",
"assets/images/h2.png": "c89fe8e806a4208f63d1565802e0e3b7",
"assets/images/h3.png": "09c97514a9de49a7b4736f76c8c99852",
"assets/images/m.png": "4b51530b77504bcb6680af680041a44a",
"assets/images/s.png": "27afb5d111422a9ce555690d64b72ce3",
"assets/NOTICES": "1b4565b14f9cee77f96c79b6d05dd395",
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
"index.html": "c6bc0b77d1c8ee2c66b61bf9bb638e77",
"/": "c6bc0b77d1c8ee2c66b61bf9bb638e77",
"main.dart.js": "ca773830328ac2d10d8a650ef6d85a08",
"manifest.json": "05d0256e973a0357e5fa5cd4986cbf56",
"version.json": "ac48f4a37bad183f4f20783a0c9e75f0"};
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
