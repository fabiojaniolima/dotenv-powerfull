require('dotenv').config()

const fs = require('fs')
const path = require('path')

function loader(configPath) {
  global.env = function env(param, defaultValue) {
    return process.env[param.toUpperCase()] || defaultValue
  }

  const rootPath = path.resolve(process.cwd(), configPath || 'config')

  global.config = function config(param) {
    const [file, key] = param.split('.')

    const pathFile = path.join(rootPath, file + '.js')

    if (fs.existsSync(pathFile)) {
      const config = require(pathFile)

      return config[key]
    }
  }
}

module.exports.loader = loader
