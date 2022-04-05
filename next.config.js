const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'img.huffingtonpost.com', 
      'media.gettyimages.com',
      'thumbs.dreamstime.com',
      'www.ville-senlis.fr',
      'www.idheo.com'
    ],
  },
}
