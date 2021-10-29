const express = require('express')
const colors = require('colors')
const session = require('express-session')
const methodOverride = require('method-override')

const app = express()
const port = 8080

app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('static'))

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  })
)

const requestLoggingMiddleware = require('./middlewares/logging/request-logging.middleware')
app.use(requestLoggingMiddleware())

require('./route/index')(app)

app.use('*', function (req, res) {
  res.locals.error = {
    code: 404,
    message: 'Path not mapped.',
  }
  return res.redirect('/gyms')
})

app.listen(port, () => {
  const msg = `Chadministrator listening at http://localhost:${port}`
  console.log(colors.green(msg))
})
