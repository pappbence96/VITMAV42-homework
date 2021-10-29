/**
 * Fetch the list of gyms from the database.
 * Store results in res.locals.gyms
 */

const requireOption = require('../require-option')

module.exports = function (objectrepository) {
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
