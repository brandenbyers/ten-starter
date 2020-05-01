module.exports = function (config) {
  // Plugins

  // Filters

  // Markdown

  // Layouts
  config.addLayoutAlias('base', 'base.njk')
  config.addLayoutAlias('post', 'post.njk')

  // Pass-through files
  config.addPassthroughCopy('admin')
  config.addPassthroughCopy("./src/css");
  config.addPassthroughCopy("./src/images");

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
