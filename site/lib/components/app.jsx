var littlest = require('littlest-isomorph');
var React = require('react');

var App = React.createClass({
  mixins: [littlest.Mixin],
  render: function () {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
