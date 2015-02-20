var React = require('react');

var Tile = React.createClass({
  handleChangeStyle: function handleChangeStyle() {
    this.props.handleChangeStyle(this.props.x, this.props.y);
  },
  render: function () {
    var className = 'gameboard__tile gameboard__tile--' + this.props.style;

    var tileStyle = {
      top: (this.props.x + this.props.y) * 58,
      left: 'calc(' + (this.props.y - this.props.x - 1) * 100 + 'px + 50%)',
      zIndex: this.props.x + this.props.y
    }

    var assets = [<div className='gameboard__tile__shadow' />];

    return (
      <div className={className} style={tileStyle}>
        <div className='gameboard__tile__contents' onClick={this.handleChangeStyle} />
        <div className='gameboard__tile__edge' />
      </div>
    );
  }
});

module.exports = Tile;
