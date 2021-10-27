const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// Create express instance
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('tiny'))

// Require API routes
const users = require('./routes/users')
const test = require('./routes/test')

// Import API Routes
app.use(users)
app.use(test)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
