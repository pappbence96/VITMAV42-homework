/**
 * Using the template engine, render the values into the template defined by @param viewName
 * @see https://github.com/VITMAV42/mintahazi2019tavasz/blob/master/middleware/renderMW.js
 */
export default function (_, viewName) {
  return function (req, res) {
    res.render(viewName)
  }
}
