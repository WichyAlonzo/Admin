'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "401b30e3b8b5d629635a5c613cdb7919",
".git/config": "a0675e162ea9a01c83ee627451131be3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "594475f1bdc01da58408fc98298ebb6f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f3ac84548e65ba592bd858123465926b",
".git/logs/refs/heads/main": "04d36e93854fda1b026d28d76c1efb72",
".git/logs/refs/remotes/origin/main": "73ee5e0b61a11275e515aafa57410753",
".git/objects/03/0d2b21f8f0c63a74953c8aad67b4fa61efdbdb": "a81f1c3f6fe23009f1f399ed5a81248e",
".git/objects/06/d9fb80f31c3ce7872d22e41faebe70e2d84c73": "2bb4247b33bd26b7adb218aab55c2f9d",
".git/objects/09/a9a779dc1896671d6dd811dbe36a01c7b98097": "facbb516099acb0a3826b635bb88916e",
".git/objects/0c/a3e560fe2c0057efa7195b8f89a7cd5c7fa5ac": "d2a94232116a5f23acf2879b559c27be",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/14/db3d63c8b2bb3255784ea932f9eeacc900b046": "ce30d8525f656bb4d310791538aacee7",
".git/objects/18/a80d62cf1d06d31bcc3ef0e4f874f6583698bb": "15384147a0d906be692a6c57b136bc1c",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/1d/e0f01b87c31e6b81d1ac6d4f2a69f9c3f6554c": "263387fc11aecab04c47bbe18c085bcd",
".git/objects/1e/d971fcd6329e17512e6aaea0937984e9892ab0": "75a5e3b085fe60efdfb68ea9740daec3",
".git/objects/22/54e7cadc2932c628bcae55629809578c878c28": "668ddce84e9489594bbee58de056027f",
".git/objects/26/2acb8069ae679b4d1fa9a86451407fe151d3a6": "353462a888ffdd56743d58db0395aee2",
".git/objects/28/4d7e2c1cf6d92de952fbf8ef17848b7769f54a": "1eb34adad6de2f7351322d671b713e14",
".git/objects/2a/b57b469477577e412f366601065a221cef795b": "db3320f7d2dc3a6bcadd099de36170a3",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/3c/120358d101f359e268f4a9bd73b1da98472e8c": "9a005160943cd706f0a6cae52b70d813",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3c/bd4718548bb3dc65a32319ffd2c231e1f40c59": "2a102790a8128df843bf7d74d05e1ce2",
".git/objects/3c/efa012b4f9b1a162929708e41caa27791ceef8": "b1ad6cf2588999aaffa9e39184e761ef",
".git/objects/40/bfcc76feca5dfe075e518a87a08df2b31a5f6a": "9659fe2909c0afed6275e66548e6113d",
".git/objects/41/30b34f03a0b53fd6fa23bd0a0f632433843088": "3a01702da592278ad56d91c261afb8bc",
".git/objects/49/50ba748814fa0a37d732abdc62978f4004e225": "ce09f9db81bc94ed715b2e1cd28bf797",
".git/objects/4f/fb86d3eb880cc5e962d76096845209fa2bf013": "9f83e0f6d2bae48144e8c2a6d257b60b",
".git/objects/51/e23dd93760395d9dacebf460ccaf09377c5848": "9c22d61d39f6e674f54a3eb60f25928d",
".git/objects/52/2dc3105c81c753c96ba7b0b0024c42301dee6f": "a9fa8f430f523f3f98fd2f2aced148cb",
".git/objects/54/1cd809cf4f16765b537ac53e87466e595ede26": "58368e996fd5c13d00304482aba2dcbb",
".git/objects/58/1680955f8b5b26b4272c792c23d8347ce49847": "6c6f3f62c05986a7a603b65735d0a5c9",
".git/objects/59/7ea69dbc85b5366d8681cfe3a9845f77c1cc48": "9fc5c96908f3a4eca5720f0d8e4eec5f",
".git/objects/5a/74af90da8e58169a20bf3e0c9006dc931b86f9": "fba49ed02802b4a3e654c7a30ae1a91b",
".git/objects/5b/979039ab28aaae305074541fe39258753ba624": "d8d203e90bc2970b708c118fe10ca044",
".git/objects/5e/70b0084ceeb93c7018840fd2ee7d0bad656e1a": "a1269d560acda4441b6864258c551207",
".git/objects/5e/f5ca67c9f81bbbefd250b9e6018c038e5c6260": "8390581c889313d34aa84b4fb54ebde6",
".git/objects/64/080d4c6075a55e9b32835aa6ae21751729e36e": "6a079112a545af78eae97c1d2a706d7b",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6c/43ce73b440bc7a612d7ce522d24feff295b583": "d22aa39f1875551499e101ee106b12fd",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6d/15e9e62526ea987387257509b31beb06e18793": "a5aca6df5bd26bd4dee7c0d04ab15476",
".git/objects/6d/8d49512ac5869ed6d46e0c886a9d1f965166b0": "f61a03fc97a202f802629bb1ba083f42",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/77/7d63dbe9492c7c18562ad3acf59bed43c54370": "f7c8b42fc447907a8f08c40afa400f25",
".git/objects/77/9c91f32814ff61dda61b89dc2460c67449edcd": "7fb79cb057d627f16bb54fca48a4c231",
".git/objects/77/c1215e21d5059a59792b93e3648354b54e6919": "df5ba731171386e4201080038928f364",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/2711c6d6e855966c6232b0f1270eb9ec6e0320": "c24ddac593aa29402b267398c35537f3",
".git/objects/84/bb7ac01fd8399b681a0185a1ba693b347bb91e": "9c7c1a80c2995b601d713f2a9c80f2ec",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8f/01a556a13135c7e23021dfb15f9b73bff3afd5": "3b2118c0f931c923311ac35dd97ccf3e",
".git/objects/8f/0e0e42ab8a9a08a1d1fc9f4200df77fd7b7821": "2b5964701360bef4e1b09216ea028062",
".git/objects/8f/56034405482c073f5d47135dadbe618b43e305": "2fd8a8150ac2a00e0ee037c1894921a3",
".git/objects/93/ac955fe0eca290d7e9239a2b0aab689554a0d8": "e89c0a877cc7bf67c96a67109e57d91f",
".git/objects/94/8a2a6cc76a4d7cb692d0d08e352f126ec48a9d": "cbf73b51fb0502e860178e210c363ca7",
".git/objects/95/eae8b11cc0df701f224f3acbfd2bcf37a4a0aa": "e1be854f1b4514a85b77e9caca623259",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/9f/e325fefe86e4ea5760b588e5c047174952e79a": "cb9fb0e32dab4cf3acc46870cdfa768d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b026b0cacca22d74114496d039b424d9c1c336": "77ff81751f99ac889a5fd707ca4fd690",
".git/objects/a3/c58c506000026537160a0076e7d09cdce043ec": "b0555bd09897b23b75323df8828b58ce",
".git/objects/a3/f12fe27d9964d55699d773c1fe72d00de84126": "2f91d5d2cb1af6320b4e5d7f146b4d26",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/7ec964347c5762a51f4a22646e535b4c34f428": "3e734c8c50d6715a8bac5119a1e05c17",
".git/objects/ab/e99e20c38a23e95295917d6a5cdb49a8489eb8": "daa46bdb83328438b3e1f0bb1b074657",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b9/de473cba51befa0b9013800c15168948e285a9": "5ad0138adb882533dc211d25b844ee3d",
".git/objects/cd/cd6b4c36bf41f2ac1deb396345c75fd5beaa0b": "67feff52fcf7a6a76f831c52483aecd6",
".git/objects/ce/ac75d75e6bcaf56823bacd051bd9f135af6f4a": "339275ef60385a218d05801d845443c2",
".git/objects/d7/36ba1b03fd2ed63ac94d60124ffc57873a47c2": "2615d69a8bd20b343b8dcce0c65f1f3e",
".git/objects/d7/e9ac1731b87e49a5328b815546b35006e4c5db": "25318c6e5412ceb0d89cca37adbd8a8d",
".git/objects/dc/8fb69425ddcf0b04e5b21640e897d70e6bc19c": "7cbba4faba07b475feb9d5294b7456d6",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/55aad6593952317fc27c1d29e37c1c38904851": "1d1ba4d5e02d94ee0a1b83cc7d2f8d5d",
".git/objects/eb/5ec67170570f013e9745ca52825e2de84f8680": "1cf5cdb7b913e0a124348571aedb08f1",
".git/objects/f3/1d36481db223f21291173a8f3eef0c9a83fc89": "91ddee79bf4e64811f7229115ee34af7",
".git/objects/fa/9208c1eba756abc4b5ddb35641c801bd255acc": "49331d5dda1a1d314698d58f7ca4fe21",
".git/refs/heads/main": "3cf567acba82d81d694c88a5412e1d63",
".git/refs/remotes/origin/main": "3cf567acba82d81d694c88a5412e1d63",
"assets/AssetManifest.json": "f36db37ebf1e7f2de182df98e54b3f0c",
"assets/FontManifest.json": "a0a3437493bda9ea6dd0975490a2e100",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/appLogoTrans.png": "07114d46e3d180f4c19e37044f65ef31",
"assets/images/flag/a.png": "b9b6d8bf7a26a75e84a6ad6b18462e00",
"assets/images/flag/ic_ar.png": "ead63c82d77a99b1c50230f75153b47f",
"assets/images/flag/ic_dutch.png": "26345c43ad618fa2dae511c8e02bb2f1",
"assets/images/flag/ic_france.png": "40dc814b25b14060af3bb7ecb3adb39b",
"assets/images/flag/ic_germany.png": "be44cab6fec15f70e2c84862838aeb6e",
"assets/images/flag/ic_india.png": "a5f4b487e6b01ff36c6ab3b0017ad34d",
"assets/images/flag/ic_indonesia.png": "e7cedeba8c9bcc7b068727d37ab1a2d1",
"assets/images/flag/ic_portugal.png": "7b738112b45a26cbf1f4de2fb221da95",
"assets/images/flag/ic_south_africa.png": "8c2d97c5a4d316ada818518a65c4d898",
"assets/images/flag/ic_spain.png": "633e090c6e72d03f9a4550271598ec70",
"assets/images/flag/ic_turkey.png": "f8255db14d2856d02e78a54f676734c8",
"assets/images/flag/ic_us.png": "da547d78f0813ecfca786901eca9e9a5",
"assets/images/flag/ic_vitnam.png": "7d6ede3308bebf4302a0e357d7f6af0b",
"assets/images/home.png": "3cf3bbf96663fefac4e687373e2fdecc",
"assets/images/ic_home.png": "56f8205850dc6a2e92c791a67e91da6f",
"assets/images/ic_logout.png": "ea0ba75540e82105094fc0c1ce5b73e2",
"assets/images/ic_menu.png": "2360d869f48cac8a64b1b392104b3bb4",
"assets/images/ic_order.png": "89f4de9c011e5ce9414442ebf887e9e1",
"assets/images/ic_restaurant.png": "429305229f4b907a56b8a24a448830ed",
"assets/images/ic_settings.png": "92c25f37d91bbc70ba1a197b38c0b57c",
"assets/images/ic_user.png": "b8982e196d7c86f12143ffa41d2b33a8",
"assets/images/logo.png": "fcfde2a90a31fe2d282405d81dc1a2b2",
"assets/images/placeholder.jpg": "0d76c36102ab7301fb582fe101acb506",
"assets/images/profile.png": "5c4a3985cdfb63c0f56ac42d1a1baff4",
"assets/images/setting_img.png": "73fb9a57509fd6867ad2ec6f1adab935",
"assets/lang/en.json": "bea5f477486e14d253f4ae0dacdaeb52",
"assets/lang/es.json": "ca1750a21cd3bfe47d7d1020fe23280f",
"assets/NOTICES": "cd60d119e275d05dd3bdefc31d9765f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "e766963327e0a89f9ec2ba88646b6177",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "13685372945d816a2b474fc082fd9aaa",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "db78b9359171f24936b16d84f63af378",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "1ab236ed440ee51810c56bd16628aef0",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "6a2ddad1092a0a1c326b6d0e738e682b",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"favicon.png": "f0651f415926c5eec2479a99a69a2882",
"icons/Icon-192.png": "8c10f24d105bb562e2dcca4537e699d4",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ccd6081d0b8732ba9d3c1bdd89da1e77",
"/": "ccd6081d0b8732ba9d3c1bdd89da1e77",
"main.dart.js": "3b5c9380cb08459f5356c9f9aace7b48",
"manifest.json": "cb9901d961d62ec34fd3571819fb87db",
"senal.png": "320f3947ec51a19bd43bae9362714d10",
"version.json": "73f53dbb19969004c7959fe5b4e40d72"
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
