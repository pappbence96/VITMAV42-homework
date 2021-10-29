/**
 * Create a new gym or update an existing one using data provided in
 * the POST request body.
 * Redirect to '/gyms' listing.*/

import { isEmpty } from 'lodash-es'
import requireOption from '../require-option.js'

export default function (objectrepository) {
  const GymModel = requireOption(objectrepository, 'GymModel')

  return function (req, res, next) {
    const { name, address } = req.body

    if (isEmpty(name)) {
      res.locals.error = {
        message: 'Name cannot be empty',
        code: 400,
      }
      return next()
    }

    if (isEmpty(address)) {
      res.locals.error = {
        message: 'Address cannot be empty',
        code: 400,
      }
      return next()
    }

    if (typeof res.locals.gym === 'undefined') {
      res.locals.gym = new GymModel()
    }

    res.locals.gym.name = name
    res.locals.gym.address = address

    res.locals.gym.save((err) => {
      if (err) {
        return next(err)
      }

      return res.redirect(`/gyms/${res.locals.gym._id}/equipment`)
    })
  }
}
