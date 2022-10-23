/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0c0e8338c7209a7f0b6475643068aa62"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.0b1ccf48.js",
    "revision": "b117d2bce8637e818a5a3e220a4c44a5"
  },
  {
    "url": "assets/js/10.7e6933b1.js",
    "revision": "cf1a889ad73a659e101d6ee299d1ca7e"
  },
  {
    "url": "assets/js/11.9ce017a7.js",
    "revision": "f40f037d0396e94f0d681d5b1b048a40"
  },
  {
    "url": "assets/js/12.06df32df.js",
    "revision": "53004473ef9db00a2f2edeefeb3e8b74"
  },
  {
    "url": "assets/js/13.68a882d0.js",
    "revision": "ed86ce95fee22581210e8ba02ae8581f"
  },
  {
    "url": "assets/js/14.a8ba4b2c.js",
    "revision": "be4e8ccadf3d1a3718c3dd43861b8aed"
  },
  {
    "url": "assets/js/15.7d91e806.js",
    "revision": "d43b9009a9ff96b90d07deb279f3536f"
  },
  {
    "url": "assets/js/16.4fb67942.js",
    "revision": "3147667ffa77b316544dfcd792cc535e"
  },
  {
    "url": "assets/js/17.c4fc6027.js",
    "revision": "cab3eedcbf9d4a37d06fadea696f8990"
  },
  {
    "url": "assets/js/18.bfe8d95e.js",
    "revision": "c56cf358af4d538aac8e9eccd3ad102b"
  },
  {
    "url": "assets/js/4.de55eb24.js",
    "revision": "cc870a01a398b78110677f7bc4dc0338"
  },
  {
    "url": "assets/js/5.fcb6b2f3.js",
    "revision": "7a113ce429c4c81993c4bd2c511d66da"
  },
  {
    "url": "assets/js/6.f31365a8.js",
    "revision": "7eacb445d2ba4f2811af0cb6a58234a3"
  },
  {
    "url": "assets/js/7.997d7ecf.js",
    "revision": "36ce5b06fc51061e6298ca92f4fc5451"
  },
  {
    "url": "assets/js/8.a3dfbcd4.js",
    "revision": "dd49d7bbbee92b0d10aa76fcb4ed3eec"
  },
  {
    "url": "assets/js/9.7b3ede49.js",
    "revision": "230ce8e2057f2fd7d3aca750e1af668a"
  },
  {
    "url": "assets/js/app.19a9f44a.js",
    "revision": "c191a0043faead8018a6e7338d07b638"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.e4663826.js",
    "revision": "53c49965bfb5de1cf9c7f5a4359e45e9"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "7332323e1b142c9636a6fa97cb272237"
  },
  {
    "url": "categories/index.html",
    "revision": "039e65260f59bd86d20e090809264f16"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "62e42fad974cdb5ed9cad93fcadd7dca"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e1ccecd286d2a9570e448fe0b4a0c6eb"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "a727fe8bd254c3fbd0190ac8d5ccfefe"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "8c22a36c40de49d0aae54bdbca1910d7"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "90a166b890473d3cfff1981c80b4a911"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "820bf317e5f4ebbeb5a0cfde22a9a22b"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "d6590981b429d5d124e3734bd7576f18"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "cfa4378ee33f45f0bbdff711e1e2574b"
  },
  {
    "url": "tags/数组/index.html",
    "revision": "2ba81fcfd2c6e50a62ff02055f462ef3"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "f5ddaba31a98b54e955b27b0c26bbfa2"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "b42f48d71e79250815a1916ffe4cdf4d"
  },
  {
    "url": "tags/链表/index.html",
    "revision": "e41f5d2c30390cf542fb144fda937688"
  },
  {
    "url": "timeline/index.html",
    "revision": "a107490ba984757fac0e8a2b81a7fcc1"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "前端/CSS/one.html",
    "revision": "ced56d08991a76ee2eb4b1a954832814"
  },
  {
    "url": "前端/index.html",
    "revision": "478c850a5eb49d98a1a3559d6cce69cb"
  },
  {
    "url": "算法/index.html",
    "revision": "80d6a3c697b35b538f7d0506bf67beb7"
  },
  {
    "url": "算法/两数相加.html",
    "revision": "e83cfde56f294e8412dfaf97bc09d654"
  },
  {
    "url": "算法/合并有序数组.html",
    "revision": "b97f6d665f96d202702dbc47ebf8678b"
  },
  {
    "url": "论文/index.html",
    "revision": "e4cf4a86ba886138a4f1ceadac901c5e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
