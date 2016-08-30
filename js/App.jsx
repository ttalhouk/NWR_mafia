const React = require('react')
const ReactRouter = require('react-router')
const Router = ReactRouter.Router
const ReactDOM = require('react-dom')
const routes = require('./routes')
const hashHistory = ReactRouter.hashHistory
const Layout = require('./Layout')

ReactDOM.render(
  <Router history={hashHistory} component={Layout}>
    {routes}
  </Router>,
   document.getElementById('app')
 )
