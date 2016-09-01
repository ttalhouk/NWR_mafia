const React = require('react')
const { string, number, bool } = React.PropTypes
const PlayerCard = React.createClass({
  checkMafia () {
    if (this.props.mafia) {
      return 'mafia'
    } else {
      return 'townie'
    }
  },
  renderPlayerImage (image) {
    if (image) {
      return image
    } else {
      return 'http://www.wickliffemidgetfootball.com/assets/no-image-available-bbdbbe501d2b08a157a21431bc7b49df2c6cf6d892cc3083114229876cd7d6f4.jpg'
    }
  },
  render () {
    return (
      <div className={`player-card ${this.checkMafia()}`} >
        <div className='player-card-text'>
          <h3 className='player-card-name'>{this.props.name}</h3>
        </div>
        <img src={this.renderPlayerImage(this.props.image)} className='player-card-img' />
      </div>
    )
  },
  propTypes: {
    name: string.isRequired,
    image: string,
    mafia: bool,
    id: number
  }
})

module.exports = PlayerCard
