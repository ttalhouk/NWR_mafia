const React = require('react')
const { browserHistory } = require('react-router')
const {Link} = require('react-router')

// implicit return using ( ) instead of { return (...)}
// note can have local variables using this syntax

// Update landing page to use redux to store state
// -------- Original code (Stateless)------------------
// const Landing = () => (
//   <div className="home-info">
//     <h1 className="title">Video App</h1>
//     <input className="search" type='text' placeholder='Search' />
//     <Link to='/search' className='browse-all' >or Browse All</Link>
//   </div>
// )

// Stateful component
class Landing extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
  }
  goToSearch (event) {
    browserHistory.push('search')
    event.preventDefault()
  }
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }
  render () {
    return (
      <div className="home-info">
        <h1 className="title">Video App</h1>
        <form onSubmit={this.goToSearch}>
          <input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className="search" type='text' placeholder='Search' />
        </form>
        <Link to='/search' className='browse-all' >or Browse All</Link>
      </div>
    )
  }
}

const { func, string } = React.PropTypes

Landing.propTypes = {
  setSearchTerm: func,
  searchTerm: string
}

module.exports = connector(Landing)
