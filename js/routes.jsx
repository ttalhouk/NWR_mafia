const React = require('react')
const ReactRouter = require('react-router')
const Route = ReactRouter.Route
const IndexRoute = ReactRouter.IndexRoute

// Components
const Main = require('./Main')
const Games = require('./Games')
const Details = require('./Details')

module.exports = (
  <Route path='/' component={Main}>
    <IndexRoute component={Games} />
    <Route path='games/:id' component={Details} />
  </Route>
)
