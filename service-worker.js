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
    "revision": "9bffdf660ad1b075cae5f208f05dd2e0"
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
    "url": "assets/js/11.3d900ffb.js",
    "revision": "b01a4a25b6dc88ec37843937e5c787f7"
  },
  {
    "url": "assets/js/12.a334d4dd.js",
    "revision": "0d5b62cf017b0d6de424cab34acf803a"
  },
  {
    "url": "assets/js/13.5a19071e.js",
    "revision": "52362aca95b15b9373729d7695ceddb7"
  },
  {
    "url": "assets/js/14.61d3cd9b.js",
    "revision": "c92559ee38186cb8dc116b80814d066a"
  },
  {
    "url": "assets/js/15.3b86fe06.js",
    "revision": "a5be604ae695b6bdc944789feba71e75"
  },
  {
    "url": "assets/js/16.c21d8d0a.js",
    "revision": "29cdb8ab66542b802eb54134c2362bd7"
  },
  {
    "url": "assets/js/17.470fdbc6.js",
    "revision": "c5228a7b972ce6ccb09efd082aa8559a"
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
    "url": "assets/js/app.c3d3330a.js",
    "revision": "1206578d5f44f9ca87791cfcf53dba31"
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
    "url": "categories/index.html",
    "revision": "0778a9a335307ba8f12785be97668423"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "068ff692eb4566b68bce4bb8f9d80e33"
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
    "revision": "bf8f9edbea3ef373a7cff03a9dee79ef"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "aa9b64ed56307277d5f64a61aecd7812"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "bf21b74f86cad367a1e9ca23f7c4313e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c41212c23722e0d56865489d5b9d561f"
  },
  {
    "url": "timeline/index.html",
    "revision": "cbd7faa316a2c55a75063e586d551456"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "主页/index.html",
    "revision": "c9c5708db191b0f2ef744eb1ab0bdd68"
  },
  {
    "url": "分类/index.html",
    "revision": "ec30f164f5ca4c26251b74829c592e26"
  },
  {
    "url": "生活分享/hello.html",
    "revision": "af6e04ee7cdd41a7974bb09af7a6baa6"
  },
  {
    "url": "生活分享/life.html",
    "revision": "36c1a21a4c1b5cb8244ca4a35fade55b"
  },
  {
    "url": "论文/index.html",
    "revision": "3dd22fa8694c3286a90b2014c1cdf134"
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
