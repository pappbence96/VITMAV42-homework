/**
 * Intercepts and logs each request as "<TIME> - <METHOD> <URL>"
 */
import colors from 'colors'
import { isNil } from 'lodash-es'

const colorMethod = (method) => {
  switch (method) {
    case 'GET':
      return colors.blue(method)
    case 'POST':
      return colors.green(method)
    case 'DELETE':
      return colors.red(method)
    default:
      return method
  }
}

const colorStatusCode = (statusCode) => {
  if (statusCode >= 200 && statusCode < 300) {
    return colors.green(statusCode)
  } else if (statusCode >= 300 && statusCode < 400) {
    return colors.yellow(statusCode)
  } else if (statusCode >= 400 && statusCode < 500) {
    return colors.red(statusCode)
  } else {
    return statusCode
  }
}

const logMessage = (message) => {
  const date = new Date().toLocaleTimeString()
  console.log(`${date} - ${message}`)
}

export default function () {
  return function (req, res, next) {
    const { originalUrl, method } = req

    let message = `requested ${colorMethod(method)} ${originalUrl}`
    logMessage(message)

    next()

    const { statusCode } = res
    const { error } = res.locals

    if (isNil(error)) {
      message = `${colorStatusCode(statusCode)} Succesfully handled`
    } else {
      message = `${colorStatusCode(error.code)} ERROR: ${error.message}`
    }
    logMessage(message)
  }
}
