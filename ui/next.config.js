module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  reactStrictMode: true,
  async rewrites() {
    return [
        {
          source: '/api/:path',
          destination: 'http://127.0.0.1:8000/api',
        },
      ]
  },
}