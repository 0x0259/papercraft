var React = require('react');
var Tile = require('../tiles/tile.jsx');
var App = require('../app.jsx');

var Gameboard = React.createClass({
  getInitialState: function getInitialState() {
    return {
      shouldShowGrid: false
    }
  },
  toggleGrid: function toggleGrid() {
    this.setState({ shouldShowGrid: !this.state.shouldShowGrid });
  },
  renderBoard: function renderBoard(x, y) {
    var board = [];

    for (var xIndex = 0; xIndex < x; xIndex++) {
      for (var yIndex = 0; yIndex < y; yIndex++) {
        board.push(<Tile key={xIndex + ',' + yIndex} x={xIndex} y={yIndex} scalar={this.props.tileScalar || 100} style='' />);
      }
    }

    return board;
  },
  render: function () {
    var gameboardClassName = 'gameboard' + ((this.state.shouldShowGrid) ? ' gameboard--grid' : '');

    return (
      <App>
        <div className='grid-background' />
        <div className={gameboardClassName} id='gameboard'>
          {this.renderBoard(7, 7)}
        </div>
        <div className='gameboard-options'>
          <button onClick={this.toggleGrid}>Toggle Grid</button>
        </div>
      </App>
    );
  }
});

module.exports = Gameboard;
