"use strict";var precacheConfig=[["/clickclickgame/index.html","8dc1ac3586d5e70143dae16175d37d2a"],["/clickclickgame/static/css/main.a37049f4.css","e91cfe58d68be9b1dfc657a4d3908308"],["/clickclickgame/static/js/main.abdb7ffc.js","91d1030ad4d6cc79401ece7f36e60406"],["/clickclickgame/static/media/eight.5470d35e.jpg","5470d35e33ab40ead3c5184849f0be9d"],["/clickclickgame/static/media/eleven.1bd3cefa.jpeg","1bd3cefa8a0d88aa1701df013429582e"],["/clickclickgame/static/media/five.2ad51b94.jpg","2ad51b94fb077a9e1b585d1456aafc5a"],["/clickclickgame/static/media/four.a00768da.jpg","a00768da6dc90d9dc75e0fe2407e0e48"],["/clickclickgame/static/media/nine.6036864f.jpg","6036864f56d4e8d8cd3cf83b510713cf"],["/clickclickgame/static/media/one.1008d54b.jpg","1008d54b8b20248228d0f4e1a604193d"],["/clickclickgame/static/media/seven.1680bf8d.jpg","1680bf8d96c267f378c9ef3c9f9b9c5b"],["/clickclickgame/static/media/six.cae5e2da.jpg","cae5e2da80d3e6103897164e6e539967"],["/clickclickgame/static/media/ten.a73d8acb.jpg","a73d8acb1340464ed0618d574e79a57c"],["/clickclickgame/static/media/three.6510da98.jpg","6510da98fedd8a6f700d600f8fdd6d39"],["/clickclickgame/static/media/twelve.02324b8f.jpg","02324b8f430483af22501a700354c97b"],["/clickclickgame/static/media/two.d59fb8f7.jpg","d59fb8f79e1b7727911d62267df3a47d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var n="/clickclickgame/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});