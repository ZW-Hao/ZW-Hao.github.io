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
    "revision": "303d01c6da3ac9a3bdb6680f1015225e"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
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
    "url": "assets/js/10.7d3b4a8b.js",
    "revision": "e1675544558bf471cac5980848156ea9"
  },
  {
    "url": "assets/js/11.6b4c27ab.js",
    "revision": "552bd91a2b4914d19121aef1d69887a4"
  },
  {
    "url": "assets/js/12.a502440a.js",
    "revision": "76a68ca257f880dd46e996652e7a6d45"
  },
  {
    "url": "assets/js/13.d77ce936.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.54678147.js",
    "revision": "cc6353588aaf3730546012d0bec820b8"
  },
  {
    "url": "assets/js/15.f7fd22ef.js",
    "revision": "116203cd3252e03bc40acb4af122a2dc"
  },
  {
    "url": "assets/js/16.2dfcc019.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.1a2c1ecd.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
  },
  {
    "url": "assets/js/18.21d0be10.js",
    "revision": "74f2f9e758d5fd91c5820df08a2c50c8"
  },
  {
    "url": "assets/js/19.80719780.js",
    "revision": "7191d582f5c9f8be1c5447654da3c9fc"
  },
  {
    "url": "assets/js/4.259631bb.js",
    "revision": "929d15f1eb637dd020d2e6d8a779329a"
  },
  {
    "url": "assets/js/5.3c7bc9ee.js",
    "revision": "08d857a37d6c21c269db029e29ed57f6"
  },
  {
    "url": "assets/js/6.783e34e1.js",
    "revision": "a74e582518f58eb1034fc855bc6b506c"
  },
  {
    "url": "assets/js/7.ad36110d.js",
    "revision": "1a29d50f75cd09087555e0c57dfcaf88"
  },
  {
    "url": "assets/js/8.e21f52f7.js",
    "revision": "711b16945cdd0d83ca3761f38fbfda74"
  },
  {
    "url": "assets/js/9.7fd376bc.js",
    "revision": "b43e8bd1a243d17dc15821e6e43dc6b5"
  },
  {
    "url": "assets/js/app.b75bfd33.js",
    "revision": "eae82b762b79e1fe86f2d39a1870ea6b"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.1e73e504.js",
    "revision": "42c68ae816be8ddaeefbf779158d148b"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "be4ee8a59bc80ab8e188fb68db061306"
  },
  {
    "url": "categories/java/index.html",
    "revision": "90d7f60cf6a1760351cecf44afe645e9"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4e1191855d66f5f4f104f1bf1d64f5b0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6c198feec1e0bfce284e5ec50c730616"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "8623a72538652827a40bf5ebc8fc319f"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "3fc4d74ba23744ff7f3776a80ddca5de"
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
    "revision": "611776d092d7844a9e4faace0adb952c"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f3e9ffb1d5e97b3765bf82dbb95e4f45"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "e979215ed7548238cb424bd3b05d7422"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "73a7674e3f09dcc02d627598ee8debbd"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8badb9fb302ed0f4b9c35850d656f31b"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "6d4bd7d94c36cd63030232baa310e35f"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2156cc842167425bcaf0e3a316d7ba04"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f08263242e9e72f9dad71f8bb259b6fd"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "cfaabf9998e258a2169bba20a7bb057e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c50d967653dc39ed02bfca45aeb80644"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "78d81b6a290dc5b34e177843b657c359"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "588c0639fad10ba221b2bb92df4cedae"
  },
  {
    "url": "timeline/index.html",
    "revision": "814222160c4691c69bc705fed2e3fa24"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "6030ebd92e901c584973b3f5df45470e"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "4956d4d74087def89fda95ae96924f39"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "9abe197a2eee78ca99c929669684b423"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d98c86e7e2362d92cb0a8299d94c1f51"
  },
  {
    "url": "生活分享/hello.html",
    "revision": "d0e7f3f94d325d5d77d33735777a797a"
  },
  {
    "url": "生活分享/life.html",
    "revision": "dc85fca8060055bd9b2a0438ea0553c2"
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
