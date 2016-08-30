const React = require('react')
const { Link } = require('react-router')
const { func, bool, string } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    setSearchTerm: func,
    searchTerm: string,
    gameSearch: bool
  },
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  },
  render () {
    let utilSpace
    if (this.props.gameSearch) {
      utilSpace = <input value={this.props.searchTerm} type="text" className="search-input" placeholder="Search" onChange={this.handleSearchTermEvent} />
    } else {
      utilSpace = (
        <h2 className="header-back">
          <Link to="/search">
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header className="header">
        <h1 className="brand">
          <Link to='/' className="brand-link">
          NWR Mafia
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})

module.exports = Header
