const React = require('react')
const Header = require('./Header')
const PlayerCard = require('./PlayerCard')
// using es6 class
class Details extends React.Component {

  assignGame (id) {
    console.log(this.props.route.games)
    console.log(id)
    const gameArray = this.props.route.games.filter((game) => String(game.id) === id)
    return gameArray[0]
  }
  assignPlayers (players) {
    console.log('passed in players ', players)
    console.log('props players ', this.props.route.players)
    return this.props.route.players.filter((player) => players.indexOf(player.id) >= 0)
    .map((player) => (<PlayerCard {...player} key={player.id} />)
    )
  }
  rendImage (image) {
    if (image) {
      return <img className="game-image" src={image} />
    }
  }
  render () {
    console.log(this.props.params)
    const { name, description, image, players } = this.assignGame(this.props.params.game_id)
    return (
      <div className="container">
        <Header />
        <div className="game-info">
          <h1 className="game-title">{name}</h1>
          <p className="game-description">{description}</p>
          {this.rendImage(image)}

        </div>
        <div className="player-container">
          {this.assignPlayers(players)}
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
