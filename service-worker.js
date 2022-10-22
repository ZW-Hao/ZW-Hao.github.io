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
    "revision": "e225473191175c33de560f3766b8152d"
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
    "url": "assets/js/11.62796e49.js",
    "revision": "5b942ba653f6b8e2f033d460e6952dd5"
  },
  {
    "url": "assets/js/12.06df32df.js",
    "revision": "53004473ef9db00a2f2edeefeb3e8b74"
  },
  {
    "url": "assets/js/13.8398cdcf.js",
    "revision": "b3bad8462ad45025b387dc523c0162fc"
  },
  {
    "url": "assets/js/14.33d599e8.js",
    "revision": "b3ba85ecdbc120d9d09623d55f86ec66"
  },
  {
    "url": "assets/js/15.1260de72.js",
    "revision": "a60d556e1242272cb1708d05d7465772"
  },
  {
    "url": "assets/js/16.213deab0.js",
    "revision": "ca4ae19740b895ba07c97e2821669571"
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
    "url": "assets/js/app.78a725b8.js",
    "revision": "1af8bb7fbe387a9b9f52fbc8a702551a"
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
    "revision": "a39199620143aaa517fb471abb8f1167"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3adbd540f6e5207009e8c09fbaf68c87"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "666b456e31695890ec6c030788522b24"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "95040324ec9a57b200f2792534c1a4dc"
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
    "revision": "30afa9e8f7510d860f946dd276022509"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "a73b32ef166bcba6ce6fee4b96c58993"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "2b3f7cd05bbbb05460ea7eacb79be274"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "9f858d38849b07bf60c5540383d69934"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "980ab4c4ad8ce2a5f97cc8532c18f260"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "9d4ef334929fd6e6b0e6a9d172172637"
  },
  {
    "url": "tags/链表/index.html",
    "revision": "44ffa65ed0eec798eb3d9bd980d482d6"
  },
  {
    "url": "timeline/index.html",
    "revision": "1fb4f0f491e70a97db697767fb5e5486"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "前端/index.html",
    "revision": "56865f4980854a7f750cd81faea7f19e"
  },
  {
    "url": "算法/index.html",
    "revision": "25b78310e20ab2a8529b1c92608476f5"
  },
  {
    "url": "算法/两数相加.html",
    "revision": "c2a5585cb25013ab769e40a3a9e33842"
  },
  {
    "url": "论文/index.html",
    "revision": "9be54111175d65bb1956afe664921adb"
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
