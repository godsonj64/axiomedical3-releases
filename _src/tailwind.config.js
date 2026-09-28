// Tokens mirror AXIO Medical 2.4.1's own stylesheet (css/styles.css :root) so
// the site and the product read as one system.
module.exports = {
  content: ['./index.html', './assets/app.js'],
  theme: {
    extend: {
      colors: {
        ground: '#0b0c0f',
        panel:  { DEFAULT: '#121418', 2: '#171a1f', 3: '#1c2026', 4: '#22262d' },
        line:   { DEFAULT: '#23272e', strong: '#30363f' },
        ink:    { 1: '#e6e8eb', 2: '#a8afb8', 3: '#7c858f', 4: '#5b636d' },
        accent: { DEFAULT: '#4a90e2', strong: '#3672b8', hover: '#3b7bc5', tint: '#6aaee8' },
        ok: '#3fa876', warn: '#cf9f3f', bad: '#d9534f',
      },
      fontFamily: {
        sans:    ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['"DM Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"SF Mono"', 'ui-monospace', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: { page: '1200px' },
      borderRadius: { sm: '4px', DEFAULT: '6px', md: '6px', lg: '8px', xl: '12px' },
      letterSpacing: { tightest: '-0.025em' },
    },
  },
  plugins: [],
};
