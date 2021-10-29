/**
 * Fetch the list of equipments for the gym specified
 * by the gymId parameter.
 * Save the loaded list to res.locals.equipments
 */

const requireOption = require('../require-option')

module.exports = function (objectrepository) {
  const EquipmentModel = requireOption(objectrepository, 'EquipmentModel')

  return function (req, res, next) {
    const { gymId } = req.params

    EquipmentModel.find({ _location: gymId }, (err, equipments) => {
      if (err) {
        return next(err)
      }

      res.locals.equipments = equipments
      return next()
    })
  }
}
