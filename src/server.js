const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./app/4. Frameworks/webApi/routes')
const projectDependencies = require('./app/4. Frameworks/dependencies')
const ErrorHandler = require('./app/4. Frameworks/common/ErrorHandler')

const app = express()
const port = process.env.PORT || 3000

projectDependencies.DatabaseService.connect().then(() => {

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cors())

  app.use('/api', routes(projectDependencies))

  app.use(ErrorHandler)

  app.listen(port, () => console.log(`Running on http://localhost:${port}`));

}, err => console.log(`db is not ready, err: ${err}`))