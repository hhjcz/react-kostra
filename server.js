/** Created by hhj on 8/18/16. */
require('babel-register')({})
const express = require('express')
const path = require('path')

require('./loadEnv')()

// e.g. heroku.com sets env.PORT
const PORT = process.env.PORT || 8080
const isDevelopment = process.env.NODE_ENV !== 'production'

const app = express()

if (isDevelopment) {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const makeWebpackConfig = require('./makeWebpackConfig')

  const compiler = webpack(makeWebpackConfig({ isDevelopment }))
  app.use(webpackDevMiddleware(compiler, { noInfo: true, colors: true }));
  app.use(webpackHotMiddleware(compiler));
}

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', express.static(path.join(__dirname, 'dist')))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
