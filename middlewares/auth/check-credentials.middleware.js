import config from '../../config/config.js'

const validateCredentials = ({ username, password }) => {
  const { admin } = config
  return username === admin.username && password === admin.password
}

/**
 * Checks whether the user provided the correct credentials.
 * If so, creates a session for the user and redirects to `'/gyms'`.
 * Otherwise generates an error message.
 */
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
