'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "10fd06f0c16633167c7bbd9c58940460",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "91cfb3426db2e2baa8ea02c7de38b9fa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0f964878d6f31a7e2f6be82c741f62f6",
".git/logs/refs/heads/main": "a8a01250eafed132241321ae39922ab0",
".git/logs/refs/remotes/origin/main": "8c6dbe363148986cca3235371040da1e",
".git/objects/00/b4b518dd315d45dd9af8aa90c01469b2856c62": "285c199fbc4bb5568f2977a463c385d5",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/217a014201797ffe50bdf90fd5d3da7566e2de": "b1ae97a9017f144cac0ca271d0650d4b",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0d/d6a28c96c7068badb8271b8603c81a6678d84d": "4fa8aab7fb2ee0b95141431dd0217354",
".git/objects/10/079067870feddea008bb8531a7409e2dacb1ab": "ffd6a5e263bfc7c53aef7085dcf859df",
".git/objects/15/b6bb726a8920db52a1a1928f51efb7559b8f01": "d37a62fe2ac814c921ee01afa8ade858",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/0c73585d85732830899c7fe0176f8f5cb40e01": "12d5f86dcb80bcfb7a65a19f9b5b1b89",
".git/objects/1b/900460b13f2518ce25ff4f6d89607405ee5bf3": "8791ea53eb8359f197b4bd2aae82425d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/27e9ef778e6138f0a4d77d3828569b2f6d6c85": "9b3c9f0fda6216f9a3373c7c0961477c",
".git/objects/23/f80ffbca10a658ce16b2583c5ca078769c6f06": "f714d849b26724c7e76676561ad4f717",
".git/objects/25/54ce872d518df68dd8e99ad22e92e3d0d17a5b": "583784deb813f34b9f07ee45387cd812",
".git/objects/25/df1c8b5b6a9d89a17e8f9c45d40e7b1118d127": "6427504d13bc0a230c98c9773915e78f",
".git/objects/2b/3d7811e7ffe2fe5cdd913387163f833118b480": "a3ddd4e0e7b24b3ee19f18c22615087b",
".git/objects/2c/05d9319e5be38b5be05e5513af88971be735ad": "79fa617664dfc913f9db0f633ba63468",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/b16c390d739d341b4f80ec1906c3a239301b18": "91732fced50b3812d2f5ab1bee7e62f4",
".git/objects/31/0427f110f96c0ea9cb1ceb2eababf61e938254": "d44a0af9f398e5453943d95b2a1ec179",
".git/objects/31/cce8bb1226fb2c4a50ebc585bbd4ece8361699": "5a637acd39bf42f93156a79f5097c9b1",
".git/objects/32/1578529858daef6476a51e934ed606116a3f2c": "3de4e9f11c28b3521454cf9c611937dd",
".git/objects/35/00910dd649c1c3eacf5193c82623825c166558": "d01036e99af60efe141e8c4942452882",
".git/objects/39/a23bc6500cb174bfd261b538917cd861593274": "d2fcfe5d50a378a00dc8d66d9bdbe777",
".git/objects/3b/3553bacb1d19aa90f15307a31204f17e0fdd5e": "6363891f1148184b342e271b90fed1c3",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4f/7a77727839f62b2a54a5f089d3cf20d0ecee36": "c56e9e8e939601e7e12ed4ef19378f29",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/7ac641137ff6eb27eca59d5dce72ef9a327415": "c6865554c07b42a2762bd1ddd5e7d4ba",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/68/531f4acd22f4af258adacab26f9f523c8a03fd": "59411fcf36157df32a2161c5e0768230",
".git/objects/68/bc8d9f1f976c923486e2434eb4685ca1f849d6": "e3813e80a2203fdc51b75d1d0bfd8bfd",
".git/objects/69/4fe19b1fb512565b29f6eb4fcc986dd284f28b": "49426ac399e424b933e8c589498b4906",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/a60ad1aa0c05cf5168e40f49db11f5830e2175": "27491ce03814a02c942dca80a9e3fc47",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/00da4e35edc7dde3dc428dcf8f5af738525c72": "014c79d15b55f8dcfa24957a833bc372",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/3e64617f3363174425ef49ea9e23ed6a63fbf7": "0a04a852f7a52f5a3852b7fd5bab8d69",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/7a/de49b3d5d465fb0ae93570f64854f06eba8342": "38d30d51872969d46063844ceb06dc49",
".git/objects/81/6fc49085a651ec41e2b68e76cc3260526f4acb": "fdc6df51ec520dff20970a3ec1a69384",
".git/objects/81/920e93854f464a301f50b8adc3483577954609": "0e33a3c7edf7621c2da7f84c50177578",
".git/objects/82/1120aea2a921c6684fe4d2b46df05bc28731bb": "a249f1bb37af45dabfd4d603c8a17a43",
".git/objects/85/19f9b756d4a4a360a73fe3c20a01afc092c184": "02562e0c53216c97a387d3ef9a8db7b8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/2e3c0bb4393e10f949b656f72d6df6ed8fd204": "bcc22bd2707ea1bca4ec3983f21e0d0d",
".git/objects/90/6105db06f58806100f54cbcf0c3a55ad4b1146": "dc8aa1926dea4fd420ee37d89c34669e",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/1c1113c460cc7d3cd1f7a7a43e5e6f88fe7707": "06fe4e755244ffdb638d557e03009646",
".git/objects/96/adcbc4df74c225e673cf86c5d51c023e0b5e2a": "66800ce5b402c962ad89dddd90307fcb",
".git/objects/9c/0eca305726a8039bd57338e3bce86ccbc4e87e": "f56b838d4f52152752353365704b0ff9",
".git/objects/9d/6f4b7fe28b23bdb7c509b7453e65cd4415af70": "9862a6cdf41b259f789d17c8309619f9",
".git/objects/a0/20d2af90efa2d1186c392ad195bd711a44ff2a": "bc563ababa8ace4b5fd5c56cc3f11ace",
".git/objects/a1/f3d0f6040725760cab3a0f9b0733d312ac028d": "058d64d52d0a8a7f7164745358c31f47",
".git/objects/a5/9ca06cbb1894dfe87788d744ddcca5ced75c49": "feec332e99eb592be67d9a8e0ff7e774",
".git/objects/a7/62f292bee2ddd8baa4bf08b016b7921b782461": "b5db2f5aefadc76b0ef9a841fc7e6858",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7d69cb6d807b8a3680f697bc589fd3f56bb6e8": "31476f429cef1fcfd9c91847449a31c5",
".git/objects/be/41d25e0d98132b0b611cbb3866e2078f41e455": "43cf93ccba04c2ece455267499fc58fe",
".git/objects/c0/cac3749d755d0c5018e402f83896f9bd0cda61": "558358b90b9fa340afb2247333cd0689",
".git/objects/c2/47578c99751995b5c762486d30ce12d4c5709a": "989795d291d8c4f8594e4f8d4695884a",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/ba10980c6f9cf47faa800f0b51b84911850b45": "a83bff9600e2a8e88bea63ea1f75d499",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/dd736d53aed2801ce370c294df5b18799bd7d1": "e5c38861518a4eb6432c442e5d57299d",
".git/objects/c8/31f210842e78d570ac9b4ba6773194bf7a0cbc": "f64d839812c88332cb0a691403b9cce5",
".git/objects/cf/bb5f1cda2e399d90b49d5225a207fd740e2342": "431236d4d4c7d57c1c270a0a9a4778fc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/50636ffd25728cbd07aff29173ec8f54629925": "cc32689dd1e6fb43ce5696aaf2ad4ca0",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/df/67c5242b0d42c22b59b99b634d9282a93030a4": "eadcc4da8e832b4f074c046f74d97e2a",
".git/objects/e3/d3d210f91db6364cab4648e7d494119b541eee": "f25c82ea0a3cf2d0fb9c7d82438ba38d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/69bdf3c01f800c75ab2b54af82c7202aa77d22": "d3511b37df076e10616697392934ee86",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/54f85149e0375088e7267688b65bf65b87027d": "6ddbb3ea0e813074c0a0680754a1bce5",
".git/objects/f1/123ed9ac460792e077a33da3b9ebd287a90f1c": "b09604eddbb235e6e0293c8176db931a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/cfae9752429f37fe80293ff190aabce4bcbc66": "4059e74ffdd90e426f6a17af50cd9983",
".git/objects/f6/71cf4d63c96fbefa8a8423a85a402a8aea68b4": "e78ccb74ac8e3f1c59c92fa86cfd8876",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/ff/edef613106d0ffbff1ac49503b1944d791120d": "95912b6b6d0fd05247314ef08f4bc368",
".git/refs/heads/main": "ed6cbf08d41263766b632cab345306c5",
".git/refs/remotes/origin/main": "ed6cbf08d41263766b632cab345306c5",
"assets/AssetManifest.bin": "4c25eaf191f05af3850317e1752d7843",
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
"index.html": "ba8bc8d9fef53343f77ec21f63cc4d4c",
"/": "ba8bc8d9fef53343f77ec21f63cc4d4c",
"main.dart.js": "69e3c2a879f3cfdc2fc1e619efa20412",
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
