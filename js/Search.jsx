const React = require('react')
const GameCard = require('./GameCard')
const Header = require('./Header')
// data
const axios = require('axios')
const global = require('../public/Global')

const { object, string } = React.PropTypes
const Search = React.createClass({
  getInitialState () {
    // console.log('params =')
    // console.log(this.props.params)
    return {
      searchTerm: this.props.params.query || '',
      games: [],
      players: []
    }
  },
  componentWillMount () {
    let self = this
    axios.get(`${global.API_URL}/games`, {responseType: 'json'})
      .then(function (response) {
        self.setState({games: response.data.games})
      })
      .catch(function (errors) {
        console.log(errors)
      })
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
    console.log(this.state)
    let games = this.state.games

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
