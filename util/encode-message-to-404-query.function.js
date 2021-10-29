export const encodeMessageTo404Query = (message) => {
  const errorMessage = encodeURIComponent(message)
  const errorCode = encodeURIComponent(400)

  return `/404?errorMessage=${errorMessage}&errorCode=${errorCode}`
}
