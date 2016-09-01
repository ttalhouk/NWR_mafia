const React = require('react')
const ReactRouter = require('react-router')
const Route = ReactRouter.Route
const IndexRoute = ReactRouter.IndexRoute

// Components
const Layout = require('./Layout')
const Landing = require('./Landing')
const Details = require('./Details')
const Search = require('./Search')

// Data
const data = require('../public/data')

module.exports = (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path="/search(/:query)" component={Search} games={data.games} players={data.players} />
    <Route path='/details/:game_id' component={Details} games={data.games} players={data.players} />
  </Route>
)
