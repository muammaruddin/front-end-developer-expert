import 'regenerator-runtime';
import CacheHelper from './utils/caches-helper';

const assetsToCache = [
  './',
  './icons/icon-72px.png',
  './icons/icon-92px.png',
  './icons/icon-128px.png',
  './icons/icon-144px.png',
  './icons/icon-152px.png',
  './icons/icon-192px.png',
  './icons/icon-384px.png',
  './icons/icon-512px.png',
  './index.html',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  console.log('Installing service worker...');
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  console.log('Activating service worker...');
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
