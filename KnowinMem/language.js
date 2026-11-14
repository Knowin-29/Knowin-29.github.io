/* URL-based language selection; no cookies or persistent user settings. */
(() => {
  const english = new URLSearchParams(location.search).get('lang') === 'en';
  const toggle = document.getElementById('language-switch');
  const target = new URL(location.href);
  if (english) target.searchParams.delete('lang');
  else target.searchParams.set('lang','en');
  const updateLink = () => { target.hash = location.hash || '#overview'; toggle.href = target.pathname + target.search + target.hash; };
  toggle.textContent = english ? '中文' : 'English';
  toggle.lang = toggle.hreflang = english ? 'zh-CN' : 'en';
  toggle.setAttribute('aria-label',english ? 'Switch to Chinese' : '切换到英文');
  updateLink(); window.addEventListener('hashchange',updateLink);
  if (english) {
    document.documentElement.lang = 'en';
    document.title = 'KnowinMem · Context and Correction in Robot Manipulation';
    const description = 'KnowinMem research dashboard: experiments, evaluation results, recorded robot demonstrations, interaction samples, and embodied VLA research.';
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:description"]').content = description;
    document.querySelector('.skip').textContent = 'Skip to content';
    document.querySelector('.edition').textContent = 'Research snapshot · 2026.11.07';
    document.querySelector('.sidebar nav').setAttribute('aria-label','Dashboard sections');
    ['Overview','Experiments','Results','Demos','Sample explorer','Research blog','VLA library'].forEach((name,i) => {
      const a = document.querySelectorAll('[data-page]')[i];
      a.innerHTML = '<span>'+String(i+1).padStart(2,'0')+'</span>'+name;
    });
    document.querySelector('.sidebar-note').innerHTML = '<span class="dot"></span>From interaction to action<p>Frozen VLA<br>Interaction memory<br>In-context correction</p>';
    document.querySelector('.sidebar-bottom').innerHTML = 'Evaluation data <span>↓ CSV</span>';
    document.querySelector('.loading').textContent = 'Loading the research dashboard…';
  }
  const files = english ? ['media-en.js','demo-view.js','library-en.js','app-en.js'] : ['app.js'];
  function load(i) {
    if (i === files.length) return;
    const script = document.createElement('script'); script.src = files[i];
    script.onload = () => load(i+1);
    script.onerror = () => { document.getElementById('content').textContent = english ? 'The dashboard could not load. Please refresh the page.' : '看板加载失败，请刷新页面。'; };
    document.head.append(script);
  }
  load(0);
})();
