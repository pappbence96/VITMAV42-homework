/**
 * Redirect everything to the 404 page.
 * Use as a last, catch-all middleware.
 */

export default function () {
  return function (_req, res) {
    res.locals.error = {
      code: 404,
      message: 'Path not mapped.',
    }
    return res.redirect('/404')
  }
}
