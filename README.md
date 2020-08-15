# dotenv-powerfull

*This module allows you to manage your environment settings in a more elegant way.*

## :interrobang: How to use

Perform the installation by running:
```
yarn add dotenv-powerfull
```

> You can use NPM if you prefer.

Import the instruction below at the highest level of your application, that is, at the beginning of the first file to be loaded:
```
require('dotenv-powerfull').loader()
```

> The `loader` method can take as an argument the path to the directory containing the configuration files. Enter the path considering the project's root directory. If no arguments are given, it will consider the `config` directory of the project root.

## :wrench: How it works

This module will expose two global methods: `env` and `config`

- `env`: this method takes two arguments, the first is the name of the variable contained in the `.env` file and the second a default value. Example: `port: env ('APP_PORT', 3000)`.
- `config`: Este método recebe um argumento no formato `file.variable`. Example: `config('app.port')`

### :computer: Example

Assuming you have a `./config/app.js` file with the following content:
```
module.exports = {
  /**
   * Application title
   * @type {string}
   */
  name: env('APP_NAME', 'valor padrao'),

  /**
   * Determines the purpose of the execution environment
   * @type {string}
   */
  env: env('APP_ENV', 'production'),

  /**
   * Base URL
   * @type {string}
   */
  url: env('APP_URL', 'http://localhost'),

  /**
   * Port where the web service will be listening
   * @type {number}
   */
  port: env('PORT', 80),

  /**
   * Application time zone zone, date/time format
   * @type {string}
   */
  timezone: 'America/Sao_Paulo',
}
```

> If the argument passed in the first position exists in the `.env` file, it will be loaded, otherwise the value informed in the second position will be applied as a default.


The form of use is independent of the framework used, however, see this example with Express:

```
require('dotenv-powerfull').loader()

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(config('app.port'), () => {
  console.log(`Server is running on port: ${config('app.port')}`)
})
```

## :memo: Licença

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.
