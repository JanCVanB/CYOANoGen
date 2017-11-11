var ghPages = require('gh-pages')

ghPages.publish(
  'dist',
  {
    message: 'Auto-generated commit'
  },
  function (error) {
    if (error) {
      console.log('Error publishing to GitHub Pages:', error)
    }
  }
)
