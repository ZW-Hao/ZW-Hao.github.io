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
    "revision": "d21dfebd9663edea9b160fa4edd0bcc4"
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
    "url": "assets/js/11.e31419be.js",
    "revision": "014f49a5e4cf80f1ef921b2a3622eac6"
  },
  {
    "url": "assets/js/12.3f241eeb.js",
    "revision": "2558768c5b23f2850eb3b56601acdc30"
  },
  {
    "url": "assets/js/13.a912365b.js",
    "revision": "be3611cdff46e36d7057249212152dc3"
  },
  {
    "url": "assets/js/14.d38ad00d.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.fa33f442.js",
    "revision": "9b90ef0f71190ca8f76b01c7fe6d870f"
  },
  {
    "url": "assets/js/16.c8f31470.js",
    "revision": "22924c3aa81d9c82f861200aec5d4679"
  },
  {
    "url": "assets/js/17.1a2c1ecd.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
  },
  {
    "url": "assets/js/18.526efccc.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
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
    "url": "assets/js/app.ad0f308c.js",
    "revision": "86c4afb8fe1f83c1fcc5c6703d5759b9"
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
    "revision": "9fb6ea72603bd057bbb31a4edf4a8a00"
  },
  {
    "url": "categories/java/index.html",
    "revision": "25650a09b10911080ba03a884c84ef31"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7883bc4599e66ac1d8c0c90413e6deb6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c8bef0a2660856ce3b1f027b9f27d642"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e6dca88551734857c040ea66c71ceb76"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "6ede6bfca18452927c70639bd618d9c2"
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
    "revision": "d483cdd31cca89c27584be256e55465e"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "e7524a92488afc729476e37518686069"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "b4a62e412ee17e603e8a7a141b789fba"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "fc1b1852d89da648e620537e3c726014"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7f1d3e5ea2bc18a9f8c03e2e3a325ea3"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "631ff478ed9234e523365eca391e2baf"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "7c9b59fe91d2d5228bf8a055106bf538"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c5df4230062a5ea1dac5f4602152a0ed"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "b8c6b8fd4aa419ff8c714aadee830276"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ff0376b3b68c01c7b1809cc9e9e0f588"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "a33c68bf415289c0d6567720e26bcf25"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "a2d4b5e643c4e00190727b2de890b811"
  },
  {
    "url": "timeline/index.html",
    "revision": "bdc24d5fd572018e30b1460dab152844"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "53872eead6c74269448242a9c47600f3"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "852f61cce5b102a45502989886976ff7"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "4a3a07e1fddec941ab05b5938ffa4a16"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "16abe99d0dba508d5cf6829b61826a67"
  },
  {
    "url": "生活分享/life.html",
    "revision": "460ffa2bc3b7654726da786ab49da0bb"
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
