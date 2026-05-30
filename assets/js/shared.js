// Shared iPhone status bar HTML + theme toggle + embed mode

const StatusBar = `
  <div class="dynamic-island"></div>
  <div class="status-bar">
    <span class="time">9:41</span>
    <div class="indicators">
      <svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="3" width="3" height="6" rx="1"/>
        <rect x="5" y="2" width="3" height="8" rx="1"/>
        <rect x="10" y="1" width="3" height="10" rx="1"/>
        <rect x="15" y="0" width="3" height="12" rx="1"/>
      </svg>
      <svg viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3.5C5.79 3.5 3.78 4.29 2.22 5.6c-.25.21-.27.59-.04.82l1.06 1.06c.2.2.51.21.72.04 1.13-.96 2.59-1.54 4.04-1.54s2.91.58 4.04 1.54c.21.18.52.16.72-.04l1.06-1.06c.23-.23.21-.61-.04-.82C12.22 4.29 10.21 3.5 8 3.5zM8 7c-1.05 0-2.05.38-2.85 1.06-.23.2-.24.55-.03.77l1 1c.19.19.49.2.7.04.34-.26.74-.41 1.18-.41s.84.15 1.18.41c.21.16.51.15.7-.04l1-1c.21-.22.2-.57-.03-.77C10.05 7.38 9.05 7 8 7z"/>
        <circle cx="8" cy="10.5" r="1.2"/>
      </svg>
      <svg viewBox="0 0 24 12" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="20" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="1" opacity="0.4"/>
        <rect x="2" y="2" width="17" height="8" rx="1.5"/>
        <rect x="21" y="4" width="1.5" height="4" rx="0.5" opacity="0.4"/>
      </svg>
    </div>
  </div>
`;

const HomeIndicator = `<div class="home-indicator"></div>`;

// Theme toggle
function initThemeToggle() {
  const saved = localStorage.getItem('aireader-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  // 如果在 embed 模式，不创建主题切换按钮
  if (window.location.hash === '#embed') return;

  const btn = document.createElement('button');
  btn.className = 'theme-toggle';
  btn.textContent = '🌗 切换主题';
  btn.onclick = () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('aireader-theme', next);
  };
  document.body.appendChild(btn);
}

// Inject status bar into iPhone screens
function injectiPhoneChrome() {
  document.querySelectorAll('.iphone-screen').forEach(screen => {
    // 跳过：no-chrome（容器型，仅放 iframe）
    if (screen.classList.contains('no-chrome')) return;
    if (!screen.querySelector('.status-bar')) {
      screen.insertAdjacentHTML('afterbegin', StatusBar);
    }
    if (!screen.querySelector('.home-indicator')) {
      screen.insertAdjacentHTML('beforeend', HomeIndicator);
    }
  });
}

// Embed mode: 当 URL 带 #embed 时，让 iPhone 屏幕铺满 iframe（不破坏 DOM）
function initEmbedMode() {
  if (window.location.hash !== '#embed') return;

  document.documentElement.setAttribute('data-embed', 'true');

  // 注入 embed 模式的样式：隐藏 page chrome，让 iPhone screen 铺满
  const style = document.createElement('style');
  style.textContent = `
    html, body { margin: 0; padding: 0; background: var(--c-bg); height: 100vh; overflow: hidden; }
    .page-wrap { padding: 0 !important; max-width: none !important; }
    .page-wrap > *:not(.iphone-frame) { display: none !important; }
    .page-wrap .iphone-frame {
      width: 100% !important; height: 100% !important;
      margin: 0 !important; padding: 0 !important;
      background: transparent !important;
      border-radius: 0 !important; box-shadow: none !important;
    }
    .page-wrap .iphone-frame .iphone-screen {
      width: 100% !important; height: 100% !important;
      border-radius: 0 !important;
    }
    .theme-toggle { display: none !important; }
  `;
  document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', () => {
  initEmbedMode();      // 先处理 embed 模式
  injectiPhoneChrome();
  initThemeToggle();
});
