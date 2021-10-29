/**
 * Create a new equipment or update an existing one using data provided in
 * the POST request body.
 * Redirect to '/gyms/:gymId' equipment listing.
 */

import { isEmpty } from 'lodash-es'
import requireOption from '../require-option.js'

export default function (objectrepository) {
  const EquipmentModel = requireOption(objectrepository, 'EquipmentModel')

  return function (req, res, next) {
    const { gymId } = req.params
    const { barcode, manufacturer, model, description, type, count } = req.body

    if (isEmpty(barcode)) {
      res.locals.error = {
        message: 'Barcode cannot be empty',
        code: 400,
      }
      return next()
    }

    if (isEmpty(manufacturer)) {
      res.locals.error = {
        message: 'Manufacturer cannot be empty',
        code: 400,
      }
      return next()
    }

    if (isEmpty(model)) {
      res.locals.error = {
        message: 'Model cannot be empty',
        code: 400,
      }
      return next()
    }

    if (isEmpty(description)) {
      res.locals.error = {
        message: 'Description cannot be empty',
        code: 400,
      }
      return next()
    }

    if (isEmpty(type)) {
      res.locals.error = {
        message: 'Type cannot be empty',
        code: 400,
      }
      return next()
    }

    if (isEmpty(count)) {
      res.locals.error = {
        message: 'Count cannot be empty',
        code: 400,
      }
      return next()
    }

    if (typeof res.locals.equipment === 'undefined') {
      res.locals.equipment = new EquipmentModel()
    }

    res.locals.equipment.barcode = barcode
    res.locals.equipment.manufacturer = manufacturer
    res.locals.equipment.model = model
    res.locals.equipment.description = description
    res.locals.equipment.type = type
    res.locals.equipment.count = count
    res.locals.equipment._location = gymId

    res.locals.equipment.save((err) => {
      if (err) {
        return next(err)
      }

      return res.redirect(`/gyms/${res.locals.gym._id}/equipment`)
    })
  }
}
