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
	
	async redirects() {
    return [
      {
        source: '/0',
        destination: 'https://framaforms.org/la-recuperation-du-sportif-1651152805',
        permanent: true
      },
      {
        source: '/16',
        destination: 'https://framaforms.org/complementarite-kine-osteopathe-et-prothese-de-hanche-1640434779',
        permanent: true
      }
    ];
  }
}
