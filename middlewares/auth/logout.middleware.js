/**
 * Terminate the current session for the user and redirect to the landing page
 */

module.exports = function () {
  return function (req, res, next) {
    req.session.destroy(() => {
      res.redirect('/')
    })
  }
}
