export default function () {
  return function (_req, res) {
    res.locals.error = {
      code: 404,
      message: 'Path not mapped.',
    }
    return res.redirect('/gyms')
  }
}
