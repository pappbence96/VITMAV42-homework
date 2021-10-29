import express from 'express'
import colors from 'colors'
import session from 'express-session'
import methodOverride from 'method-override'
import requestLoggingMiddleware from './middlewares/logging/request-logging.middleware.js'
import useRouting from './route/index.js'
import MongoStore from 'connect-mongo'
import config from './config/config.js'

const app = express()
const port = config.app.port

app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
  session({
    ...config.session,
    store: MongoStore.create({ mongoUrl: config.db.host }),
  })
)

app.use(requestLoggingMiddleware())

useRouting(app)

app.use('*', function (_req, res) {
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
