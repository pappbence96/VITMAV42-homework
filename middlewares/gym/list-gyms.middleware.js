import requireOption from '../require-option.js'

/**
 * Fetches the list of gyms from the database.
 * Stores results in `res.locals.gyms`.
 */
export default function (objectrepository) {
  const GymModel = requireOption(objectrepository, 'GymModel')

  return function (req, res, next) {
    GymModel.find({}, (err, gyms) => {
      if (err) {
        return next(err)
      }

      res.locals.gyms = gyms
      return next()
    })
  }
}
