/**
 * Redirect everything to the 404 page.
 * Use as a last, catch-all middleware.
 */

import { encodeMessageTo404Query } from '../../util/encode-message-to-404-query.function.js'

export default function () {
  return function (_req, res) {
    const message = 'The page you navigated to is not mapped to anything.'

    return res.redirect(encodeMessageTo404Query(message))
  }
}
