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
    "revision": "275c44b3d72af9815778060ca2b11704"
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
    "url": "assets/js/11.726d5499.js",
    "revision": "66dd25c8ea32b47d9e9337ab7a5663bd"
  },
  {
    "url": "assets/js/12.a334d4dd.js",
    "revision": "0d5b62cf017b0d6de424cab34acf803a"
  },
  {
    "url": "assets/js/13.1b654e7b.js",
    "revision": "2a0c4360873ef6370f58b6ba40579fca"
  },
  {
    "url": "assets/js/14.d4f95c22.js",
    "revision": "2d43ec16220ff7032d65b25ebad0a4d9"
  },
  {
    "url": "assets/js/15.c2c1e4d2.js",
    "revision": "c915fca19b8b7f561e51951746c1d170"
  },
  {
    "url": "assets/js/16.9dc7fe00.js",
    "revision": "cf44bb77fde8bf580ad48d7fd1ba9695"
  },
  {
    "url": "assets/js/17.7a0f0066.js",
    "revision": "bbe9f11fe9baa0784a53f5a20346d87f"
  },
  {
    "url": "assets/js/18.7095ee77.js",
    "revision": "88e9394b96ee6406a73b4fae89fbf4c8"
  },
  {
    "url": "assets/js/19.44de80f4.js",
    "revision": "8ad491e92cc0e5c8860332243d48e12b"
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
    "url": "assets/js/app.24853a33.js",
    "revision": "3121bdf4e66242f966aa769c8745e406"
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
    "revision": "076e543411e14aae175aea8b0231c15b"
  },
  {
    "url": "categories/index.html",
    "revision": "884fbf0c32c78ef0b9521c299a2b0740"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "f8cca5e2eccbc8fef5ef5960b3cc30f6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d247489d57ef614b02a91b13ad4cf8d7"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "cf4dd3e43ca0e9463c5ffb57eff21737"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "c83e816b1c2e8239ec569fca3578349c"
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
    "revision": "212d20a0675395d704ac5c5dab8956e5"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "15c9bffeb64359e1697d727f1e5e34a8"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "034f947fe468905d3f9059f0748f7b3a"
  },
  {
    "url": "tags/JS/index.html",
    "revision": "809b6df2ddf824994db63ef1c5f8c3ff"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "54fa1d858c5c97a7aa95b0acfc9d5674"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "27df8a940349a0ad1f1108fbc0f3008c"
  },
  {
    "url": "tags/数组/index.html",
    "revision": "f7e82483b4d56d336bec195884c63950"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "a525ac6dc2b4bfe9ea70d0a2f6351ea3"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "f34e8b75fa10317efb4e4384fde6703a"
  },
  {
    "url": "tags/链表/index.html",
    "revision": "f0be0a4a06fd5002c4a00203428f1b40"
  },
  {
    "url": "timeline/index.html",
    "revision": "b90abea43865f200ddfc6119566f868f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "前端/index.html",
    "revision": "5231c936dfea65709e9bce4b381ad78e"
  },
  {
    "url": "前端/JS基础知识.html",
    "revision": "0b4a771cd8d8728bf21e393f23d6f648"
  },
  {
    "url": "前端/one.html",
    "revision": "f4b1311d5cec49575c59b8087a176135"
  },
  {
    "url": "算法/index.html",
    "revision": "8dd75c7942ff737904f524a50b7dafc0"
  },
  {
    "url": "算法/两数相加.html",
    "revision": "48d509ae3d80d7525d7c6071f5c49a0c"
  },
  {
    "url": "算法/合并有序数组.html",
    "revision": "6c8775a53e2eabb5867020f86b38617e"
  },
  {
    "url": "论文/index.html",
    "revision": "99abba17797eba3b8688be919fd39980"
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
