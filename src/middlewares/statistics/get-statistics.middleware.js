import { difference, uniq } from 'lodash-es'
import requireOption from '../require-option.js'

const toModelWithType = ({ _id, count }) => {
  return { type: _id, count }
}

export default function (objectrepository) {
  const EquipmentType = requireOption(objectrepository, 'EquipmentType')
  const EquipmentModel = requireOption(objectrepository, 'EquipmentModel')

  return function (req, res, next) {
    EquipmentModel.aggregate([
      {
        $group: {
          _id: '$type',
          count: {
            $sum: '$count',
          },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
    ]).then((equipmentPerType) => {
      equipmentPerType = equipmentPerType.map(toModelWithType)

      // Add every type that is not present in the result with a count of 0
      // Could probably be done by the query above but I don't yet know how
      const availableTypes = Object.keys(EquipmentType)
      const presentTypes = uniq(equipmentPerType.map(({ type }) => type))
      const typesToAdd = difference(availableTypes, presentTypes)

      for (const type of typesToAdd) {
        equipmentPerType.push({ type, count: 0 })
      }

      // Serialize results as JSON based on this answer
      // https://stackoverflow.com/questions/55247832/how-to-pass-a-2d-array-from-javascript-to-script-tag-in-ejs
      res.locals.equipmentPerType = JSON.stringify(equipmentPerType)

      next()
    })
  }
}
