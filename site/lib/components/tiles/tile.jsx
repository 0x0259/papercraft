var React = require('react');

var Tile = React.createClass({
  render: function () {
    var x = this.props.x;
    var y = this.props.y;
    var className = 'gameboard__tile gameboard__tile--' + (this.props.color || 'default') + (this.props.isHovered ? ' gameboard__tile--hover' : '') + (this.props.isSelected ? ' gameboard__tile--selected' : '');

    var tileStyle = {
      top: (x + y) * (this.props.scalar / 2),
      left: 'calc(' + ((y - x) * this.props.scalar - 150) + 'px + 50%)',
      zIndex: x + y
    }

    return (
      <div className={className} style={tileStyle} data-x-coordinate={x} data-y-coordinate={y}>
        <div className='gameboard__tile__shadow' />
      </div>
    );
  }
});

module.exports = Tile;
