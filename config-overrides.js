const rewireMobX = require('react-app-rewire-mobx')

/* config-overrides.js */
module.exports = function override(config, env) {
  if (env === 'production') {
    console.log('⚡ Production build with Preact')
    config.resolve = {
      alias: {
        react: 'preact-compat',
        'react-dom': 'preact-compat',
      },
    }
  }
  config = rewireMobX(config, env)
  return config
}
