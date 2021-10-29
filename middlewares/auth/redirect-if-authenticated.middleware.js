/**
 * Redirects from `'/'` to `'/gyms'` if the user is already authenticated.
 */
export default function () {
  return function (req, res, next) {
    const { authenticated } = req.session

    if (authenticated) {
      res.redirect('/gyms')
    } else {
      next()
    }
  }
}
