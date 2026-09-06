const CACHE='cortical-v04';
const FILES=['./','./index.html','./manifest.webmanifest','./cortical.css','./cortical-common.js','./nueva-actividad.html','./agenda.html','./contactos.html','./llamadas.html','./tareas.html','./notas.html','./configuracion.html'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==CACHE)await caches.delete(k);await self.clients.claim()})())});
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));return}e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});