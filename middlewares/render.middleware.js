/**
 * Using the template engine render the values into the template
 * @see https://github.com/VITMAV42/mintahazi2019tavasz/blob/master/middleware/renderMW.js
 */

module.exports = function (_, viewName) {
  return function (req, res) {
    res.render(viewName)
    // res.setHeader('Content-Type', 'application/json')
    // res.end(JSON.stringify({ viewName: viewName, ...res.locals }))
  }
}
