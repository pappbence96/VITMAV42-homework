import requireOption from '../require-option.js'

/**
 * Fetches the list of gyms from the database.
 * Stores results in `res.locals.gyms`.
 */
export default function (objectrepository) {
  const GymModel = requireOption(objectrepository, 'GymModel')

  return function (req, res, next) {
    GymModel.aggregate([
      {
        $lookup: {
          from: 'equipment',
          localField: '_id',
          foreignField: '_location',
          as: 'equipmentCount',
        },
      },
      {
        $addFields: {
          equipmentCount: {
            $size: '$equipmentCount',
          },
        },
      },
    ])
      .then((gyms) => {
        res.locals.gyms = gyms
        return next()
      })
      .catch((err) => {
        return next(err)
      })
  }
}
