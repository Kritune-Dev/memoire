const path = require('path')
const authorizedDomains = require('./data/domains_authorised.json')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: authorizedDomains.domains,
  },
}
