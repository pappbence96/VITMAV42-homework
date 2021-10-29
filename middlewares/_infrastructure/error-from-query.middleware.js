/**
 * Check whether the query params contain an error message.
 * Save the error message to locals.error
 */

import { isNil } from 'lodash-es'

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
