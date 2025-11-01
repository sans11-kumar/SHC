// Use CommonJS style exports to ensure PostCSS loader (used by Vite)
// can require plugins reliably in this environment.
module.exports = {
  plugins: {
    'postcss-import': {},
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};