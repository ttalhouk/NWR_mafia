const React = require('react')
const { hashHistory } = require('react-router')
const {Link} = require('react-router')

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      setSearchTerm: ''
    }
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
  }
  goToSearch (event) {
    hashHistory.push('search/' + this.state.setSearchTerm)
    event.preventDefault()
  }
  handleSearchTermEvent (event) {
    this.setState({setSearchTerm: event.target.value})
  }
  render () {
    return (
      <div className="home-info col-xs-10 col-md-6 col-xs-offset-1 col-md-offset-3">
        <h1 className="display-4 title">NWR Mafia Database</h1>
        <form className="form-group" onSubmit={this.goToSearch}>
          <label htmlFor="searchInput"></label>
          <input value={this.state.setSearchTerm} onChange={this.handleSearchTermEvent} className="search" type='text' placeholder='Search' />
        </form>
        <Link to='/search' className='browse-all btn btn-primary' >or Browse All</Link>
      </div>
    )
  }
}

const { func, string } = React.PropTypes

Landing.propTypes = {
  setSearchTerm: func,
  searchTerm: string
}

module.exports = Landing
