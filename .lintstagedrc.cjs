module.exports = {
  'src/**/*.{js,jsx,tsx,ts}': ['pnpm run lint:es', 'git add .'],
  'src/**/*.{scss,css}': ['pnpm run lint:style', 'git add .']
};
