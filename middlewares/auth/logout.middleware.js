/**
 * Terminate the current session for the user and redirect to the landing page
 */

export default function () {
  return function (req, res, next) {
    req.session.destroy(() => {
      res.redirect('/')
    })
  }
}
