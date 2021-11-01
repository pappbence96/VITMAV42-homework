import { isNil } from 'lodash-es'
import requireOption from '../require-option.js'

/**
 * Deletes the gym provided in `res.locals.gym` from the database.
 * Redirects to `'/gyms'`.
 */
export default function (objectrepository) {
  const EquipmentModel = requireOption(objectrepository, 'EquipmentModel')

  return function (req, res, next) {
    const { gym } = res.locals

    if (isNil(gym)) {
      return next()
    }

    res.locals.gym.remove((err) => {
      if (err) {
        return next(err)
      }

      EquipmentModel.deleteMany({ _location: res.locals.gym._id })
        .then(() => {
          req.method = 'GET'
          return res.redirect('/gyms')
        })
        .catch((err) => {
          return next(err)
        })
    })
  }
}
