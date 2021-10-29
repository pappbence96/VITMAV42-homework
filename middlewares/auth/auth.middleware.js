/**
 * Check whether the user has successfully authenticated.
 * If so, forward the call, otherwise redirect to the landing page.
 */

export default function () {
  return function (req, res, next) {
    const { authenticated } = req.session

    if (authenticated) {
      next()
    } else {
      res.locals.error = {
        message: 'User not authenticated',
        code: 401,
      }
      res.redirect('/')
    }
  }
}
