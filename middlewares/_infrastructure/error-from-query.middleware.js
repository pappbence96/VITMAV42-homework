import { isNil } from 'lodash-es'

/**
 * Checks whether the query params contain an error message.
 * Saves the error message to `res.locals.error`.
 */
export default function () {
  return function (req, res, next) {
    const { errorMessage, errorCode } = req.query

    if (!isNil(errorMessage) && !isNil(errorCode)) {
      res.locals = {
        ...res.locals,
        error: {
          message: errorMessage,
          code: errorCode,
        },
      }
    }

    return next()
  }
}
