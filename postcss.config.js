const autoprefixer = require('autoprefixer')
const tailwind = require('tailwindcss')
const clean = require('postcss-clean')
const purgeConfig = {
  content: [
    './src/**/*.njk',
    './src/*.njk',
  ],
  defaultExtractor: content => content.match(/[\w-/:.]+(?<!:)/g) || []
}

module.exports = {
  plugins: [
    autoprefixer,
    tailwind('./tailwind.config.js'),
    process.env.NODE_ENV === 'production' ? clean() : false,
  ]
}
