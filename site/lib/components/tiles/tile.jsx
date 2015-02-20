var React = require('react');

var Tile = React.createClass({
  render: function () {
    var x = this.props.x;
    var y = this.props.y;
    var className = 'gameboard__tile gameboard__tile--' + (this.props.style || 'default') + (this.props.isSelected ? ' gameboard__tile--selected' : '');

    var tileStyle = {
      top: (x + y) * 58,
      left: 'calc(' + ((y - x) * this.props.scalar) + 'px + 50% - 100px)',
      zIndex: x + y
    }

    var assets = [<div className='gameboard__tile__shadow' />];

    return (
      <div className={className} style={tileStyle} data-x-coordinate={x} data-y-coordinate={y}>
        <div className='gameboard__tile__contents' />
        <div className='gameboard__tile__edge' />
      </div>
    );
  }
});

module.exports = Tile;
