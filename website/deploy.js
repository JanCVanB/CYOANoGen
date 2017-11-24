var ghPages = require('gh-pages')

var ghPagesUrl = 'https://jancvanb.github.io/CYOANoGen'

ghPages.publish(
  'dist',
  {
    message: `:rocket: Deploy website to ${ghPagesUrl} (auto-generated commit)`
  },
  function (error) {
    if (error) {
      console.log(
        `Error deploying website to ${ghPagesUrl}`,
        error
      )
    }
  }
)
