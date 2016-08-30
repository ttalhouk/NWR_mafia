const React = require('react')
const Header = require('./Header')

// using es6 class
class Details extends React.Component {

  assignGame (id) {
    console.log(this.props.route.games)
    console.log(id)
    const gameArray = this.props.route.games.filter((game) => String(game.id) === id)
    return gameArray[0]
  }
  render () {
    console.log(this.props.params)
    const { name, description } = this.assignGame(this.props.params.game_id)
    return (
      <div className="container">
        <Header />
        <div className="game-info">
          <h1 className="game-title">{name}</h1>
          <p className="game-description">{description}</p>
        </div>
        <div className="game-container">

        </div>
      </div>
    )
  }
}
const { arrayOf, object } = React.PropTypes
Details.propTypes = {
  params: object,
  route: object,
  games: arrayOf(object).isRequired
}
module.exports = Details
