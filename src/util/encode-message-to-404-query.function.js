/**
 * Generates a 404-page redirect url based on the provided message
 *
 * @param {string} message Error message
 *
 * @example
 * encodeMessageTo404Query('Entity not found.');
 * @returns {string} `'404?errorMessage=Entity%20not%20found.&errorCode=404'`
 */
export const encodeMessageTo404Query = (message) => {
  const errorMessage = encodeURIComponent(message)
  const errorCode = encodeURIComponent(400)

  return `/404?errorMessage=${errorMessage}&errorCode=${errorCode}`
}
