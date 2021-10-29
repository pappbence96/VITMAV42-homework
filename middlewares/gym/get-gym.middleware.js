/**
 * Fetch the gym specified by the gymId parameter.
 * Save the loaded gym to res.locals.gym
 */

const requireOption = require('../require-option')

module.exports = function (objectrepository) {
  const GymModel = requireOption(objectrepository, 'GymModel')

  return function (req, res, next) {
    // eslint-disable-next-line no-unused-vars
    const { gymId } = req.params

    GymModel.findOne({ _id: gymId }, (err, gym) => {
      if (err || !gym) {
        return next(err)
      }

      res.locals.gym = gym

      return next()
    })
  }
}
