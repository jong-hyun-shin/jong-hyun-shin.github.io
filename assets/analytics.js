
(() => {
  'use strict';


  const siteCode = 'jong-hyun-shin';
  const productionHostname = 'jong-hyun-shin.github.io';


  if (
    !siteCode ||
    location.protocol !== 'https:' ||
    location.hostname !== productionHostname
  ) return;

  if (!/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(siteCode)) {
    console.warn('GoatCounter 사이트 코드만 입력하세요. 전체 URL은 넣지 마세요.');
    return;
  }


  if (document.getElementById('goatcounter-script')) return;

  window.goatcounter = {

    no_events: true,


    path: () => location.pathname.replace(/\/index\.html$/, '/')
  };

  let pending = [];
  let unavailable = false;

  const send = (data) => {
    if (unavailable) return;


    if (typeof window.goatcounter.count !== 'function') {
      if (pending.length < 20) pending.push(data);
      return;
    }


    try {
      window.goatcounter.count(data);
    } catch (_) {
    }
  };

  const trackLink = (event) => {

    if (
      event.type === 'auxclick'
        ? event.button !== 1
        : event.button !== 0
    ) return;

    const target = event.target;
    const link =
      target && typeof target.closest === 'function'
        ? target.closest('a[href]')
        : null;

    if (!link || link.hasAttribute('data-analytics-ignore')) return;

    const href = link.getAttribute('href').trim();
    if (!href || href === '#') return;

    let url;
    try {
      url = new URL(href, document.baseURI);
    } catch (_) {
      return;
    }

    let destination;

    if (url.protocol === 'http:' || url.protocol === 'https:') {
      const path = url.pathname.replace(/\/index\.html$/, '/');


      destination =
        url.origin === location.origin
          ? `internal:${path}${url.hash}`
          : `external:${url.hostname}${path}`;
    } else if (url.protocol === 'mailto:' || url.protocol === 'tel:') {
      destination = url.protocol.slice(0, -1);
    } else {
      return;
    }

    const label = (
      link.getAttribute('title') ||
      link.getAttribute('aria-label') ||
      link.textContent ||
      destination
    )
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 150);

    send({
      path: `click:${destination}`,
      title: `Click: ${label}`,
      event: true,

      no_session: true
    });
  };


  document.addEventListener('click', trackLink, {
    capture: true,
    passive: true
  });

  document.addEventListener('auxclick', trackLink, {
    capture: true,
    passive: true
  });

  const script = document.createElement('script');
  script.id = 'goatcounter-script';
  script.async = true;
  script.src = 'https://gc.zgo.at/count.js';
  script.setAttribute(
    'data-goatcounter',
    `https://${siteCode}.goatcounter.com/count`
  );

  script.onload = () => {
    if (typeof window.goatcounter.count !== 'function') {
      unavailable = true;
      pending = [];
      return;
    }

    const queued = pending;
    pending = [];
    queued.forEach(send);
  };

  script.onerror = () => {
    unavailable = true;
    pending = [];
  };

  document.head.appendChild(script);
})();
