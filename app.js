import express from 'express'
import colors from 'colors'
import session from 'express-session'
import methodOverride from 'method-override'
import requestLoggingMiddleware from './middlewares/_infrastructure/request-logging.middleware.js'
import useRouting from './route/index.js'
import MongoStore from 'connect-mongo'
import config from './config/config.js'
import unmappedPathMiddleware from './middlewares/_infrastructure/unmapped-path.middleware.js'

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

app.use('*', unmappedPathMiddleware())

app.listen(port, () => {
  const msg = `Chadministrator listening at http://localhost:${port}`
  console.log(colors.green(msg))
})
