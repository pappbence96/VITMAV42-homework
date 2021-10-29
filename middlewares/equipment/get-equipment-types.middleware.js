/**
 * Save available equipment types to res.locals.types
 */

const requireOption = require('../require-option')

module.exports = function (objectrepository) {
  const EquipmentType = requireOption(objectrepository, 'EquipmentType')

  return function (req, res, next) {
    res.locals.types = Object.keys(EquipmentType)

    return next()
  }
}
