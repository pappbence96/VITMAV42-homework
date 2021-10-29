/**
 * Load a dependency from an object repository
 * @param objectRepository object repository
 * @param propertyName dependency name
 * @returns {*}
 * @see https://github.com/VITMAV42/mintahazi2019tavasz/blob/master/middleware/requireOption.js
 */

function requireOption(objectRepository, propertyName) {
  if (objectRepository && objectRepository[propertyName]) {
    return objectRepository[propertyName]
  }
  throw new TypeError(`${propertyName} required`)
}

export default requireOption
