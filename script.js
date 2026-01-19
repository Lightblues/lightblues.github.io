(function() {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const STORAGE_KEY = 'theme';

  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function setTheme(theme) {
    if (theme === 'system') {
      root.removeAttribute('data-theme');
      localStorage.removeItem(STORAGE_KEY);
    } else {
      root.setAttribute('data-theme', theme);
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }

  function getCurrentTheme() {
    const stored = getStoredTheme();
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Initialize theme from storage
  const stored = getStoredTheme();
  if (stored) {
    root.setAttribute('data-theme', stored);
  }

  // Toggle handler: cycle light -> dark -> system
  toggle.addEventListener('click', function() {
    const current = getCurrentTheme();
    const stored = getStoredTheme();
    if (stored === 'light') {
      setTheme('dark');
    } else if (stored === 'dark') {
      setTheme('system');
    } else {
      // No stored preference, set opposite of current
      setTheme(current === 'dark' ? 'light' : 'dark');
    }
  });
})();
