var littlest = require('littlest-isomorph');
var React = require('react');
var App = require('../app.jsx');

var Fullscreen = React.createClass({
  mixins: [littlest.Mixin],
  render: function () {
    return (
      <App>
        <div className="app__content--fullscren">
          {this.props.children}
        </div>
      </App>
    );
  }
});

module.exports = Fullscreen;
