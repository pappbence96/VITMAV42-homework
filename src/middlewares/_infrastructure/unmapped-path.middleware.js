import { encodeMessageTo404Query } from '../../util/encode-message-to-404-query.function.js'

/**
 * Redirects everything to the 404 page.
 * Used as a last, catch-all middleware.
 */
export default function () {
  return function (_req, res) {
    const message = 'The page you navigated to is not mapped to anything.'

    return res.redirect(encodeMessageTo404Query(message))
  }
}
