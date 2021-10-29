/**
 * Check whether the user provided the correct credentials.
 * If so, create a session for the user and redirect to '/gyms'.
 * Otherwise generate an error message and pass it forward.
 */

export default function () {
  return function (req, res, next) {
    const { username, password } = req.body

    // TODO: store the creds in a safe, non-public way
    const credentialsValid = username === 'admin' && password === 'admin'

    if (credentialsValid) {
      req.session.authenticated = true
      return req.session.save(() => res.redirect('/gyms'))
    } else {
      res.locals.error = {
        message: 'Invalid credentials',
        code: 401,
      }
      next()
    }
  }
}
