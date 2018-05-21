"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","c41051392b420c5c98ba92740f091be4"],["/static/css/main.f3051ea3.css","7885e803073b3a64e253e0d495a1bb63"],["/static/js/main.86136973.js","5a32144b6003fcbed8abf6c24e5027b8"],["/static/media/Bangkok.30314aae.jpg","30314aae0815d06d54db7e62db095997"],["/static/media/Dubai.2cca5553.jpg","2cca55533eab5f6eb25b92d845fa11f2"],["/static/media/NewYork.65007ffd.jpg","65007ffdee5eca3bc56b0baf5c07dffb"],["/static/media/Paris.c6d5f202.jpg","c6d5f202c959962009eacbc248c46b24"],["/static/media/Singapore.f331ab46.jpg","f331ab46db72f344d5ae3cf021a9788f"],["/static/media/Venice.790cc711.jpg","790cc7118031af08a5c0ad32fae95092"],["/static/media/back0.808c0f20.jpg","808c0f20c40a2a2b83451589ea344c4d"],["/static/media/back1.281cb930.jpg","281cb930636960e40f68f0933dcb19fb"],["/static/media/back2.d84014f2.jpg","d84014f2d6521afbd2ab9ca068dd995c"],["/static/media/back3.8ea478ec.jpg","8ea478ecaf59652f6e5efe35c94e15e0"],["/static/media/icomoon.30302111.svg","30302111813e5319610e9ad7c7876463"],["/static/media/icomoon.8948fe2c.ttf","8948fe2c261e817e316e2101df8593be"],["/static/media/icomoon.eea3924a.eot","eea3924af299e2643bdabad7f4d26583"],["/static/media/trippur-coral.6f39fc2b.svg","6f39fc2bca4c7752b3cc4c1686464339"],["/static/media/trippur-white.86aee1a2.svg","86aee1a2e93cce60914204827ca6dc08"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});