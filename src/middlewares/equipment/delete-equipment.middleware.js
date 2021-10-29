import { isNil } from 'lodash-es'

/**
 * Deletes the equipment provided in res.locals.equipment from the database.
 * Redirects to `'/gyms/:gymId'` equipment listing.
 */
export default function () {
  return function (req, res, next) {
    const { gymId } = req.params
    const { equipment } = res.locals

    if (isNil(equipment)) {
      return next()
    }

    res.locals.equipment.remove((err) => {
      if (err) {
        return next(err)
      }

      req.method = 'GET'
      return res.redirect(`/gyms/${gymId}/equipment`)
    })
  }
}
