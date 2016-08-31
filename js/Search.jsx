const React = require('react')
const GameCard = require('./GameCard')
const Header = require('./Header')
// data

// being passed as props.route from ClientApp

// convert from stateless
// const Search = () => (
//   <div className='container'>
//     <header className="header">
//       <h1 className="brand">Video App</h1>
//       <input type="text" className="search-input" placeholder="Search" />
//     </header>
//     <div className='games'>
//       {data.games.map((game) => (
//         <GameCard {...game} key={game.id} />
//       ))}
//     </div>
//   </div>
// )

// ES6 Syntax for State Components
// class Search extends React.Component {

const { object, string } = React.PropTypes
const Search = React.createClass({
  getInitialState () {
    console.log('params =')
    console.log(this.props.params)
    return {
      searchTerm: this.props.params.query || ''
    }
  },
  handleSearchTermChange (searchTerm) {
    this.setState({searchTerm: searchTerm})
  },
  propTypes: {
    searchTerm: string,
    route: object,
    params: object
  },
  render () {
    let games = this.props.route.games

    return (
      <div className='container'>
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          SearchTerm={this.state.searchTerm}
          gameSearch />
        <div className='games'>
          {games
            .filter((game) => `${game.name} ${game.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((game) => (<GameCard {...game} key={game.id} />)
            )
          }
        </div>
      </div>
    )
  }
})

module.exports = Search
