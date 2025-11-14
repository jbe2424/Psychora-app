function openSettings() {
  window.location.href = 'settings.html';
}

// Theme toggle stub
document.addEventListener('click', function (e) {
  if (e.target.matches('.btn-toggle')) {
    const theme = e.target.getAttribute('data-theme');
    if (theme === 'light') {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
    } else if (theme === 'dark') {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
    }
    document.querySelectorAll('.btn-toggle').forEach(btn => btn.classList.remove('btn-toggle-active'));
    e.target.classList.add('btn-toggle-active');
  }
});
