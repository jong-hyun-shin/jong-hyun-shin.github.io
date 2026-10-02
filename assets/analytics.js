/* Visitor analytics — setup instructions are in README.md. */
(() => {
  'use strict';

  // GoatCounter 가입 후 발급받은 사이트 코드만 입력하세요.
  // 예: https://my-site.goatcounter.com → 'my-site'
  // 빈 문자열이면 비활성화됩니다. 비밀번호나 API 키는 넣지 마세요.
  const siteCode = 'jong-hyun-shin';
  const productionHostname = 'jong-hyun-shin.github.io';

  // Count only the published site, never local files or preview hosts.
  if (!siteCode || location.protocol !== 'https:' ||
      location.hostname !== productionHostname) return;
  if (!/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(siteCode)) {
    console.warn('Analytics: enter only the GoatCounter site code. See README.md.');
    return;
  }
  if (document.getElementById('goatcounter-script')) return;

  window.goatcounter = {
    // Treat / and /index.html as one page; exclude queries and section hashes.
    path: () => location.pathname.replace(/\/index\.html$/, '/')
  };

  const script = document.createElement('script');
  script.id = 'goatcounter-script';
  script.async = true;
  script.src = 'https://gc.zgo.at/count.js';
  script.setAttribute('data-goatcounter', `https://${siteCode}.goatcounter.com/count`);
  document.head.appendChild(script);
})();
