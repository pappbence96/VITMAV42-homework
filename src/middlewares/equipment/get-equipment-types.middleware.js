import requireOption from '../require-option.js'

/**
 * Saves available equipment types to `res.locals.types`.
 */
export default function (objectrepository) {
  const EquipmentType = requireOption(objectrepository, 'EquipmentType')

  return function (req, res, next) {
    res.locals.types = Object.keys(EquipmentType)

    return next()
  }
}
