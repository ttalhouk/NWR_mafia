const React = require('react')
const Header = require('./Header')
const PlayerCard = require('./PlayerCard')
const axios = require('axios')
const global = require('../public/Global')
// using es6 class
class Details extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      game: {},
      players: []
    }
  }
  componentWillMount () {
    let self = this
    console.log(this.props)
    axios.get(`${global.API_URL}/games/${this.props.params.game_id}`, {responseType: 'json'})
      .then(function (response) {
        self.setState({
          game: response.data.game,
          players: response.data.players
        })
      })
      .catch(function (errors) {
        console.log(errors)
      }
    )
  }

  assignPlayers (players) {
    return players.map((player) => (<PlayerCard {...player} key={player.id} />))
  }
  rendImage (image) {
    if (image) {
      return <img className="game-image" src={image} />
    }
  }
  renderDescription (description) {
    if (description) {
      return description.split('\n').map((line, index) => {
        return (<p key={index}>{line}</p>)
      })
    }
  }
  render () {
    console.log(this.props.params)
    // const { name, description, image, players } = this.assignGame(this.props.params.game_id)
    const { name, description, game_image } = this.state.game
    return (
      <div className="container">
        <Header />
        <div className="game-info">
          <h1 className="game-title">{name}</h1>
          <div className="game-description">
            {this.renderDescription(description)}
          </div>
          {this.rendImage(game_image)}
        </div>
        <h2 className="game-title">
          {name} Players
        </h2>
        <div>
          {this.assignPlayers(this.state.players)}
        </div>
      </div>
    )
  }
}
const { object } = React.PropTypes
Details.propTypes = {
  params: object,
  route: object
}
module.exports = Details
