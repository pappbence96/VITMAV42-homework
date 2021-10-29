import { isNil } from 'lodash-es'

/**
 * Deletes the gym provided in `res.locals.gym` from the database.
 * Redirects to `'/gyms'`.
 */
export default function () {
  return function (req, res, next) {
    const { gym } = res.locals

    if (isNil(gym)) {
      return next()
    }

    res.locals.gym.remove((err) => {
      if (err) {
        return next(err)
      }

      req.method = 'GET'
      return res.redirect('/gyms')
    })
  }
}
