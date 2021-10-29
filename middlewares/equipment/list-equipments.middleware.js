import requireOption from '../require-option.js'

/**
 * Fetches the list of equipments for the gym specified by the `gymId` parameter.
 * Saves the loaded list to `res.locals.equipments`.
 */
export default function (objectrepository) {
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
