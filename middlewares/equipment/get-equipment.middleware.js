/**
 * Fetch the equipment specified by the eqipmentId parameter.
 * Save the loaded equipment to res.locals.equipment
 */

import requireOption from '../require-option.js'

export default function (objectrepository) {
  const EquipmentModel = requireOption(objectrepository, 'EquipmentModel')

  return function (req, res, next) {
    const { equipmentId } = req.params

    EquipmentModel.findOne({ _id: equipmentId }, (err, equipment) => {
      if (err || !equipment) {
        res.redirect('/404')
      }

      res.locals.equipment = equipment

      return next()
    })
  }
}
