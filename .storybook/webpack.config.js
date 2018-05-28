const path = require('path')
const paths = require('react-scripts-ts/config/paths')

const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    use: [
      require.resolve('ts-loader'),
      require.resolve('react-docgen-typescript-loader')
    ]
  })

  config.resolve.plugins = [
    new TSConfigPathsPlugin({
      configFile: paths.appTsConfig
    })
  ]

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
