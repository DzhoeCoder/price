function toggleTheme() {
    const html = document.documentElement;
    if (html.className === 'light') {
        html.className = 'dark';
        localStorage.setItem('theme', 'dark');
    } else {
        html.className = 'light';
        localStorage.setItem('theme', 'light');
    }
}

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.className = savedTheme;
