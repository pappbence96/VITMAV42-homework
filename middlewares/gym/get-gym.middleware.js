/**
 * Fetch the gym specified by the gymId parameter.
 * Save the loaded gym to res.locals.gym
 */

import { encodeMessageTo404Query } from '../../util/encode-message-to-404-query.function.js'
import requireOption from '../require-option.js'

export default function (objectrepository) {
  const GymModel = requireOption(objectrepository, 'GymModel')

  return function (req, res, next) {
    // eslint-disable-next-line no-unused-vars
    const { gymId } = req.params

    GymModel.findOne({ _id: gymId }, (err, gym) => {
      if (err || !gym) {
        const message = 'This gym does not exist.'
        return res.redirect(encodeMessageTo404Query(message))
      }

      res.locals.gym = gym

      return next()
    })
  }
}
