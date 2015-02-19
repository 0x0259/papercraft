var React = require('react');
var Tile = require('../tiles/tile.jsx');
var App = require('../app.jsx');

var Gameboard = React.createClass({
  getInitialState: function getInitialState() {
    return {
      hoverTile: [null, null],
      selectedTile: [null, null]
    }
  },
  calculateBoardTile: function getBoardLocation(xOffset, yOffset, xCoord, yCoord) {
    var pointA = [0,0];
    var pointB = [-100,50];
    var currentX = -1;
    var currentY = -1;

    while (true) {
      if (Math.sign((pointB[0]-pointA[0])*(yCoord-pointA[1]) - (pointB[1]-pointA[1])*(xCoord-pointA[0])) === -1) {
        pointA[0] = pointA[0] + 100;
        pointA[1] = pointA[1] + 50;
        pointB[0] = pointB[0] + 100;
        pointB[1] = pointB[1] + 50;
        currentY++;
      } else {
        break;
      }
    }

    pointA = [0,0];
    pointB = [100,50];

    while (true) {
      if (Math.sign((pointB[0]-pointA[0])*(yCoord-pointA[1]) - (pointB[1]-pointA[1])*(xCoord-pointA[0])) === 1) {
        pointA[0] = pointA[0] - 100;
        pointA[1] = pointA[1] + 50;
        pointB[0] = pointB[0] - 100;
        pointB[1] = pointB[1] + 50;
        currentX++;
      } else {
        break;
      }
    }

    return [currentX, currentY];
  },
  setHoverTile: function setHoverTile(event) {
    if (event.target.className.indexOf('gameboard__tile') !== -1) {
      var xOffset = document.getElementById('gameboard').offsetWidth - (document.getElementById('gameboard').offsetWidth - 100) / 2 - 50;
      var yOffset = document.getElementById('gameboard').offsetHeight / 10 - 10;
      var xCoord = (event.clientX - xOffset);
      var yCoord = (event.clientY - yOffset);

      var hoverTile = this.calculateBoardTile(xOffset, yOffset, xCoord, yCoord);

      this.setState({ hoverTile: hoverTile });
    }
  },
  setSelectedTile: function setSelectedTile(event) {
    if (event.target.className.indexOf('gameboard__tile') !== -1) {
      var xOffset = document.getElementById('gameboard').offsetWidth - (document.getElementById('gameboard').offsetWidth - 100) / 2 - 50;
      var yOffset = document.getElementById('gameboard').offsetHeight / 10 - 10;
      var xCoord = (event.clientX - xOffset);
      var yCoord = (event.clientY - yOffset);

      var selectedTile = this.calculateBoardTile(xOffset, yOffset, xCoord, yCoord);

      this.setState({ selectedTile: selectedTile });
    }
  },
  clearHoverTile: function clearHoverTile() {
    this.setState({ hoverTile: [null, null] });
  },
  clearSelectedTile: function clearSelectedTile() {
    this.setState({ selectedTile: [null, null] });
  },
  renderBoard: function renderBoard(x, y) {
    var board = [];

    for (var xIndex = 0; xIndex < x; xIndex++) {
      for (var yIndex = 0; yIndex < y; yIndex++) {
        var isHovered = this.state.hoverTile[0] === xIndex && this.state.hoverTile[1] === yIndex;
        var isSelected = this.state.selectedTile[0] === xIndex && this.state.selectedTile[1] === yIndex;
        board.push(<Tile key={xIndex + ',' + yIndex} x={xIndex} y={yIndex} scalar={this.props.tileScalar || 100} isHovered={isHovered} isSelected={isSelected} />);
      }
    }

    return board;
  },
  render: function () {
    var self = this;

    return (
      <App>
        <div className='grid-background' />
        <div className='gameboard' id='gameboard' onMouseMove={self.setHoverTile} onMouseOut={self.clearHoverTile} onClick={self.setSelectedTile}>
          {self.renderBoard(8, 8)}
        </div>
      </App>
    );
  }
});

module.exports = Gameboard;
