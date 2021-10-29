/**
 * Check whether the user provided the correct credentials.
 * If so, create a session for the user and redirect to '/gyms'.
 * Otherwise generate an error message and pass it forward.
 */

import config from '../../config/config.js'

const validateCredentials = ({ username, password }) => {
  const { admin } = config
  return username === admin.username && password === admin.password
}

export default function () {
  return function (req, res, next) {
    const credentialsValid = validateCredentials(req.body)

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
