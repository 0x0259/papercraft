var React = require('react');
var Tile = require('../tiles/tile.jsx');
var App = require('../app.jsx');

var Gameboard = React.createClass({
  getInitialState: function getInitialState() {
    var stylesGrid = [];
    for (var index = 0; index < 7; index++) {
      stylesGrid[index] = [];
    }

    return {
      shouldShowGrid: false,
      currentPaintStyle: 'sand',
      stylesGrid: stylesGrid
    }
  },
  toggleGrid: function toggleGrid() {
    this.setState({ shouldShowGrid: !this.state.shouldShowGrid });
  },
  setTileStyle: function setTileStyle(x, y) {
    var stylesGrid = this.state.stylesGrid;
    stylesGrid[x][y] = this.state.currentPaintStyle;

    this.setState({ stylesGrid: stylesGrid });
  },
  setPaintStyle: function setPaintStyle(style) {
    this.setState({ currentPaintStyle: style });
  },
  renderBoard: function renderBoard(x, y) {
    var self = this,
      board = [];

    for (var xIndex = 0; xIndex < x; xIndex++) {
      for (var yIndex = 0; yIndex < y; yIndex++) {
        board.push(<Tile key={xIndex + ',' + yIndex} x={xIndex} y={yIndex} style={this.state.stylesGrid[xIndex][yIndex]} handleChangeStyle={self.setTileStyle} />);
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
