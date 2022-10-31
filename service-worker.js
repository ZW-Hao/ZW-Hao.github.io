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
    "revision": "52eb6af2e3d5bd2fa81fc09b320d6d6f"
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
    "url": "assets/js/12.06df32df.js",
    "revision": "53004473ef9db00a2f2edeefeb3e8b74"
  },
  {
    "url": "assets/js/13.85b63543.js",
    "revision": "836d179614ed8ab2ba00fb552f8e62cb"
  },
  {
    "url": "assets/js/14.3aa3db7b.js",
    "revision": "0ecf0856405f7bd6fff938715ef35d8f"
  },
  {
    "url": "assets/js/15.c2c1e4d2.js",
    "revision": "c915fca19b8b7f561e51951746c1d170"
  },
  {
    "url": "assets/js/16.ea766744.js",
    "revision": "56fb45259942a1929dc9f189d092ceb4"
  },
  {
    "url": "assets/js/17.c2865aaf.js",
    "revision": "a267704270abf93c42c100a46898a6f0"
  },
  {
    "url": "assets/js/18.fc240508.js",
    "revision": "91350b2a286162c9a7bee536f8d1d2f3"
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
    "url": "assets/js/app.51b80ba5.js",
    "revision": "823e05a8c547d7272986ecc2ad49d22a"
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
    "revision": "da289b5f7bc13efe7b6cc78c9f6b9174"
  },
  {
    "url": "categories/index.html",
    "revision": "c1896d77c6ec382973fc9b5aba499e21"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "38312511e1832f0bfee6969d1f5d779d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "404c344eaa67eca33f9ca361cc98a59f"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "60cf471e8bc3deff803f32aae4ffe89b"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "a20a3e96286872f0f34152d677e5be65"
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
    "revision": "48a6f4e8b707c95a2730bd16b358f85b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "21c2d26cd994841c32be49679b32c6e8"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "200fd49bf05bc7051b1df433e3a31a98"
  },
  {
    "url": "tags/JS/index.html",
    "revision": "67db1b5572cec336676c6840673d5eec"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "7a5fbfe121591239fab8a751c3cdafba"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "ac830ef70d4fd9fcadfe75516dde97cf"
  },
  {
    "url": "tags/数组/index.html",
    "revision": "942f42541ccf836afe03381f71508040"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "1ce72ceaab5c1eda5ae81d58a843ac45"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "71a9e7b96c50d9f4e463de0c2ec73393"
  },
  {
    "url": "tags/链表/index.html",
    "revision": "ccdd334103bf3d02407fb4dc0527e59b"
  },
  {
    "url": "timeline/index.html",
    "revision": "0702641a0d8c8a44cbe046f5ed3d8660"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "前端/index.html",
    "revision": "1d6608342cd7a8091d3153130afbb7db"
  },
  {
    "url": "前端/JS基础知识.html",
    "revision": "8e3835d15c0ffe31705cb01e66777da0"
  },
  {
    "url": "前端/one.html",
    "revision": "852ae7bc9fbe4de01532e2f1668ff2e4"
  },
  {
    "url": "算法/index.html",
    "revision": "9081e31c06bebe6894f7fbbf183d727a"
  },
  {
    "url": "算法/两数相加.html",
    "revision": "27a2617220be63df0c37c9881a6d3282"
  },
  {
    "url": "算法/合并有序数组.html",
    "revision": "a251b878f3d0fa1ded648aebfa26a05d"
  },
  {
    "url": "论文/index.html",
    "revision": "4556c0dd694c832cc32a7a59a524c2c5"
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
