const React = require('react')
const { Link } = require('react-router')
const { func, bool, string } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    handleSearchTermChange: func,
    searchTerm: string,
    gameSearch: bool
  },
  handleSearchTermEvent (event) {
    this.props.handleSearchTermChange(event.target.value)
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
      <div className="row">
        <header className="header">
          <h1 className="brand">
            <Link to='/' className="brand-link">
            NWR Mafia Database
            </Link>
          </h1>
          {utilSpace}
        </header>
      </div>
    )
  }
})

module.exports = Header
