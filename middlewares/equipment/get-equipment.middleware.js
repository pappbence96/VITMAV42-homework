/**
 * Fetch the equipment specified by the eqipmentId parameter.
 * Save the loaded equipment to res.locals.equipment
 */

import { encodeMessageTo404Query } from '../../util/encode-message-to-404-query.function.js'
import requireOption from '../require-option.js'

export default function (objectrepository) {
  const EquipmentModel = requireOption(objectrepository, 'EquipmentModel')

  return function (req, res, next) {
    const { equipmentId } = req.params

    EquipmentModel.findOne({ _id: equipmentId }, (err, equipment) => {
      if (err || !equipment) {
        const message = 'This equipment does not exist.'
        return res.redirect(encodeMessageTo404Query(message))
      }

      res.locals.equipment = equipment

      return next()
    })
  }
}
