require('dotenv').config()
const markdownIt = require('markdown-it')
const markdownItEmoji = require('markdown-it-emoji')
// const markdownItAnchor = require('markdown-it-anchor')
const markdownItAbbr = require('markdown-it-abbr')
const markdownItFootnote = require('markdown-it-footnote')
const markdownItContainer = require('markdown-it-container')
const markdownItMark = require('markdown-it-mark')
const markdownItAnchor = require('markdown-it-github-headings')
const customLinkIcon = `<svg fill="black" viewBox="0 0 20 20"><path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>`

module.exports = function (config) {
  // Plugins

  // Filters

  // Markdown
  const mdlib = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  }).use(markdownItAnchor, {
    className: 'anchor',
    prefixHeadingIds: false,
    linkIcon: customLinkIcon,
  }).use(markdownItEmoji)
  .use(markdownItAbbr)
  .use(markdownItFootnote)
  .use(markdownItContainer)
  .use(markdownItMark)
  config.setLibrary('md', mdlib)

  // Layouts
  config.addLayoutAlias('base', 'base.njk')
  config.addLayoutAlias('post', 'post.njk')

  // Pass-through files
  config.addPassthroughCopy('admin')
  config.addPassthroughCopy("./src/css");
  config.addPassthroughCopy("./src/images")

  // Deep-Merge
  config.setDataDeepMerge(true)

  // Base Config
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data'
    },
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}
