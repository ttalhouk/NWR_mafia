const React = require('react')
const { string, integer, bool } = React.PropTypes
const PlayerCard = React.createClass({
  checkMafia () {
    if (this.props.mafia) {
      return 'mafia'
    } else {
      return 'townie'
    }
  },
  render () {
    return (
      <div className={`player-card ${this.checkMafia()}`} >
        <img src={`${this.props.image}`} className='player-card-img' />
        <div className='player-card-text'>
          <h3 className='player-card-name'>{this.props.name}</h3>
        </div>
      </div>
    )
  },
  propTypes: {
    name: string.isRequired,
    image: string,
    mafia: bool,
    id: integer
  }
})

module.exports = PlayerCard
