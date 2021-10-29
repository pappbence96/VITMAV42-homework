/**
 * Terminates the current session for the user and redirects to the landing page.
 */
export default function () {
  return function (req, res, _next) {
    req.session.destroy(() => {
      res.redirect('/')
    })
  }
}
