/**
 * Delete the gym provided in res.locals.gym from the database.
 * Redirect to '/gyms'
 */

import { isNil } from 'lodash-es'

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
