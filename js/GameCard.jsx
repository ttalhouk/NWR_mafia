const React = require('react')
const {Link} = require('react-router')

const GameCard = (props) => (
  <Link to={`/details/${props.id}`}>
    <div className='game-card'>
      <img src={`${props.image}`} className='game-card-img' />
      <div className='game-card-text'>
        <h3 className='game-card-title'>{props.name}</h3>
        <p className='game-card-description'>{props.description}</p>
      </div>
    </div>
  </Link>
)

const { string } = React.PropTypes

GameCard.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  image: string.isRequired
}

module.exports = GameCard
